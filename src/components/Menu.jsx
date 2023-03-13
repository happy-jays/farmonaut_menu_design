import React, { useState } from 'react';
import '../App.css';
function Menu() {
    const [selectedMenu, setSelectedMenu] = useState('menu1');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const renderBoxes = () => {
    switch (selectedMenu) {
      case 'menu1':
        return (
          <>
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
          </>
        );
      case 'menu2':
        return (
          <>
            <div className="box">Box 5</div>
            <div className="box">Box 6</div>
            <div className="box">Box 7</div>
            <div className="box">Box 8</div>
          </>
        );
      case 'menu3':
        return (
          <>
            <div className="box">Box 9</div>
            <div className="box">Box 10</div>
            <div className="box">Box 11</div>
            <div className="box">Box 12</div>
          </>
        );
      case 'menu4':
        return (
          <>
            <div className="box">Box 13</div>
            <div className="box">Box 14</div>
            <div className="box">Box 15</div>
            <div className="box">Box 16</div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img id='menu-img' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Demo Logo" onClick={() => handleMenuClick('menu1')} />
      </header>
      <div className="main">
        <div className="menu">
          <div
            className={`menu-item ${selectedMenu === 'menu1' ? 'active' : ''}`}
            onClick={() => handleMenuClick('menu1')}
          >
            Menu 1
          </div>
          <div
            className={`menu-item ${selectedMenu === 'menu2' ? 'active' : ''}`}
            onClick={() => handleMenuClick('menu2')}
          >
            Menu 2
          </div>
          <div
            className={`menu-item ${selectedMenu === 'menu3' ? 'active' : ''}`}
            onClick={() => handleMenuClick('menu3')}
          >
            Menu 3
          </div>
          <div
            className={`menu-item ${selectedMenu === 'menu4' ? 'active' : ''}`}
            onClick={() => handleMenuClick('menu4')}
          >
            Menu 4
          </div>
        </div>
        <div className="boxes">{renderBoxes()}</div>
      </div>
    </div>
  )
}

export default Menu