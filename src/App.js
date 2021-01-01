import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title() {
  return (
    <>
    <h1 className="Title">Task List</h1>
    </>
  );
}

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      isdone = false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.isdone != isdone;
  };

  render{
    if (isdone){
      return(
        <>
          <p 
          className="task" 
          onClick={this.handleClick}>
            {this.state.data}
            </p>
        </>
      );
    }
    else{
      return(
        <>
          <p 
          className="task" 
          onClick={this.handleClick}>
            <s>
            {this.state.data}
            </s>
          </p>
        </>
      );
    }
  };
}



}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
