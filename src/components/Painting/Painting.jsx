import { Item } from "./Painting.styled"
export const Painting = ({ title, url, quantity, price, author }) => {
    return(
        <Item>
            <img src={url} alt="" width="480" />
            <h2>{title}</h2>
            <p>Автор: <a href={author.url}>{author.url}</a>{author.tag}</p>
            <p>Ціна: {price} грн</p>
            <p>Доступність: {quantity < 5 ? 'закінчується' : `є в наявності ${quantity}`}</p>
            <button type="button">Додати в кошик</button>
        </Item>
    )
} 