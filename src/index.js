import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// export default로 initializeApp(firebaseConfig)를 호출했기 때문에
// import firebase가 아니라 import ddd로 해도 무관함
// 나중에 사용할 때 이름을 구분하기 위해 import firebase로 지정하였음.
import firebase from "./firebase"   



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);