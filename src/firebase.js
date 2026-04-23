import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6kGON2V4RWRp8Q4T1agPEWTC777aBMBE',
  authDomain: 'nasdaq-checklist-marlon.firebaseapp.com',
  projectId: 'nasdaq-checklist-marlon',
  storageBucket: 'nasdaq-checklist-marlon.firebasestorage.app',
  messagingSenderId: '508391209615',
  appId: '1:508391209615:web:fb8e89880e2a60c81ecefa',
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
