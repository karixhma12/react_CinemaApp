import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/genre/:name" element={<Genre/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>       
      </Routes>
    </BrowserRouter>
  )
}

export default App;
