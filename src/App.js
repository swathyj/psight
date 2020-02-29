import React, {Component} from 'react';
import Counter from './components/counter/Counter.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
     Counter
     <Counter/>
    </div>
  );
}
}

export default App;
