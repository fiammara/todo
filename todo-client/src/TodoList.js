import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import Modal from 'react-modal'
import ItemAddComponent from './ItemAddComponent';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddItemModalOpen: false,
            todos: [{
                id: '',
                name: ''
            }],
            newItem: {
                name: ''
            },
        };
    }

    componentDidMount() {
        this.getData();

    }

    getData() {
        axios.get("http://localhost:8080/api/todos").then((response) => {
            this.setState({ todos: response.data });

        });
    }

    openAddModal = () => {
        this.setState({
            addModal: true
        });
    }
    closeAddModal = () => {
        this.setState({
            addModal: false
        });
    }

    addItem = () => {

        const { name } = this.state.newItem;

        axios.post("http://localhost:8080/api/todos", { name }).then(
            this.getData()
        );
    }
    deleteItem = (e) => {

        axios.delete("http://localhost:8080/api/todos/" + e).then(
            this.getData(),
            window.location.reload()
        );
    }
    render() {
        return (
            <div className="todoList">

                <Modal className="addModal" isOpen={this.state.addModal} onRequestClose={this.closeAddModal}>
                    <ItemAddComponent cancel={this.closeAddModal} add={this.handleOnAddItem} />
                </Modal>

                <p>To do list</p>
                <table className="table">
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                            return <TodoItem key={todo.id} arrayId={index} data={todo} delete={this.deleteItem} />
                        })}
                    </tbody>
                </table>
                <br />
                <button onClick={this.openAddModal} className="addButton">Add new</button>
            </div>
        );
    }
}

export default TodoList;