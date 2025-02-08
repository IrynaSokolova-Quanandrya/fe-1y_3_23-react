import PropTypes from 'prop-types';
import { Painting } from "../Painting/Painting";
import { List } from './PaintingList.styled';

export function PaintingList ({painting}){
    return(
        <List>
        {painting.map(({id, title, url, quantity, price, author})=>(
            <Painting 
                key={id}
                url={url}
                title={title}
                price={price}
                quantity={quantity}
                author={author}
            />
        ))}
   </List> 
   )
}

PaintingList.propTypes = {
    painting: PropTypes.array,
}