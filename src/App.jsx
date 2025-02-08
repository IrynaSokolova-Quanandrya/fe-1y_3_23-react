import painting from './painting.json';
import { PaintingList } from './components/PaintingList/PaintingList'
import { ColorPicker } from './components/ColorPicker/ColorPicker.jsx'
import { colorPickerOptions } from './colorOptions.jsx'
import { Alert } from './components/Alert/Alert.jsx';
import { Container } from './components/Container.jsx';

export function App() {
  return(
    <div>
      <Container>
        <PaintingList painting={painting} />     
        {/* <ColorPicker options={colorPickerOptions}/> */}
      </Container>

       <Container>
        <Alert text="Останнє попередження" type="warning"/>
        <Alert text="Ура! Все ок!" type="success"/>
        <Alert text="О жах - все пропало!" type="error"/>
      </Container>
      
    </div>
  )
}





