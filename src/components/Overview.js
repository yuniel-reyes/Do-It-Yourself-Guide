import React from 'react'
//# My implementation
// class List extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props)

//     this.addTask = this.addTask.bind(this)
//   }

//   addTask() {
//     const { state } = this.props
//     return state.map((task, index) => <li key={index}>{task}</li>)
//   }

//   render() {
//     return (
//       <div>
//         <ul id='list'>{this.addTask()}</ul>
//       </div>
//     )
//   }
// }

// export default List

// TOP implementation

const Overview = (props) => {
  const { tasks } = props

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>
      })}
    </ul>
  )
}

export default Overview
