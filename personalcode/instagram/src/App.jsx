import { useState } from 'react'
import './App.css'
import Login from './components/login/login'
import SignUp from './components/sign-up/sign-up'

function App() {
  const [showIndexPage, setShowIndexPage] = useState(true)

  const toggleShowIndexPage = () => {
    setShowIndexPage((prev) => !prev)
  }

  return (
    <>
      {showIndexPage ? (
        <Login toggle={toggleShowIndexPage} />
      ) : (
        <SignUp toggle={toggleShowIndexPage} />
      )}
    </>
  )
}

export default App
