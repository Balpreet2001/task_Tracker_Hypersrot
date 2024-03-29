import Tasks from './components/Tasks';
import './App.css';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="App">
    Task manager
    <Tasks/>
    <EditTask />
    </div>
  );
}

export default App;
