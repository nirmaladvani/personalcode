import { useState } from 'react'
import './App.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [todos, setTodos] = useState([])
  const [isEditIndex, setIsEditIndex] = useState(null)
  const [filter, setFilter] = useState('all')

  const addTask = () => setIsOpen(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newTask = {
      title: formData.get('title'),
      status: formData.get('status'),
    }
    setTodos([...todos, newTask])
    setIsOpen(false)
    event.target.reset() // Reset the form fields
  }

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  const handleEdit = (index) => {
    setIsEditIndex(index)
  }

  const handleUpdate = (index, event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newTask = {
      title: formData.get('title'),
      status: formData.get('status'),
    }
    const updateTodos = [...todos]
    updateTodos[index] = newTask
    setIsEditIndex(null)
    setTodos(updateTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true
    return todo.status === filter
  })

  const showNoTodosMessage = todos.length === 0
  const showFilterSpecificMessage =
    filteredTodos.length === 0 && todos.length > 0

  return (
    <>
      <div className="container">
        <p className="title">Todo list</p>
        <div className="btns">
          <button className="add_task" onClick={addTask}>
            Add Task
          </button>
          <div className="dropdown">
            <button className="dropbtn">
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'selected' : ''}
              >
                All
              </a>
              <a
                href="#"
                onClick={() => setFilter('incomplete')}
                className={filter === 'incomplete' ? 'selected' : ''}
              >
                Incomplete
              </a>
              <a
                href="#"
                onClick={() => setFilter('complete')}
                className={filter === 'complete' ? 'selected' : ''}
              >
                Complete
              </a>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="modal_container">
            <h3>Add TODO</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Write title here"
                required
              />
              <label htmlFor="status">Status</label>
              <select name="status" id="status">
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>

              <button type="submit" className="add_task">
                Add Task
              </button>
              <button className="add_task" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
        <div className="todos">
          {showNoTodosMessage && <p style={{ color: '#646681' }}>No TODOS</p>}
          {showFilterSpecificMessage && filter === 'complete' && (
            <p style={{ color: '#646681' }}>All TODOS are incomplete</p>
          )}
          {showFilterSpecificMessage && filter === 'incomplete' && (
            <p style={{ color: '#646681' }}>All TODOS are complete</p>
          )}
          {!showNoTodosMessage && !showFilterSpecificMessage && (
            <ul>
              {filteredTodos.map((todo, index) => (
                <li key={index}>
                  <span className="title">{todo.title}</span>
                  <div className="actions">
                    <input
                      type="checkbox"
                      checked={todo.status === 'complete'}
                      onChange={(event) => {
                        const updatedTodos = [...todos]
                        updatedTodos[index].status = event.target.checked
                          ? 'complete'
                          : 'incomplete'
                        setTodos(updatedTodos)
                      }}
                    />
                    <button onClick={() => handleEdit(index)}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {isEditIndex !== null && (
        <div className="edit_container">
          <h3>Update TODO</h3>
          <form onSubmit={(event) => handleUpdate(isEditIndex, event)}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Write title here"
              value={todos[isEditIndex].title}
              onChange={(event) => {
                const updatedTodos = [...todos]
                updatedTodos[isEditIndex].title = event.target.value
                setTodos(updatedTodos)
              }}
              required
            />
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={todos[isEditIndex].status}
              onChange={(event) => {
                const updatedTodos = [...todos]
                updatedTodos[isEditIndex].status = event.target.value
                setTodos(updatedTodos)
              }}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>

            <button type="submit" className="add_task">
              Update Task
            </button>
            <button className="add_task" onClick={() => setIsEditIndex(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  )
}
