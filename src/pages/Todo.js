import {useState} from 'react'

const Todo = () => {
    const [todos] = useState([{id: 1, name: 'school'}])

    const updateTodo = () => {
        // setTodo(todos.push({id: 2, name: 'uiaaoi'}))
    }

    return (
        <>
        {todos.map((todo) => <p key={todo.id}>{todo.id}. {todo.name}</p>)}
        <button onClick={updateTodo}>Add todo</button>
        </>
    )
}

export default Todo