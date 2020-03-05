import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCM8mD-VqKghCRKI-Rlv8MDmNcLp8jtoRY",
    authDomain: "vue-shop-4ff7b.firebaseapp.com",
    databaseURL: "https://vue-shop-4ff7b.firebaseio.com",
    projectId: "vue-shop-4ff7b",
    storageBucket: "vue-shop-4ff7b.appspot.com",
    messagingSenderId: "365042184624",
    appId: "1:365042184624:web:c6fe0fff53842b6a76e675",
    measurementId: "G-H5J9H5G16B"
  };

export const fb=firebase.initializeApp(firebaseConfig);
