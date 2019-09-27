import React from 'react';
import '../App.css';
import Input from '../Compnents/Input';
import TodoList from '../Compnents/ToDoList';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
    
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state={
      list:[],
      input: ''
    }
  }
  addTodo = () => {
    const {input} = this.state;
    console.log('hello');
   if(input)
    this.setState({list:this.state.list.concat(input)});
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render(){
    return(
      <div className="App">
        <h1>TO-DO</h1>
        <Input addTodo = {this.addTodo} handleChange={this.handleChange}/>
        <TodoList list={this.state.list} />
      </div>
    )
  }
}
export default App;
