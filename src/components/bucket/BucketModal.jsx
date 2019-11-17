import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { MODAL } from '../../utils/constants';

import './BucketModal.css';

class BucketModal extends Component {

    handleChange = (e) => {
        let value = e.target.id === "done" ? e.target.checked : e.target.value;
        this.props.handleChange(e.target.id, value);
    }

    handleSave = () => {
        if (this.props.modalType === MODAL.ADD) {
            this.props.createBucket();
        } else {
            this.props.updateBucket();
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.modalType} BUCKET</ModalHeader>
                <ModalBody className="bucket-modal-body">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            onChange={this.handleChange}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            value={this.props.bucket.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            onChange={this.handleChange}
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={this.props.bucket.description}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={this.handleSave}>
                        {this.props.modalType === MODAL.ADD ? "Add" : "Update"}
                    </Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    buckets: state.bucketReducer.buckets
});


export default connect(
    mapStateToProps
)(BucketModal);
