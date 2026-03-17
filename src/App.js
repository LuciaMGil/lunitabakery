
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import NotFound from './pages/NotFoundPage';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Admin from './pages/AdminPage';
import Catering from './pages/CateringPage'
import OrderNow from './pages/OrderNowPage'
import Contact from './pages/ContactPage'
import Cart from './pages/CartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/order-now' element={<OrderNow />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/catering' element={<Catering />} />
      <Route path='/about' element={<About />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
