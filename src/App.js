import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage/HomePage';
import ProductsPage from './Routes/ProductsPage/ProductsPage';
import CategoryPage from './Routes/CategoryPage/CategoryPage';
import DetailProduct from './Routes/DetailProduct/DetailProduct';
import SearchPage from './Routes/SearchPage/SearchPage';
import SectionPage from './Routes/SectionPage/SectionPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/section/:slug" exact component={SectionPage} />
        <Route path="/category/:slug" exact component={CategoryPage} />
        <Route path="/product/:slug" exact component={DetailProduct} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
