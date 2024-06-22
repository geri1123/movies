import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Admin from './Pages/Admin/Admin'
import {Routes ,  Route} from 'react-router-dom'
import Addproduct from './Components/Addproduct/Addproduct'
import Sidebar from './Components/Sidebar/Sidebar'
import Listproduct from './Components/Listproduct/Listproduct'
import './App.css'
import GenreList from './Components/Gernrelist/GenreList'
import EditProduct from './Components/Editproduxt/Editproduct'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <div className="appside">
      <Sidebar/>
      {/* <Admin/> */}
      <Routes>
            <Route exact path='/' element={<Addproduct/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
            <Route path='genrelist' element={<GenreList/>}/>
            <Route path='/editproduct/:id' element={<EditProduct/>}/> 
        </Routes></div>
    </div>
  )
}

export default App
