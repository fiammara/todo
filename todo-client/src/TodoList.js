import React, {Component} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';



class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [{
                id: '',
                name: '',
               
            }],            
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

   
    render() {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <h3>New item</h3>

                <button className="btn btn-info">Add</button>
              

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