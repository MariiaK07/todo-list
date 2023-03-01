import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import Todo from './Todo';

const Todos: React.FC = () => {
  const content = useTodos();
  const todos = content?.todos;

  return <>
    {todos && todos.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <Todo
              key={i}
              {...todo}
            />
          ))}
        </tbody>
      </table>
    )}
  </>;
};

export default Todos;
