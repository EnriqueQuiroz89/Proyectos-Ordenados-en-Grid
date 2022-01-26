console.log("Saludos Kike");

//Ingresa los datos de tu proyecto en Firebase
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC7IxVax8cZ5eLwEhlHE5leNVlX7TBUIQ0",
    authDomain: "firestorecrud-f8226.firebaseapp.com",
    projectId: "firestorecrud-f8226",
});

// Variable para interaccion con la BD
var db = firebase.firestore();

/**CONSULTA DOCUMENTOS*/
var table = document.getElementById('table');
// Quiero update en tiempo real con ONSNAPSHOT
db.collection("practicas").onSnapshot((querySnapshot) => {
    // Borra el contenido de la tabla antes de mostrar la consulta
    table.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().date}`);
        ///Aqui codigo
        table.innerHTML += `<tr>
        <div class="grid-container">        
<div class="item1">${doc.data().title}</div>
<div class="item2">${doc.data().date}</div>
<div class="item3"><a href="${doc.data().website}" Target="_blank">Sitio Web</a></div>
<div class="item4"><a href="${doc.data().repository}" Target="_blank">Ver codigo</a></div>
<div class="item5"><button class="btn btn-warning" onclick="eliminar('${doc.id}')">Editar</button></div>        
<div class="item6"><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></div>
<div class="item7"><img
                src="http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG19.png" alt="barca"></div>
    </div>
</div>
</tr>
<br>
`;
    });
});

/**ELIMINAR DOCUMENTOS*/
function eliminar(id) {
    db.collection("practicas").doc(id).delete().then(() => {
        console.log("Documento borrado exitosamente");
    }).catch((error) => {
        console.error("Error removing document", error);
    });
}