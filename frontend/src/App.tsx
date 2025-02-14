
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Layout from "@/components/Design/Layout.tsx";
import Auth from "@/components/Authentication/Auth.tsx"
function App() {

  return (
      <BrowserRouter>
        <Routes>
           <Route path='ExpressAuthentication' element={<Outlet/>}>
           <Route path='' element={<Layout/>}>
              <Route index element={<h2> Home page is this </h2>}></Route>
              <Route path="about" element={<h2> About page is this </h2>}></Route>
           </Route>
          <Route path='auth' element={<Auth/>}/>
           </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App
