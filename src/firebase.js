import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCi-lu8w0QNR7aLke6_1x320siUPn6nczo',
  authDomain: 'nasdaq-fdfec.firebaseapp.com',
  projectId: 'nasdaq-fdfec',
  storageBucket: 'nasdaq-fdfec.firebasestorage.app',
  messagingSenderId: '712261404322',
  appId: '1:712261404322:web:c110599cc1b229280f39fb',
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export function loginWithGoogle() {
  return signInWithPopup(auth, googleProvider)
}

export function logout() {
  return signOut(auth)
}

export { auth, db }
