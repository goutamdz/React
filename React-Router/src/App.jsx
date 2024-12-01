import Navbar from "./components/Navbar"
import {Routes,Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from "./components/home"
import About from "./components/About"
import Jobs from "./components/Jobs"
import Contact from "./components/Contact"
import Product from "./components/Product"
import RootLayout from "./Layout/RootLayout"
import ContactLayout from "./Layout/ContactLayout";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import PageNotFound from "./components/PageNotFound"
import JobsLayout from "./Layout/JobsLayout"
import {JobsLoader} from "./components/Jobs"
import JobsDetails, { JobsDetailsLoader } from "./components/JobsDetails"
import ErrorPage from "./components/ErrorPage"

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} ></Route>
        <Route path="about" element={<About/>} ></Route>
        <Route path="contact" element={<ContactLayout/>} >
          <Route path="info" element={<ContactInfo/>}/>
          <Route path="form" element={<ContactForm/>}/>
        </Route>
        <Route path="product" element={<Product/>} ></Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<ErrorPage/>}>
            <Route index element={<Jobs />} loader={JobsLoader} />
            <Route path=":id" element={<JobsDetails/>} loader={JobsDetailsLoader} />
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>
        {/* <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>} ></Route>
            <Route path="about" element={<About/>} ></Route>
            <Route path="contact" element={<Contact/>} ></Route>
            <Route path="product" element={<Product/>} ></Route>
          </Route>
        </Routes> */}
    </>
  )
}

export default App
