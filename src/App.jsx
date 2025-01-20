import { Greeting } from "./components/Greeting"
import { PaintingList } from "./components/PaintingList"
import data from './painting.json';

export const App = () => {
    return <>
        <PaintingList data = {data} />
        <Greeting name='Bob' id='5' />
    </>
}

