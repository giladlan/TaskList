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
      isChecked = false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render(){
    if (isdone){
      return(
        <p 
        className="task" 
        onClick={this.handleClick}>
          {this.state.data}
        </p>
      );
    }
    else{
      return(
        <p 
        className="task" 
        onClick={this.handleClick}>
          <s>
          {this.state.data}
          </s>
        </p>
      );
    }
  };
}

// not needed for this version
// class FullTask extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {isChecked: false};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e){
//     this.setState({
//       isChecked: !this.isChecked
//     });
//   }

//   render(){
//     return(
//       <>
//         <input type="checkbox" id="task" name="vehicle1" value="Bike" on></input>
//       </>
//     );
//   }
// }


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
