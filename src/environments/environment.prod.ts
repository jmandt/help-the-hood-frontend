export const environment = {
    production: true,
    firebaseConfig: {
        apiKey: 'AIzaSyBH6SAlj6fj3WzfN4XA3qxYkNQgp3O0uWQ',
        authDomain: 'help-the-hood.firebaseapp.com',
        databaseURL: 'https://help-the-hood.firebaseio.com',
        projectId: 'help-the-hood',
        storageBucket: 'help-the-hood.appspot.com',
        messagingSenderId: '401383034466',
        appId: '1:401383034466:web:41a38476f7b104da27cb3b',
        measurementId: 'G-JHWQEDHPVJ'
    },
    algolia: {
        appId: 'plIDIXZZEFS0',
        apiKey: 'cdcdebf8c77de6c3dc3a896158214989',
        container: document.querySelector('#address-input')
    }
};
