import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoria'  element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App