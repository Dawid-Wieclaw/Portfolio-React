import AllProjects from "@/Pages/AllProjects";
import Home from "@/Pages/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter basename="/Portfolio-React/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AllProjects" element={<AllProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;