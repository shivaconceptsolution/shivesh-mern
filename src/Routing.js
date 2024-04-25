import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Front";
import Company from "./Company";
import Contact from "./Contact";
import Home from "./Home";

function Routing()
{
    return(
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<Front />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing