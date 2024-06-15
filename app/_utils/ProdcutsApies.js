const {default: axiosClient} = require('./axiosClient')


const getLatestProducts = () => axiosClient.get('/products?populate=*')
const getProductId = (id) => axiosClient.get(`/products/${id}?populate=*`)


export default {
    getLatestProducts,
    getProductId,
}