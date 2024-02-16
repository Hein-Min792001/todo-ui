import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { saveTodo } from '../service/TodoService';

export default function CreateToDoComponent() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [completed,setCompleted] = useState(false);
    const navigator = useNavigate();
    const saveNewTodo = e => {
        e.preventDefault();
        const todo = {title,description,completed};
        saveTodo(todo).then((resp) => {
            console.log(resp);
            navigator("/todos");
        }).catch(err => console.log(err))
    }

  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className='text-center'>Add To Do</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Title
                                    </label>
                                    <input type="text" 
                                            className='form-control'
                                            placeholder='Enter Title'
                                            name='title'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Description
                                    </label>
                                    <input type="text" 
                                            className='form-control'
                                            placeholder='Enter ToDo Description'
                                            name='description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Completed
                                    </label>
                                    <select className='form-control' value={completed} onChange={(e) => setCompleted(e.target.value)}>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                </div>
                                <button className='btn btn-primary' onClick={(e) => saveNewTodo(e)}>Save Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
