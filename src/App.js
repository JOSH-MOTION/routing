
import { BrowserRouter ,Route,Routes,Link, } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">

      
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile/:id" element={<UserProfile />} />


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
