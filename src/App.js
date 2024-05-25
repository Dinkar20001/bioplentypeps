// import {Route, Routes } from 'react-router-dom';
import './App.css';
// import Productlist from './components/Pages/Productlist/Productlist.jsx';
import Home from './components/home/Home.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Underdev from './components/Pages/Underdev.jsx';

function App() {
  return (
    <>
    {/* // <BrowserRouter> */}
    <Home />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/underdev" element={<Underdev />} />
      </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
