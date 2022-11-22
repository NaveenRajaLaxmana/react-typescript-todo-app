import React, {useEffect, useId, useRef, useState } from 'react'

const items:TodoItem[] = [{id:1,todo:"take notes blender",iscompleted:false}]

type TodoItem = {
    id:number,
    todo:string,
    iscompleted:Boolean
}
const Home = () => {
    const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
    const Id = useId()
    const [todos,setTodos] = useState<TodoItem[]>([])
    const onSubmit= (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(inputRef.current?.value===null || inputRef.current?.value.trim()==="")return
        let item:TodoItem = {
            id: Math.random() * 100,
            todo:inputRef?.current?.value,
            iscompleted:false
        }
        setTodos((previtem) => [...previtem,item])
    }
    useEffect(() => {
        setTodos(items)
    },[])
  return (
    <div className='home'>
        <div className='header'>
            <h1>Todo App</h1>
            <input ref={inputRef} type={'text'} placeholder={"Enter todo"} className='input'/>
            <button className='button' onClick={onSubmit}>Add</button>
        </div>
        <div className='flex-show'>
        {todos?.map((todo:TodoItem) => <Showtodos key={todo.id} id={todo.id} todo={todo.todo} iscompleted={todo.iscompleted}/>)}
        </div>
    </div>
  )
}

const Showtodos = ({id,todo,iscompleted}:TodoItem) => {
    
    return (
        <div className='show-todo'>
            <h6>Id: {id}</h6>
            <h5>Todo : {todo}</h5>
            <h6>isCompleted : {iscompleted ? 'done' : 'not yet'}</h6>
        </div>
    )
}

export default Home