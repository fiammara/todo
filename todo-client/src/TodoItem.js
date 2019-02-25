import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const TodoItem = (props) => {
    return (
        <tr>

            <td>{props.data.name}</td>
            <td>
                <button onClick={() =>
                    props.delete(props.data.id)}>
                    <i className="fa fa-archive ">
                    </i>
                </button>
            </td>
        </tr>
    )
}

export default TodoItem;