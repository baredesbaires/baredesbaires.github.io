// Recibe las notificaciones de la app comercial aunque la app esté cerrada (Firebase Cloud Messaging).
// Firebase las muestra solo (título, texto e ícono) y al tocarla abre la app.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBS8gyhkNHOWTRttdne8yX_d9lyVT99IPk',
  authDomain: 'baredes-comercial.firebaseapp.com',
  projectId: 'baredes-comercial',
  storageBucket: 'baredes-comercial.firebasestorage.app',
  messagingSenderId: '838138326116',
  appId: '1:838138326116:web:0b0c94d4dcf5f83a968371'
});
firebase.messaging();
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
