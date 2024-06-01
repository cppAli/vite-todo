// eslint-disable-next-line no-unused-vars
import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

// eslint-disable-next-line react/prop-types
const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

  // eslint-disable-next-line react/prop-types
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
