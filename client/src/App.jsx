import './App.css'
import {Routes,Route} from 'react-router-dom'
// import Landing from './pages/Landing'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Login from './pages/Login'

function App() {

  return (
    <>
      {/* <Navbar/>
      <Sidebar/> */}
      <Routes>
        {/* <Route path='/' element={<Landing/>}/> */}
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
