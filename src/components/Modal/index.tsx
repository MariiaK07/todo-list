import React from 'react';
import { useTodos } from '../../hooks/useTodos';

const Modal: React.FC = () => {
  const content = useTodos();
  const todos = content?.todos;
  const selectedTodoId = content?.selectedTodoId;
  const setSelectedTodoId = content?.setSelectedTodoId;

  const selectedTodo = todos?.find(todo => todo.id === selectedTodoId);

  return <>
    {selectedTodo && (
      <div className="modal-wrapper">
        <div className="modal">
          <h3 style={{alignSelf: 'center'}}>
            {selectedTodo.title}
          </h3>
          <h4>Description:</h4>
          <p>{selectedTodo.description}</p>
          <label>
            Status:
            <input
              type="checkbox"
              checked={selectedTodo.status}
              readOnly
            />
          </label>
          <button
            onClick={() => setSelectedTodoId && setSelectedTodoId(null)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </>;
};

export default Modal;
