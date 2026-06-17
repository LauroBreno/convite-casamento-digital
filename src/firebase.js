import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJYBwBcFcDfePMei6fxp5F4W0Cg8RiHlU",
  authDomain: "casamento-maria-e-william.firebaseapp.com",
  projectId: "casamento-maria-e-william",
  storageBucket: "casamento-maria-e-william.firebasestorage.app",
  messagingSenderId: "1026374938099",
  appId: "1:1026374938099:web:5be5489110851186353686"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Banco de Dados (Firestore) para usarmos no Vue
export const db = getFirestore(app);

export const auth = getAuth(app);