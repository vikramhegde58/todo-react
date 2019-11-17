import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import BucketCard from './BucketCard';
import BucketModal from './BucketModal';
import { createBucket, updateBucket, deleteBucket } from '../../actions/BucketActions'
import { MODAL } from '../../utils/constants';

class BucketContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedBucket: null,
            modal: false
        }
    }

    handleChange = (id, value) => {
        let bucket = { ...this.state.selectedBucket };
        bucket[id] = value;
        this.setState({
            selectedBucket: bucket
        });
    }

    editBucket = (bucket) => {
        this.setState({
            selectedBucket: bucket,
            modalType: MODAL.EDIT
        }, () => {
            this.toggleModal();
        });
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    deleteBucket = (id) => {
        this.props.deleteBucket(id);
    }

    updateBucket = () => {
        this.props.updateBucket(this.state.selectedBucket);
        this.toggleModal();
    }

    createBucket = () => {
        this.props.createBucket(this.state.selectedBucket);
        this.toggleModal();
    }

    addBucket = (bucket) => {
        this.setState({
            selectedBucket: bucket,
            modalType: MODAL.ADD
        }, () => {
            this.toggleModal();
        });
    }

    render() {

        let bucketsDiv = this.props.buckets.map(bucket => (
            <BucketCard
                bucket={bucket}
                key={bucket.id}
                deleteBucket={this.deleteBucket}
                editBucket={this.editBucket}
            />
        ));

        return (
            <div>
                <Row>
                    {bucketsDiv}
                    <BucketCard addBucket={this.addBucket} />
                </Row>
                {this.state.selectedBucket ?
                    <BucketModal
                        bucket={this.state.selectedBucket}
                        modal={this.state.modal}
                        toggle={this.toggleModal}
                        updateBucket={this.updateBucket}
                        handleChange={this.handleChange}
                        modalType={this.state.modalType}
                        createBucket={this.createBucket}
                    /> :
                    ""}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    buckets: state.bucketReducer.buckets
});

export default connect(
    mapStateToProps,
    {
        updateBucket,
        deleteBucket,
        createBucket
    }
)(BucketContainer);
