// import logo from './logo.svg';
import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';
import { Button, ButtonToolbar } from 'rsuite';


// 35.0628662109375, 48.484869602402554



function App() {
  return (
    <div className="App">
      <ButtonToolbar>
        <Button appearance="default">Default</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="link">Link</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="ghost">Ghost</Button>
      </ButtonToolbar>
    </div>
  );
}

export default App;
