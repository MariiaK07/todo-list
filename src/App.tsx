import React from 'react';
import './App.css';
import { TodosProvider } from './components/hoc/TodosProvider';

import Form from './components/Form';
import Todos from './components/Todos';
import Modal from './components/Modal';

const App: React.FC = () => (
  <TodosProvider>
    <div className="app">
      <Form />
      <Todos />
      <Modal />
    </div>
  </TodosProvider>
);

export default App;
