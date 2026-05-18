import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import NotFound from "./pages/NotFound";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/genre/:name" element={<Genre/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
