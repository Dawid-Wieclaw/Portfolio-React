import AllProjects from "@/Pages/AllProjects";
import Home from "@/Pages/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div>
      <BrowserRouter basename="/Portfolio-React/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AllProjects" element={<AllProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;