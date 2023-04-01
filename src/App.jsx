import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgrammingWeb from './components/ProgrammingWeb/ProgrammingWeb'
import Question from './components/question/Question'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
           <Header></Header>
           <ProgrammingWeb></ProgrammingWeb>
           <Question></Question>
           <ToastContainer/>
      </div>
  )
}

export default App
