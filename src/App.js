// import React from 'react'
// import List from './components/Overview'
import React, { Component } from 'react'

// My implementation
// class App extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props)

//     this.state = {
//       tasksArray: [],
//     }

//     this.onSubmitBtn = this.onSubmitBtn.bind(this)
//   }

//   onSubmitBtn() {
//     this.element = document.getElementById('task').value
//     this.populateArray(this.element)
//     document.getElementById('task').value = ''
//   }

//   populateArray(task) {
//     this.setState(
//       (prevState) => {
//         const newArray = [...prevState.tasksArray]
//         newArray.push(task)
//         return { tasksArray: newArray }
//       },
//       () => {
//         console.log({ 'State update': this.state.tasksArray })
//       }
//     )
//   }

//   render() {
//     return (
//       <div>
//         <input type='text' id='task' />
//         <br />
//         <button type='submit' onMouseDown={this.onSubmitBtn}>
//           Submit Button
//         </button>
//         <List state={this.state.tasksArray} />
//       </div>
//     )
//   }
// }
/////////////////////////////////

// TOP implementation
import uniqid from 'uniqid'
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '', id: uniqid() },
    })
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview task={tasks} />
      </div>
    )
  }
}

export default App
