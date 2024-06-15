const {default: axiosClient} = require('./axiosClient')


const getLatestProducts = () => axiosClient.get('/products?populate=*')
const getProductId = (id) => axiosClient.get(`/products/${id}?populate=*`)
const getProuductsByCtegory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)


export default {
    getLatestProducts,
    getProductId,
    getProuductsByCtegory,
}