const config = {
    apiKey: "AIzaSyBYC2TPUAeftFxEIlZx_YcGN42GdqHfp3U",
    authDomain: "mercado-dev-ba408.firebaseapp.com",
    databaseURL: "https://mercado-dev-ba408.firebaseio.com",
    projectId: "mercado-dev-ba408",
    storageBucket: "gs://mercado-dev-ba408.appspot.com",
    messagingSenderId: "406466699577"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const Storage = app.storage()

export default base
