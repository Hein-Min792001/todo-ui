import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllTodos } from '../service/TodoService';
import { useNavigate } from 'react-router';

export default function ListToDoComponent() {

    const [todos,setTodos] = useState([]);
    const navigator = useNavigate();
    useEffect(() => {
        listsTodo();
    },[]);

    const createTodo = () => navigator('/add-todo');

    function listsTodo(){
        getAllTodos()
            .then((resp) => setTodos(resp.data))
            .catch(err => console.log(err))
    }
  return (
    <div className='container mt-5'>
        <h2 className='text-center'>Lists of Todos</h2>
        <button className='btn btn-primary my-3' onClick={()=>createTodo()}>Create Todo</button>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'Yes' : 'No'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
