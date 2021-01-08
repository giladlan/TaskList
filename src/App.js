import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => {
//   grid: {
//     width: '100%'
//   }
// })

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: ["aaa", "bbb", "ccc", "ddd"]
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleDelete(index) {
    const updatedTasks = this.state.tasks;
    updatedTasks.splice(index, 1);
    this.setState({tasks: updatedTasks});
  }

  handleSubmit(task) {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  render(){
    
    return(
      <Grid 
        container 
        direction="column"
        justify="space-between"
        alignItems="center"
        className={{width:'100px', margin: '0px'}}>
          <Grid item sx={12}>
            <Header numOfTasks={this.state.tasks.length}/>
          </Grid>
          <Grid item sx={12}>
          <TaskLisk tasks={this.state.tasks} onDelete={this.handleDelete}/>
          </Grid>
          <Grid item sx={12}>
          <SubmitForm onSubmit={this.handleSubmit}/>
          </Grid>
      </Grid>
    );
  }
}

/*
  Recieves: number of tasks
  Returns: a header jsx built of header, number of tasks 
*/
function Header(props) {
  return(
    <div className="header">
      <p>
        <h1>ToDo list</h1>
        {props.numOfTasks} Tasks left
      </p>
    </div>
  );
}

/**/ 
function TaskLisk(props){
  const listOfTasks = props.tasks.map((data, index) => {
    return( 
      <Task 
        content={data} 
        key={index} 
        id={index}
        onDelete={props.onDelete}/>
      );
  });

  return(
    <div className="tasks-wrapper">
      {listOfTasks}
    </div>
  );
}

function Task(props){
  return(
    <div className="task">
      {props.content}
      <button 
        className="delete-btn"
        onClick={()=>{props.onDelete(props.id)}}/>
    </div>
  );
}

class SubmitForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.data === ' ') return;
    this.props.onSubmit(this.state.data);
    this.setState({data: " "})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="input-form">
        <input
          type="text"
          className="input-box"
          placeholder="Enter new item"
          value={this.state.data}
          onChange={(e)=> this.setState({data: e.target.value})}
        />
        <button className="add-btn"/>
      </form>
    );
  }
}

export default App;