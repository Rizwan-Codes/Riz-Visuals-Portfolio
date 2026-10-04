import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logos from "./pages/Logos";
import Posts from "./pages/Posts";
import Thumbnails from "./pages/Thumbnails";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="logos" element={<Logos />} />
      <Route path="posts" element={<Posts />} />
      <Route path="thumbnails" element={<Thumbnails />} />
  

    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;