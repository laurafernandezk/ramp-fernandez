import { initializeApp } from "firebase/app";
//se importa metodo para acceder a la base de datos creada
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqC8O9ZEx5hEVjR9cqshSl4Jt3wVoX3dI",
    authDomain: "ramp-e5495.firebaseapp.com",
    projectId: "ramp-e5495",
    storageBucket: "ramp-e5495.appspot.com",
    messagingSenderId: "641663362825",
    appId: "1:641663362825:web:a8ca5032e05ffcecbd95d8"
  };

  //se incia conexion proyecto react con firebase
  const app = initializeApp(firebaseConfig);

 export const baseDatos = getFirestore(app)