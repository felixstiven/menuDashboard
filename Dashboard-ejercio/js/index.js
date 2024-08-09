const body = document.querySelector("body")
const tbodyProducts = document.querySelector("#tbodyProducts")
const btnAddUpdate = document.querySelector("#btnAddUpdate")
const inProduct = document.querySelector("#inProduct")
const inStock = document.querySelector("#inStock")
const inPrice = document.querySelector("#inPrice")
const inStatus = document.querySelector("#inStatus")



body.onload = () => {

    const products = getproducts();
    fillTable(products);
}

function fillTable (products){
    let trs = [];

    products.forEach((p, i) => {
        const tr = createRow(p, i)
        // Agregar fila de prodcuto a trs
        trs.push(tr)
    
    })
        // meter trs al tbody
        tbodyProducts.append(...trs)  // ...operador para salir del arreglo
}

function createRow(p, i){
      // icon of delete
    const iDelete = document.createElement("i");
    iDelete.className = "fa-solid fa-trash";
    const tdDelete = document.createElement("td");
    tdDelete.appendChild(iDelete);
    // icon of Update
    const iUpdate = document.createElement("i");
    iUpdate.className = "fa-solid fa-pen";
    iUpdate.addEventListener("click",() =>{
        inProduct.value = p.name;
        inStock.value = p.stock;
        inPrice.value = p.price;
        inStatus.value = p.status;
        btnAddUpdate.textContent = "ACTUALIZAR";
        // btnAddUpdate.removeEventListener("click",handerAddClick);
        btnAddUpdate.onclick = (e) => handerUpdateClick(e, i);

        
    })
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


btnAddUpdate.onclick = handerAddClick

function handerAddClick(e){
    const valueInProduct = inProduct.value
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)
    const i = getproducts().length
    // Nota: estas lineas son de prueba se puede realizar en una sola linea 
    // const valueInProduct = inProduct.value
    // const valueInStock = parseInt(inStock.value) // convertir de string a numero entero
    // const valueInPrice = parseFloat(inPrice.value) // convertir de string a numero decimal
    // const valueInStatus = parseInt(inStatus.value)
    const newProduct = addProduct( valueInProduct, valueInStock, valueInPrice, valueInStatus)
    const row = createRow(newProduct, i)
    tbodyProducts.appendChild(row)
    alert("PRODUCTO AGREGADO")

    e.preventDefault()
}

function handerUpdateClick (e, i){
    const valueInProduct = inProduct.value
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)

    updateProduct(i, valueInProduct,  valueInStock, valueInPrice, valueInStatus)
    clearTable()
    const products = getproducts()
    fillTable( products)

    e.preventDefault()
}