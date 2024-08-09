const products = [
    new Product("Lapiz", 20, 5, 1),
    new Product("Cuaderno", 20, 15, 1),
    new Product("Regla", 50, 10, 3),
    new Product("Goma", 200, 3, 1),
    new Product("Pluma", 0, 6, 0),
    new Product("Bloc", 60, 40, 1),
]

function getproducts(){
    return products
}

// funccion de agregar
function addProduct (name, stock, price, status) {
    const newProduct = new Product(name, stock, price, status)
    products.push(newProduct)
    return newProduct

}

// funcion de actualizar 

function updateProduct (i, newName, newStock, newPrice, newStatus){
    products[i].name = newName;
    products[i].stock = newStock;
    products[i].price = newPrice;
    products[i].status = newStatus;

}
