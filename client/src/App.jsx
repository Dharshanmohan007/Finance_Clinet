import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import Finance from './pages/finance'
import Receipt from './pages/Receipt'
// import Layout from './layout/MainLayout';
import FeeBalance from './pages/FeeBalance'

// import { ToastContainer } from 'react-toastify'
import toast, { Toaster } from "react-hot-toast";
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>
      {/* <ToastContainer position="top-right" autoClose={1500} /> */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            fontSize: "14px",
            background:  "#ffffff",
            color:  "#111827",
          },
        }}
      />
      {/* <Navbar/>
      <Sidebar/> */}
      <Routes>
        <Route element={<MainLayout/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='/finance' element={<Finance/>}/>
        <Route path='/receipt' element={<Receipt/>}/>
        <Route path='/feebalance' eleme={<FeeBalance/>}/>
      </Routes>
    </>
  )
}

export default App
