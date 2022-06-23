import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

function App() {

  useEffect(() => {

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function (err) {
          console.log("Service worker registration failed, error:", err);
        });
    }

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

    firebase.messaging().onMessage(function (payload) {
      console.log("onMessage event ", payload);
    });

    navigator.serviceWorker.addEventListener("message", (message) => {
      console.log("message event", message);
    });

  }, []);

  const getMessaging = () => firebase.messaging();

  // Send the registration token your application server, so that it can:
  // - send messages back to this app
  // - subscribe/unsubscribe the token from topics
  const sendTokenToServer = (currentToken: string) => {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again unless it changes');
    }
  }

  const isTokenSentToServer = () => {
    return window.localStorage.getItem('sentToServer') === '1';
  }

  const setTokenSentToServer = (sent: boolean) => {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }

  const requestPermission = () => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve a registration token for use with FCM.
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  const getToken = () => {
    // 1st time: network call, next: cache
    getMessaging().getToken({ vapidKey: '' }).then((currentToken) => {
      if (currentToken) {
        console.log("TOKEN: ", currentToken);
        sendTokenToServer(currentToken);
      }
      else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenSentToServer(false);
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      setTokenSentToServer(false);
    });
  }

  const deleteToken = () => {
    getMessaging().deleteToken().then(() => {
      console.log('Token deleted.');
      setTokenSentToServer(false);
    }).catch((err: any) => {
      console.log('Unable to delete token. ', err);
    });
  }


  return (
    <div className="App">
      <h1>Test Firebase</h1>
      <button onClick={requestPermission}>Obter permissão</button>
      <button onClick={getToken}>Inscrever</button>
      <button onClick={deleteToken}>Desinscrever</button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
