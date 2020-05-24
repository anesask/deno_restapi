import client from '../db/db.js'

class ProductRepo {
    create(product) {
        return client.query(
            'INSERT INTO products(name, description, registration_date) VALUES ($1, $2, $3)',
            product.name,
            product.brand,
            product.registration_date
        )
    }
    selectAll() {
        return client.query('SELECT * FROM products ORDER BY id')
    }
    selectById(id) {
        return client.query(`SELECT * FROM products WHERE id = $1`, id)
    }

    update(id, product) {
        var query = `UPDATE products `
        var hasSet = false
        if (product.name !== undefined) {
            query +=
                ` SET name = '${product.name}'` +
                (product.description !== undefined ? ',' : '')
            hasSet = true
        }
        query += `WHERE id = ${id}`
        return client.query(query)
    }

    delete(id) {
        return client.query(`DELETE from products WHERE id=$1`, id)
    }
}

export default new ProductRepo()
