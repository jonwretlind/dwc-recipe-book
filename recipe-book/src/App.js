import logo from './hat.svg';
import './App.css';
import Recipe from './Recipe';

function App() {
  return (
    <div id="RecipeBook" className="App">
      <header className="App-header">
        <h1><span><img src={logo} /></span>Recipe Book</h1>
        <div className="container">
          <Recipe />
        </div>
      </header>
    </div>
  );
}

export default App;
