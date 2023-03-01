import React from 'react';
import { ITodo } from '../../../types/ITodo';
import { useTodos } from '../../../hooks/useTodos';

const Todo: React.FC<ITodo> = ({
  id,
  title,
  description,
  status
}) => {
  const content = useTodos();
  const todos = content?.todos;
  const setTodos = content?.setTodos;
  const setSelectedTodoId = content?.setSelectedTodoId;

  const toggleTodo = (
    e: React.FormEvent<HTMLInputElement>,
    todoId: number
  ): void => {
    e.stopPropagation();

    if (todos && setTodos) {
      setTodos(todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            status: !todo.status,
          };
        }

        return todo;
      }));
    }
  };

  const handleClick = (e: any, todoId: number) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
      return;
    }

    setSelectedTodoId && setSelectedTodoId(todoId)
  };

  return (
    <tr onClick={(e) => handleClick(e, id)}>
      <td>{`${id}.`}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => toggleTodo(e, id)}
        />
      </td>
    </tr>
  );
};

export default Todo;
