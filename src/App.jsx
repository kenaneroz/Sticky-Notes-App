import { useEffect, useRef, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import { nanoid } from 'nanoid'
import Todo from './components/Todo.jsx'

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('savedTodos'))
  const [todos, setTodos] = useState(() => savedTodos || [])
  const [bg, setBg] = useState('bg-green-200')

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos))
  }, [todos])
   
  function newTodo(e) {
    const date = new Date
    const day = String(date.getDate()).padStart(2, '0')
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const formattedDate = `${month} ${day}, ${year}`
    
    const todo = {
      id: nanoid(),
      title: 'Title',
      content: 'Content',
      date: formattedDate,
      isPinned: false,
      bgColor: bg,
      isSelected: false
    }
    setTodos(prev => [...prev, todo])
  }

  function updateTitle(e, id) {
    setTodos(olds => olds.map(old => old.id === id ? {...old, title: e.target.value} : old))
  }

  function updateContent(e, id) {
    setTodos(olds => olds.map(old => old.id === id ? {...old, content: e.target.value} : old))
  }

  function pin(id) {
    const itemToPin = todos.find(todo => todo.id === id);
    const remainingItems = todos.filter(todo => todo.id !== id);
    setTodos([itemToPin, ...remainingItems])
  }

  function handleDelete(id) {
    setTodos(olds => olds.filter(old => old.id !== id))
  }

  function handleDeleteAll() {
    setTodos([])
  }

  function handleSelect(id) {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, isSelected: !todo.isSelected} : todo))
  }

  function handleTodoBgChange(newBg) {
    setTodos(todos => todos.map(todo => todo.isSelected ? {...todo, bgColor: newBg} : todo))
  }

  function handleDelete() {
    setTodos(todos => todos.filter(todo => !todo.isSelected))
  }
  function handleDeleteAll() {
    setTodos([])
  }

  const stickyNoteElements = todos.map(todo => {
    return <Todo
      key={todo.id}
      todo={todo} 
      pin={pin} 
      updateTitle={updateTitle} 
      updateContent={updateContent} 
      handleDelete={handleDelete} 
      handleSelect={handleSelect}
    />  
  })

  const [mode, setMode] = useState('dark')
  function handleMode(e) {
    if(e.target.id === 'darkModeIcon') setMode('dark')
    else setMode('light')
  }
  



  return (
    <div className={`${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} md:flex`}>
      <Sidebar 
        newTodo={newTodo} 
        bg={bg} 
        setBg={setBg} 
        mode={mode}
        handleMode={handleMode}
        handleTodoBgChange={handleTodoBgChange}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
      {
        todos.length === 0 
        ?
        <p className='h-screen w-full flex justify-center items-center'>You haven't added anything yet.</p>
        :
        <div className="relative h-screen w-full flex flex-wrap gap-[10px] p-[25px] md:p-[100px] overflow-y-scroll">{stickyNoteElements}</div>
      }
    </div>
  )
}
 
export default App
