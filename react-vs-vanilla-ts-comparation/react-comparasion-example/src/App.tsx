import Todo from './components/Todo';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
    </div>
  );
};

export default App;
