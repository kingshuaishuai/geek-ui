import React, { useState } from 'react';
// import Button, { ButtonSize, ButtonType } from './components/Button/button';
// import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';
import './App.scss';

library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Icon icon="coffee" theme="warning" size="10x" />
      <Menu
        className="my-menu"
        defaultIndex="2-1"
        onSelect={(index) => {
          console.log(index);
        }}
        // mode="vertical"
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>menu item1</MenuItem>
        <MenuItem disabled>menu item2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>menu item3</MenuItem>
      </Menu>
      <Button size="sm" onClick={() => { setShow(!show) }}> Toggle </Button>
      {/* <div className="alert-container">
        <Alert message="this is alert" description="this is description" closable/>
        <Alert type={AlertType.Success} message="this is alert" closable onClose={() => {console.log('close')}}/>
        <Alert type={AlertType.Warning} message="this is alert" closable/>
        <Alert type={AlertType.Danger} message="this is alert" closable/>
        <Alert type={AlertType.Info} message="this is alert" closable/>
      </div> */}
      <Transition in={show} timeout={300} animation="zoom-in-left">
        <header className="App-header">
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
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <Button size="lg"> large button </Button>
      </Transition>
    </div>
  );
}

export default App;
