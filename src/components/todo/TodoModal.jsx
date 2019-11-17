import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { MODAL } from '../../utils/constants';

import './TodoModal.css'

class TodoModal extends Component {

    handleChange = (e) => {
        let value = e.target.id === "done" ? e.target.checked : e.target.value;
        this.props.handleChange(e.target.id, value);
    }

    handleSave = () => {
        if (this.props.modalType === MODAL.ADD) {
            this.props.createTodo();
        } else {
            this.props.updateTodo();
        }
    }

    render() {

        let bucketOptions = this.props.buckets.map(bucket => (
            <option key={bucket.id}>{bucket.title}</option>
        ));

        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.modalType} TODO</ModalHeader>
                <ModalBody className="todo-modal-body">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            onChange={this.handleChange}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            value={this.props.todo.title}
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
                            value={this.props.todo.description}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bucket">Bucket</Label>
                        <Input
                            onChange={this.handleChange}
                            type="select"
                            name="bucket"
                            id="bucket"
                            placeholder="Bucket"
                            value={this.props.todo.bucket}
                        >
                            {bucketOptions}
                        </Input>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input checked={this.props.todo.done} id="done" onChange={this.handleChange} type="checkbox" /> Done
                        </Label>
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
)(TodoModal);
