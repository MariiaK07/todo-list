import React, { createContext, useState } from 'react';
import { ITodo } from '../../types/ITodo';


type GlobalContent = {
  todos: ITodo[],
  setTodos: (todos: ITodo[]) => void;
  selectedTodoId: number | null,
  setSelectedTodoId: (todoId: number | null) => void,
};

type TodosProviderProps = {
  children: React.ReactNode;
};


export const TodosContext = createContext<GlobalContent | null>(null);


export const TodosProvider = (props: TodosProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      selectedTodoId,
      setSelectedTodoId
    }}>
      {props.children}
    </TodosContext.Provider>
  );
};
