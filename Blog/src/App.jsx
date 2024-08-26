import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './componet/navBar'
import Home from './componet/home'

function App() {

  return (
    <>
      <BrowserRouter>
       < Routes>
        <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>} />

        </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App
