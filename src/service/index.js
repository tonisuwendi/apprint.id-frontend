import Get from './Get';

const getCategories = () => Get('categories');
const getProductsHome = () => Get('products?home=true');
const getProducts = () => Get('products');
const getProductsByCategory = (slugCategory) => Get(`products/category/${slugCategory}`)
const getProductBySlug = (slug) => Get(`products/detail/${slug}`);
const searchProduct = (keyword) => Get(`products/search?q=${keyword}`);
const getOptionBySpec = (idSpec) => Get(`products/option/${idSpec}`);
const getSetting = () => Get('settings');
const getBanner = () => Get('settings/banner');
const getBannerHowToOrder = () => Get('settings/banner-hto');

const API = {
  getCategories,
  getProductsHome,
  getProducts,
  getProductsByCategory,
  getProductBySlug,
  searchProduct,
  getOptionBySpec,
  getSetting,
  getBanner,
  getBannerHowToOrder
}

export default API;