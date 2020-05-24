import { Router } from 'https://deno.land/x/oak/mod.ts'

import getProducts from './controllers/getProducts.js'
import getProductDetails from './controllers/getProductDetails.js'
import createProduct from './controllers/createProduct.js'
import updateProduct from './controllers/updateProduct.js'
import deteleteProduct from './controllers/deteleteProduct'

const router = new Router()

router
    .get('/products', getProducts)
    .get('/products/:id', getProductDetails)
    .post('/products', createProduct)
    .put('/products/:id', updateProduct)
    .delete('/products/:id', deteleteProduct)

export default router;