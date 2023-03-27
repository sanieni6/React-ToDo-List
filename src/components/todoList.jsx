/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './item';

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul className="list">
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
};
TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
  ])).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;
