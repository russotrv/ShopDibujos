import './App.css'
import { CartProvider } from './context/cart.jsx'
import { ShopLibritos } from './pages/ShopLibritos.jsx'
import { ShopPrints } from './pages/ShopPrints.jsx'
import { PrintPersonalizado } from './pages/PrintPersonalizado.jsx'
import { LibritoPersonalizado } from './pages/LibritoPersonalizado.jsx'
import { Home } from './pages/Home.jsx'
import { Carrito } from './pages/Carrito.jsx'
import { Router } from './Components/Router/Router.jsx'
import { Route } from './Components/Router/Route.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: ({routeParams}) => <h1>Buscaste {routeParams.query} </h1>
  }
]

function App() {
  return (
    <CartProvider>
      <Router routes = {appRoutes} >
        <Route path='/' Component={Home} />
        <Route path='/shop-libritos' Component={ShopLibritos} />
        <Route path='/shop-prints' Component={ShopPrints} />
        <Route path='/carrito' Component={Carrito} />
        <Route path='/print-personalizado' Component={PrintPersonalizado} />
        <Route path='/librito-personalizado' Component={LibritoPersonalizado} />
      </Router>
    </CartProvider>
  )
}

export default App