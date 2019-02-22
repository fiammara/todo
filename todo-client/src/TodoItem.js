import React from 'react';

const TodoItem = (props) => {
    return(
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            
            <td>
                <button className="btn btn-success" >Button</button>
            </td>

            <td>
                <button className="btn btn-danger" >Button</button>
            </td>
        </tr>
    )
}

export default TodoItem;