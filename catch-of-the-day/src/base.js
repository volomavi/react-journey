import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "secret",
  authDomain: "cotd-71d47.firebaseapp.com",
  databaseURL: "https://cotd-71d47-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base;