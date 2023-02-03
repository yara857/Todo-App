import Header from "./Component/Header";
import Form from "./Component/Form";
import {useState} from "react"
// import Todo from "./Component/Todo";
import TodoList from "./Component/TodoList";
function App() {
  const [todo,setTodo] = useState('')
  const [todoList,setTodoList] = useState([])
  return (
    <div className="App">
      <Header></Header>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}></Form>
      {/* <Todo></Todo> */}
      <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
