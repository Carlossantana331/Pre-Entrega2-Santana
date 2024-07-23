import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Electrico from './components/pages/Electrico.jsx'
import Maderas from './components/pages/Maderas'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route path='/electrico' element={<Electrico/>}/>
        <Route path='/maderas' element={<Maderas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App