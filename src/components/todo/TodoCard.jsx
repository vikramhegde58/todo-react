import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './TodoCard.css'

import editIcon from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/delete.png';
import addIcon from '../../assets/images/add.png';
import { GENERATE_UUID } from '../../utils/constants';

class TodoCard extends Component {

    deleteTodo = () => {
        this.props.deleteTodo && this.props.deleteTodo(this.props.todo.id);
    }

    editTodo = () => {
        this.props.editTodo(this.props.todo);
    }

    addTodo = (e) => {
        let todo = {
            id: GENERATE_UUID(),
            title: "",
            description: "",
            bucket: "",
            done: false
        }
        this.props.addTodo(todo);
    }

    render() {
        return (
            <Col md="4" sm="6" xs="12">
                {this.props.todo ? (
                    <div className="todo-card">
                        <h5 className="title text-capitalize">{this.props.todo.title}</h5>
                        <h6 className="description">{this.props.todo.description}</h6>
                        <p>{this.props.todo.bucket}</p>
                        <p>Status: <strong className={this.props.todo.done ? "text-success" : "text-danger"}>{this.props.todo.done ? "Done" : "Pending"}</strong></p>
                        <div className="text-center">
                            <img className="img-icon" onClick={this.editTodo} height="35" width="35" src={editIcon} alt="edit-icon" />
                            <img className="img-icon" onClick={this.deleteTodo} height="35" width="35" src={deleteIcon} alt="delete-icon" />
                        </div>
                    </div>
                ) : (
                        <div className="todo-card todo-card-icon">
                            <img className="img-icon" onClick={this.addTodo} src={addIcon} alt="add-icon" />
                            <p>Add Todo</p>
                        </div>
                    )}
            </Col>
        )
    }
}

export default TodoCard
