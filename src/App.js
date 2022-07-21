import { useState } from "react"
import style from "./App.module.css"

function App() {
  const [toDo, setTodo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (e) => setTodo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    if (toDo === "") {
      return alert("You must write something!")
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setTodo("")
  }
  const deleteTodo = (e) => {
    e.target.parentElement.style.display = "none"
  }

  return (
    <div className={style.todoList}>
      <div className={style.header}>
        <h1 className={style.title}>My ToDo List</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
          />
          <button className={style.addBtn}>Add</button>
        </form>
      </div>
      <hr />
      <div className={style.list}>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>
              {item}
              <button className={style.close} onClick={deleteTodo}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
