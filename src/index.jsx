import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

console.log(<App/>);

ReactDOM.createRoot(document.getElementById('root'))
    .render(
    
        <App />
    );



// const favouriteBooks = [
//  { name: "JS for beginners" },
//  { name: "React basics" },
//  { name: "React Router overview" },
//  { name: "Redux in depth" },
// ];

// const title = <h1>Hello</h1>
// const card = <div>
//     <img src="..." alt="..." width="480">
//     <h2 style="color: tomato;"></h2>
//     <p>
//       Автор: <a href="#"></a>
//     </p>
//     <p>Ціна:  грн</p>
//     <p>Наявність: </p>
//     <button type="button">Додати в кошик</button>
//   </div>