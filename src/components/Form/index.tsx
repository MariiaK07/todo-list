import React, { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const content = useTodos();
  const todos = content?.todos;
  const setTodos = content?.setTodos;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError(true);
      return;
    }

    if (!description.trim()) {
      setDescriptionError(true);
      return;
    }

    if (todos && setTodos) {
      setTodos([...todos, {
        id: todos.length + 1,
        title,
        description,
        status: false,
      }]);
    }

    setTitle('');
    setDescription('');
    setTitleError(false);
    setDescriptionError(false);
  };


  return (
    <form
      action=""
      method="get"
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="input">
        <label><b>Title:</b></label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={titleError ? 'error' : ''}
        />
        {titleError && (
          <p className="error-text">Title is required</p>
        )}
      </div>

      <div className="input">
        <label><b>Description</b>:</label>
        <input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={descriptionError ? 'error' : ''}
        />
        {descriptionError && (
          <p className="error-text">Description is required</p>
        )}
      </div>

      <button type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
