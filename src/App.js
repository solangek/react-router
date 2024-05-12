import Home from "./components/Home";
import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWithData from "./components/PageWithData";

function App() {
  return (
      <>
        <BrowserRouter>
            <p>
                This example demonstrates some of the core features of React Router
                including nested <code>&lt;Route&gt;</code>s,{" "}
                <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
                "*" route (aka "splat route") to render a "not found" page when someone
                visits an unrecognized URL.
            </p>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}

          <Routes>
            <Route path="/" element={<Menu/>}>
              <Route index element={<Home/>}/>
              <Route path="/otherpage" element={<OtherPage/>}/>
              <Route path="/params/:id" element={<PageWithData/>}/>
              <Route path={"*"} element={<NotFound/>}/>
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
