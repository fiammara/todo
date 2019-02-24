import React, { Component } from 'react';
import axios from 'axios';
import ArchiveItem from './ArchiveItem';

class ArchiveList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            archived: [{
                id: '',
                name: ''
            }],          
        };
    }

    componentDidMount() {
        this.getData();
       
    }

    getData() {
        axios.get("http://localhost:8080/api/archive").then((response) => {
            this.setState({ archived: response.data });

        });
    }   
    
    render() {
        return (
            <div>
               
                <table className="table">
                    
                    <tbody>
                        {this.state.archived.map((todo, index) => {
                            return <ArchiveItem key={todo.id} arrayId={index} data={todo} />
                        })}
                    </tbody>
                </table>
                <br />
            
            </div>
        );
    }
}

export default ArchiveList;