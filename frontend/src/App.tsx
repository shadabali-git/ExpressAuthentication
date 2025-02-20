
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "@/components/Design/Layout.tsx";
import "@radix-ui/themes/styles.css";
function App() {

  return (
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout/>}>
              <Route index element={<h2> Home page is this </h2>}></Route>
              <Route path="about" element={<h2> About page is this </h2>}></Route>
               <Route path="services" element={<h2> Service page is this </h2>}></Route>
               <Route path="contact" element={<h2> Contact page is this </h2>}></Route>
           </Route>


        </Routes>
      </BrowserRouter>

  )
}

export default App
