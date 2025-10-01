import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "@/components/Design/Layout.tsx";
import "@radix-ui/themes/styles.css";
import LandingPage from "@/components/Design/LandingPage.tsx";
import HomeScreen from "@/Screens/HomeScreen.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path="dashboard"
                           element={<HomeScreen/>}></Route>
                    <Route path="about"
                           element={<h2> About page is this </h2>}></Route>
                    <Route path="services"
                           element={<h2> Service page is this </h2>}></Route>
                    <Route path="contact"
                           element={<h2> Contact page is this </h2>}></Route>
                </Route>
                <Route path="/landing" element={<Layout/>}>
                    <Route index element={<LandingPage/>}></Route>
                </Route>
                <Route path="*" element={<h1> 404 Not Found </h1>}></Route>


            </Routes>
        </BrowserRouter>

    )
}

export default App
