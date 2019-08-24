import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {
  const { name, id, handleDelete } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button type="button" onClick={() => handleDelete(id)}>
         Archive 
          <DeleteIcon color="default" />
        </button>
        
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default TodoItem;
