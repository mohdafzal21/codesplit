import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicImport from './DynamicImport'

const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {(Component) => Component === null
      ? <h1>Loading</h1>
      : <Component {...props} />}
  </DynamicImport>
)



class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Code Splitting React Example</h1>
       <div>
         <Home/>
       </div>
      </div>
    );
  }
}

export default App;
