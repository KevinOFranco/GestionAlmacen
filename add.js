const db = firebase.firestore();

const nombre = document.getElementById("input-nombre")
const precio = document.getElementById("input-precio")
const categoria = document.getElementById("input-categoria")
const cantidad = document.getElementById("input-cantidad")

const guardar = () =>
    db.collection("inventarios").add({
        producto: nombre.value,
        precio: precio.value,
        categoria: categoria.value,
        cantidad: cantidad.value,
        imagen: "null"
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

