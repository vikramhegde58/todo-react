import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import { updateTodo, deleteTodo, createTodo } from '../../actions/TodoActions'
import TodoCard from './TodoCard';
import TodoModal from './TodoModal';
import { MODAL } from '../../utils/constants';

class TodoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            modalType: MODAL.ADD,
            selectedTodo: null
        }
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    editTodo = (todo) => {
        this.setState({
            selectedTodo: todo,
            modalType: MODAL.EDIT
        }, () => {
            this.toggleModal();
        });
    }

    handleChange = (id, value) => {
        let todo = { ...this.state.selectedTodo };
        todo[id] = value;
        this.setState({
            selectedTodo: todo
        });
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    updateTodo = () => {
        this.props.updateTodo(this.state.selectedTodo);
        this.toggleModal();
    }

    createTodo = () => {
        this.props.createTodo(this.state.selectedTodo);
        this.toggleModal();
    }

    addTodo = (todo) => {
        this.setState({
            selectedTodo: todo,
            modalType: MODAL.ADD
        }, () => {
            this.toggleModal();
        });
    }

    render() {

        let todosDiv = this.props.todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
        ));

        return (
            <div>
                <Row>
                    {todosDiv}
                    <TodoCard addTodo={this.addTodo} />
                </Row>
                {this.state.selectedTodo ?
                    <TodoModal
                        todo={this.state.selectedTodo}
                        modal={this.state.modal}
                        toggle={this.toggleModal}
                        updateTodo={this.updateTodo}
                        handleChange={this.handleChange}
                        modalType={this.state.modalType}
                        createTodo={this.createTodo} />
                    :
                    ""}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
});

export default connect(
    mapStateToProps,
    {
        updateTodo,
        deleteTodo,
        createTodo
    }
)(TodoContainer);
