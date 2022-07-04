import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className='h1'>Pomodoro</h1>
            <Card/>
            <h3 className='display-4'>Time to wordk!</h3>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
