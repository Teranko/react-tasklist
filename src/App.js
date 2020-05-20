import React from 'react';





class Tasklist extends React.Component {

task = [
  {
    text: 'this is task n1',
    checkflag: false,
    token: '12345'
  },
  {
    text: 'this is task n2',
    checkflag: true,
    token: '12345'    
  }
]

 render() {
    return (
      <div className="tasklist-container">
        <Head />
        <Body task={this.task}/>
        <Footer />
      </div>
    )
  }
}

class Head extends React.Component {
  render() {
    return(
      <div className="tasklist-head">
        <button
         className="tl-head-add"
          onClick={() => console.log('add category')}
        >
          add category
        </button>
        <TaskCategory />
        
      </div>
    )
  }
}

class TaskCategory extends React.Component {
  render() {
    return(
      <div className="task-category">
        <input 
          type="text" 
          defaultValue="task category" 
          className="task-category-name" 
        />
        <button 
         className="task-category-save"
         onClick={ () => console.log('save category changes')}
        >
          task category save
        </button>
        <button 
         className="task-category-remove"
         onClick={ () => console.log('remove category')}
        >
          task category remove
        </button>
      </div>
    )
  }
}

class Body extends React.Component {

  render() {
    return(
      <div className="tasklist-body">
        <BodyCreateTask />
        <BodyTask task={this.props.task}/>
      </div>
    )
  }
}

class BodyTask extends React.Component { /* */


  render(){
    return(
          this.props.task.map((el, i) => {
           return( <div className="tl-body-task" key={i}>
              <input type="checkbox" className="task-cb" />
              <span>{el.text}</span>
              <button className="task-remove" onClick={() => {this.props.task.map(el => {console.log(el)})}}>Remove task</button>
            </div>)
          })
    )
  }
  
}

class BodyCreateTask extends React.Component {
  render(){
    return(
      <div className="tl-body-task-create">
        <input type="text" defaultValue="123" />      
        <button 
         className="createtask-save" 
         onClick={ () => console.log('save created')}
        >
          Save
        </button>
        <button 
         className="createtask-remove"
         onClick={ () => console.log('discard created')}
        >
          Remove
        </button>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div className="tasklist-footer">
         <button 
         className="tl-footer-add"
         onClick={ () => {console.log('1')}}
        >
          Add Task
        </button>        
      </div>
    )
  }
}




















function App() {
  return (
    <div className="App">
      <Tasklist />
    </div>
  );
}

export default App;
