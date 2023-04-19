import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Functional/Layout';
import Home from './Functional/Home';
import AboutUs from './Functional/AboutUs';
import Services from './Functional/Services';
import Solution from './Functional/Solution';
import './App.css';
import Portfolio from './Functional/Portfolio';
import Hire from './Functional/Hire';
import OurClients from './Functional/Ourclients';
import Contact from './Functional/Contact';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='AboutUs' element={<AboutUs/>}></Route>
              <Route path='Services' element={<Services/>}></Route>
              <Route path='Solution' element={<Solution/>}></Route>
              <Route path='Portfolio' element={<Portfolio/>}></Route>
              <Route path='HireUs' element={<Hire/>}></Route>
              <Route path='OurClients' element={<OurClients/>}></Route>
              <Route path='Contact' element={<Contact/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
