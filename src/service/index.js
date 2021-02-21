import Get from './Get';

const getCategories = () => Get('categories');
const getProductsHome = () => Get('products?home=true');
const getProducts = () => Get('products');
const getProductsByCategory = (slugCategory) => Get(`products/category/${slugCategory}`)
const getSetting = () => Get('settings');
const getBanner = () => Get('settings/banner');

const API = {
  getCategories,
  getProductsHome,
  getProducts,
  getProductsByCategory,
  getSetting,
  getBanner
}

export default API;