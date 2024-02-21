import './App.css'
import CreateToDoComponent from './components/CreateToDoComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListToDoComponent from './components/ListToDoComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { RegisterComponent } from './components/RegisterComponent'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
          <Routes>
            {/* http://localhost:5173 */}
            <Route path='/' element={<ListToDoComponent></ListToDoComponent>}></Route>
            <Route path='/todos' element={<ListToDoComponent></ListToDoComponent>}></Route>
            {/* http://localhost:5173/add-todo*/}
            <Route path='/add-todo' element={<CreateToDoComponent></CreateToDoComponent>}></Route>
            <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
          </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
