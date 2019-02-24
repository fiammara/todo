import React from 'react';

const TodoItem = (props) => {
    return (
        <tr>

            <td>{props.data.name}</td>
            <td>
                <button className="btn btn-danger" onClick={() =>
                    props.delete(props.data.id)}>Archive</button></td>
        </tr>
    )
}

export default TodoItem;