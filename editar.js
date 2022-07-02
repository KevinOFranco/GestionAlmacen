const db = firebase.firestore();

var remplaza = /\+/gi;
var url = window.location.href;

url = unescape(url);
url = url.replace(remplaza, " ");
// url = url.toUpperCase();

function obtener_valor(variable) {
    var variable_may = variable;
    var variable_pos = url.indexOf(variable_may);

    if (variable_pos != -1) {
        var pos_separador = url.indexOf("&", variable_pos);

        if (pos_separador != -1) {
            return url.substring(variable_pos + variable_may.length + 1, pos_separador);
        } else {
            return url.substring(variable_pos + variable_may.length + 1, url.length);
        }
    } else {
        return "NO_ENCONTRADO";
    }
}

var valor = obtener_valor("informacion");

console.log(valor)

const nombre = document.getElementById("input-nombre")
const precio = document.getElementById("input-precio")
const categoria = document.getElementById("input-categoria")
const cantidad = document.getElementById("input-cantidad")
const getArticulo = () => db.collection("inventarios").doc(valor);
var articulo;
window.addEventListener("DOMContentLoaded", async (e) => {
    articulo = await getArticulo();
    articulo.get().then((doc) => {
        if (doc.exists) {
            console.log(doc.data().producto);
            nombre.setAttribute('value', doc.data().producto)
            precio.setAttribute('value', doc.data().precio)
            categoria.setAttribute('value', doc.data().categoria)
            cantidad.setAttribute('value', doc.data().cantidad)
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
})

function guardar() {
    console.log("Cafe")
    articulo.set({
        producto: nombre.value, precio: Number.parseFloat(precio.value), categoria: categoria.value, cantidad: parseInt(cantidad.value, 10), imagen: "null"
    });
}
