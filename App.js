import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css';
function showName() {
  console.log('Mike');
}
function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
