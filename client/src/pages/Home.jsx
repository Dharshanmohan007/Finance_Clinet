import React from 'react'
import Sidebar from '../components/Sidebar'
import {Routes,Route} from 'react-router-dom'; 
import Dashboard from './Dashboard';
import Finance from './Finance'
import FeeBalance from './FeeBalance';
import Receipt  from './Receipt';
import NotFound from './NotFound';

export default function home() {
  return (
    <div className='flex items-center'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/feebalance' element={<FeeBalance/>}/>
          <Route path='/receipt' element={<Receipt/>}/>
          <Route path='/notfound' element={<NotFound/>}/>
        </Routes>
      </div>
      
    </div>
  )
}
