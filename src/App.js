import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage/HomePage';
import ProductsPage from './Routes/ProductsPage/ProductsPage';
import CategoryPage from './Routes/CategoryPage/CategoryPage';
import DetailProduct from './Routes/DetailProduct/DetailProduct';
import SearchPage from './Routes/SearchPage/SearchPage';
import { useEffect } from 'react';
import API from './service';
import Config from './service/Config';

function App() {
  useEffect(() => {
    API.getSetting()
    .then((result) => {
      document.getElementById("indexFaviconGlobalDefault").href = `${Config.backendURL}public/img/logo/${result.data.setting.favicon}`;
      document.getElementById("indexFaviconGlobalAppleTouch").href = `${Config.backendURL}public/img/logo/${result.data.setting.favicon}`;
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/category/:slug" exact component={CategoryPage} />
        <Route path="/product/:slug" exact component={DetailProduct} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
