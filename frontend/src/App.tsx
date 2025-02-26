import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "@/components/Design/Layout.tsx";
import "@radix-ui/themes/styles.css";
import ProtectiveRoute from "@/components/Authentication/ProtectiveRoute.tsx";
import LandingPage from "@/components/Design/LandingPage.tsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<ProtectiveRoute><h2> Home page is this </h2></ProtectiveRoute>}></Route>
                    <Route path="about" element={<ProtectiveRoute><h2> About page is this </h2></ProtectiveRoute>}></Route>
                    <Route path="services" element={<ProtectiveRoute><h2> Service page is this </h2></ProtectiveRoute>}></Route>
                    <Route path="contact" element={<ProtectiveRoute><h2> Contact page is this </h2></ProtectiveRoute>}></Route>
                    <Route path="landing" element={<LandingPage/>}></Route>
                </Route>


            </Routes>
        </BrowserRouter>

    )
}

export default App
