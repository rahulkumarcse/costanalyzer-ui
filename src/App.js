import './App.css';
import AddSpend from './components/AddSpend';
import Navbar from './components/Navbar';
import {BrowserRouter  as Router, Routes, Route} from  'react-router-dom';
import ShowSpend from './components/ShowSpend';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
           <Route exact path='/' element={<Home/>} />
         <Route exact path='/addSpend' element={<AddSpend/>} />
          {/*<Route exact path='/showSpend' element={<ShowSpend/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
