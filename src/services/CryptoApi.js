const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-856jH6du7ANdiromKqwiM9Yx"

const getCoinnList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=25&page=1&x_cg_demo_api_key=${API_KEY}`;
};

export { getCoinnList };