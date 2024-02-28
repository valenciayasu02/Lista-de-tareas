import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span> .
    </h1>
  );
}

export { TodoCounter };
