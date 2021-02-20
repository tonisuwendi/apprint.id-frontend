import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage/HomePage';
import ProductsPage from './Routes/ProductsPage/ProductsPage';
import CategoryPage from './Routes/CategoryPage/CategoryPage';
import DetailProduct from './Routes/DetailProduct/DetailProduct';
import Demo from './Routes/Demo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/category/:slug" exact component={CategoryPage} />
        <Route path="/product/:slug" exact component={DetailProduct} />
        <Route path="/demo" exact component={Demo} />
      </Switch>
    </Router>
  );
}

export default App;
