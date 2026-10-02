import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="/" element={<Navbar />} /> */}
      {/* <Route path="/Work" element={<Work />} /> */}
      {/* <Route path="/Process" element={<Process />} /> */}
      {/* <Route path="/About" element={<About />} /> */}
      {/* <Route path="/Contact" element={<Contact />} /> */}

    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;