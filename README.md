# next-firebase-chatapp
[![Node.js CI](https://github.com/posaune0423/next-firebase-chatapp/actions/workflows/test.yml/badge.svg)](https://github.com/posaune0423/next-firebase-chatapp/actions/workflows/test.yml)

A simple realtime chat application implemented by Next.js and Firebase.

## Prerequisite
- yarn 🐱
- Firebase Account 🔥

## Development
First, you have to get firebase api key. if you are not familier with firebase, just check it out from [here](https://support.google.com/firebase/answer/7015592?authuser=0)
After the process above have been done, you should get firebase config object like below

```js
  var config = {
    apiKey: "CcN0p0MAIzavPCNkmXSyAy4xhKwCF6CqbX5TcvL",
    authDomain: "example.firebaseapp.com",
    databaseURL: "https://example.firebaseio.com",
    projectId: "example",
    storageBucket: "example.appspot.com",
    messagingSenderId: "032531346579"
  };
  firebase.initializeApp(config);
```
create `.env.local` by running below

```bash
cp -pr .env.local.sample .env.local
```

then copy these api key values and paste them in `.env.local`

Now, you got ready for developing !

Serve with hot reload at localhost:3000
```bash
yarn dev
```
