import { useContext } from 'react';
import { TodosContext } from '../components/hoc/TodosProvider';


export const useTodos = () => {
  return useContext(TodosContext);
};
