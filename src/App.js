import { Converter, Navbar, About, Faq, Blogs, Footer } from './components';
import { Box } from '@mui/material';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Box sx={{
      width: "85vw",
      height: "100vh",
      margin: "0 auto"
    }}>
      
      
      <Routes>
        <Route path='/' element={<><Navbar/><Converter/></> }/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/faq' element={<Faq/>}/> 
        <Route path='/blogs' element={<Blogs/>}/> 
      </Routes>
      <Footer/>
    </Box>
    </Router>
  );
}

export default App;
