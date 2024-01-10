import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./components/Pagenotfound";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
<>
<Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />


        
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
</>
  );
}

export default App;
