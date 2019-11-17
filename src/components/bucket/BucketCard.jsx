import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import './BucketCard.css'

import editIcon from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/delete.png';
import addIcon from '../../assets/images/add.png';
import { GENERATE_UUID } from '../../utils/constants';

class BucketCard extends Component {

    deleteBucket = () => {
        this.props.deleteBucket && this.props.deleteBucket(this.props.bucket.id);
    }

    editBucket = () => {
        this.props.editBucket(this.props.bucket);
    }

    addBucket = (e) => {
        let bucket = {
            id: GENERATE_UUID(),
            title: "",
            description: ""
        }
        this.props.addBucket(bucket);
    }

    render() {
        return (
            <Col md="4" sm="6" xs="12">
                {this.props.bucket ? (
                    <div className="bucket-card">
                        <h5 className="title text-capitalize">{this.props.bucket.title}</h5>
                        <h6 className="description">{this.props.bucket.description}</h6>
                        <div className="text-center">
                            <img className="img-icon" onClick={this.editBucket} height="35" width="35" src={editIcon} />
                            <img className="img-icon" onClick={this.deleteBucket} height="35" width="35" src={deleteIcon} />
                        </div>
                    </div>
                ) : (
                        <div className="bucket-card bucket-card-icon">
                            <img className="img-icon" onClick={this.addBucket} src={addIcon} />
                            <p>Add Bucket</p>
                        </div>
                    )}
            </Col>
        )
    }
}

export default BucketCard
