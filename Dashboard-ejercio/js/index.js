const body = document.querySelector("body")
const tbodyProducts = document.querySelector("#tbodyProducts")
const btnAddUpdate = document.querySelector("#btnAddUpdate")


body.onload = () => {

    const products = getproducts();
    fillTable(products);
}

function fillTable (products){
    let trs = [];

    products.forEach((p, i) => {
        const tr = createRow(p)
        // Agregar fila de prodcuto a trs
        trs.push(tr)
    
    })
        // meter trs al tbody
        tbodyProducts.append(...trs)  // ...operador para salir del arreglo
}

function createRow(p){
      // icon of delete
    const iDelete = document.createElement("i");
    iDelete.className = "fa-solid fa-trash";
    const tdDelete = document.createElement("td");
    tdDelete.appendChild(iDelete);
    // icon of Update
    const iUpdate = document.createElement("i");
    iUpdate.className = "fa-solid fa-pen";
    const tdUpdate = document.createElement("td");
    tdUpdate.appendChild(iUpdate);
    // column product
    const tdProduct = document.createElement("td");
    tdProduct.textContent = p.name;
    // column Stock 
    const tdStock = document.createElement("td");
    tdStock.textContent = p.stock;
    // column preci
    const tdPrice = document.createElement("td");
    tdPrice.textContent = p.price;
    // column status
    const tdStatus = document.createElement("td");
    tdStatus.textContent = p.status; 

    // meter td dentro de tr
    const trProduct = document.createElement("tr");
    trProduct.append(
        tdDelete,
        tdUpdate,
        tdProduct,
        tdStock,
        tdPrice,
        tdStatus
    )

    // Guardar tr
    return trProduct
}


btnAddUpdate.addEventListener("click",handerAddClick);

function handerAddClick(e){
    const valueInProduct = document.querySelector("#inProduct").value
    const valueInStock = parseInt(document.querySelector("#inStock").value)
    const valueInPrice = parseFloat(document.querySelector("#inPrice").value)
    const valueInStatus = parseInt(document.querySelector("#inStatus").value)


    // Nota: estas lineas son de prueba se puede realizar en una sola linea 
    // const valueInProduct = inProduct.value
    // const valueInStock = parseInt(inStock.value) // convertir de string a numero entero
    // const valueInPrice = parseFloat(inPrice.value) // convertir de string a numero decimal
    // const valueInStatus = parseInt(inStatus.value)

    const newProduct = addProduct( valueInProduct, valueInStock, valueInPrice, valueInStatus)
    const row = createRow(newProduct)
    tbodyProducts.appendChild(row)
    alert("PRODUCTO AGREGADO")

    e.preventDefault()


}
