importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
    apiKey: "AIzaSyCIEGgMGnDK6r6xFXTkzC1e7iCbeQm7o_8",
    authDomain: "aula-push-santosediego.firebaseapp.com",
    projectId: "aula-push-santosediego",
    storageBucket: "aula-push-santosediego.appspot.com",
    messagingSenderId: "392429042253",
    appId: "1:392429042253:web:93d5c4c407809f271efa04"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('sw bg message event: ', payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
