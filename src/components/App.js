import '../app.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

const App = () => (
  <>
    <Display />
    <ButtonPanel />
    { Calculate }
  </>
);

export default App;
