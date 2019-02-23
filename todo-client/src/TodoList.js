import React, {Component} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import Modal from 'react-modal'
import ItemAddComponent from './ItemAddComponent';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [{
                id: '',
                name: '',
               
            }], 
            newItem: {
               
                name: '',
               
            },           
        };     
          
    }

    componentDidMount() {
        this.getData();
      
    }

    getData() {
        axios.get("http://localhost:8080/api/todos").then((response) => {
            this.setState({todos: response.data});
           
        }); 
    }

    openAddModal = () => {
        this.setState({
            addModal: true
        });
    }
    addItem = () => {
        const { name} = this.state.newItem;
        alert ("added")
        axios.post("http://localhost:8080/api/todos/addTodo", {name}).then(
            this.getData()
        );
       
    }
    render() {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <h3>New item</h3>

                <button onClick={this.openAddModal} className="btn btn-info">Add</button>

<Modal isOpen={this.state.addModal} onRequestClose={this.closeAddModal}>
    <ItemAddComponent cancel={this.closeAddModal} add={this.addItem} changed={this.addInputChanged}/>
</Modal>
              

                <table className = "table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        
                        <th></th>
                        <th></th></tr>
                    </thead>

                    <tbody>
                        {this.state.todos.map((todo, index) => {
                            return <TodoItem key={todo.id} arrayId={index} data={todo} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;