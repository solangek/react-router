import Home from "./components/Home";
import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu/>}>
              <Route index element={<Home/>}/>
              <Route path="otherpage" element={<OtherPage/>}/>
              <Route path={"*"} element={<NotFound/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
