import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './painting.json'
const title = h1
const colors

const app = <div>
    {title}
    {color}
</div>

const card = <ul>
    {data.map((paintCard) => {
        return <li key={paintCard.id}>
    <img src={paintCard.url} alt="..." width="480"/>
    <h2 style={{color: 'tomato'}}>{paintCard.title }</h2>
    <p>
        Автор: <a href={paintCard.author.url}>{ paintCard.author.tag}</a>
    </p>
    <p>Ціна:  грн</p>
    <p>Наявність: </p>
    <button type="button">Додати в кошик</button>
</li>
    })}
</ul>
  
  console.log(card);
  const title = <h1>Hello</h1>

ReactDOM.createRoot(document.getElementById('root')).render(card);



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