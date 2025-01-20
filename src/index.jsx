import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// console.log(<App />);
// 1/ Виведіть цей текст у елементі h1, використовуючи JSX розмітку та фігурні дужки для вставки змінної з іменем.
const titel = <h1>hello</h1>
//2.  Виведіть зображення з довільним URL та описом у елементі img, використовуючи атрибути src та alt через фігурні дужки.
const image = <img src="" alt="" />
// 3. Створіть об'єкт з даними посилання на ваш улюблений сайт, наприклад: {назва_сайту: "Google", url: "https://www.google.com/"}.
// Виведіть це посилання у елементі a, використовуючи значення з об'єкта через фігурні дужки.
const gallery = <ul>
    {/* {arr.map} */}
</ul>


ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <>      
            <App />           
    </>
       
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