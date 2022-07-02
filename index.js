const db = firebase.firestore();

var Articulo = new Object();
Articulo.producto, Articulo.precio, Articulo.cantidad, Articulo.categoria, Articulo.imagen, Articulo.id;
var articulos = []
const tabla = document.getElementById("id-tabla")
window.addEventListener("DOMContentLoaded", async (e) => {
    var cont = 0
    const querySnapshot = await getInventario();
    querySnapshot.forEach(doc => {
        Articulo.producto = doc.data().producto
        Articulo.precio = doc.data().precio
        Articulo.cantidad = doc.data().cantidad
        Articulo.categoria = doc.data().categoria
        Articulo.imagen = doc.data().imagen
        Articulo.id = doc.id
        articulos.push(Articulo)

        setInterfazAT(Articulo.producto, Articulo.precio, Articulo.cantidad, Articulo.categoria, doc.id, cont)
        cont++
    })
})

function setInterfazAT(producto, precio, cantidad, categoria, id, cont) {
    tabla.innerHTML +=
        `<tr id="${producto}-${cont}">
    <th id="tabla-producto-${cont}">${producto}</th>
    <td id="tabla-categoria-${cont}">${categoria}</td>
    <td id="tabla-cantidad-${cont}">${cantidad}</td>
    <td id="tabla-precio-${cont}">${precio}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button onclick="deleteArticulo(${cont})" type="button" class="btn btn-success">Eliminar</button>
            <div class="btn-group" role="group">
                <button onclick="setElemento(${producto}, ${precio}, ${cantidad}, ${categoria})" id="editar-${producto}" type="button" class="btn btn-success dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                    <a class="dropdown-item" href="editProduc.html?informacion=${id}">Editar</a>
                </div>
            </div>
        </div>

    </td>
</tr>`
}
var Elemento = new Object();
function setElemento(producto, precio, cantidad, categoria) {
    Elemento.producto = producto
    Elemento.categoria = categoria
    Elemento.precio = precio
    Elemento.cantidad = cantidad
    console.log(producto)
}
const getElemento = () => Elemento;
const editar = document.getElementById('btnGroupDrop2');

const deleteArticulo = (cont) => {
    console.log(cont)

    db.collection("inventarios").doc(articulos.pop(cont).id).delete();

    

}

const getInventario = () => db.collection("inventarios").get();
