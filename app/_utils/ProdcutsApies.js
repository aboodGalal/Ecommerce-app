const {default: axiosClient} = require('./axiosClient')


const getLatestProducts = () => axiosClient.get('/products?populate=*')
const getProductId = (id) => axiosClient.get(`/product/${id}?populate=*`)


export default {
    getLatestProducts,
    getProductId,
}