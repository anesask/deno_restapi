import { getProducts } from '../services/productService.js'

export default async ({ params, response }) => {
    const productId = params.id
    if (!productId){
        response.status = 400;
        response.body = {msg: "Invalid Product Id"};
        return;
    }
}

const foundProduct = await getProducts(productId);
