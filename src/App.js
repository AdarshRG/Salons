import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Salons from './Salons';
import Salonview from './Salonview';


function App() {
  return (
    <div className="App">
    <Header/>
   <Routes>
     <Route path='/' element={<Salons/>} />
    <Route path='/Salonview/:id' element={<Salonview/>} />
   </Routes>
    <Footer/>
    </div>
  );
}

export default App;
