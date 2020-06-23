import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button size={ButtonSize.Large} onClick={() => console.log('a')}>Hello World</Button>
      <Button>Hello World</Button>
      <Button autoFocus size={ButtonSize.Small}>autoFocus</Button>
      <Button className="custom" btnType={ButtonType.Primary}>custom</Button>
      <Button btnType={ButtonType.Danger}>Hello World</Button>
      <Button btnType={ButtonType.Success}>Hello World</Button>
      <Button btnType={ButtonType.Warning}>Hello World</Button>
      <Button disabled>Hello World</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Hello World</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Hello World</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
