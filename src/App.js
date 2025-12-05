import React, { useState } from 'react';
import './App.css';

const screens = [
  { key: 'status', label: 'Status' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'map', label: 'Map' },
  { key: 'radio', label: 'Radio' },
  { key: 'quests', label: 'Quests/Logs' },
  { key: 'settings', label: 'Settings' },
];

function App() {
  const [activeScreen, setActiveScreen] = useState('status');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'status':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Status</h3>
            <p className="pipboy-text">Health: 100%</p>
            <p className="pipboy-text">Radiation: 0%</p>
            <p className="pipboy-text">Armor: Vault Suit</p>
          </div>
        );
      case 'inventory':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Inventory</h3>
            <ul className="pipboy-list">
              <li>Stimpak x5</li>
              <li>RadAway x2</li>
              <li>Laser Pistol</li>
              <li>Vault-Tec Lunchbox</li>
            </ul>
          </div>
        );
      case 'map':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Map</h3>
            <p className="pipboy-text">[Map placeholder]</p>
          </div>
        );
      case 'radio':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Radio</h3>
            <p className="pipboy-text">[Radio controls placeholder]</p>
          </div>
        );
      case 'quests':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Quests/Logs</h3>
            <ul className="pipboy-list">
              <li>Find the Overseer</li>
              <li>Repair the Water Pump</li>
              <li>Explore Vault 76</li>
            </ul>
          </div>
        );
      case 'settings':
        return (
          <div className="pipboy-screen">
            <h3 className="pipboy-section">Settings</h3>
            <p className="pipboy-text">[Settings placeholder]</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App pipboy-bg">
      <header className="pipboy-header">
        <h1 className="pipboy-title">Chyort Model 101</h1>
        <h2 className="pipboy-brand">Skynet Industries</h2>
        <nav className="pipboy-nav">
          {screens.map(screen => (
            <button
              key={screen.key}
              className={`pipboy-nav-btn${activeScreen === screen.key ? ' active' : ''}`}
              onClick={() => setActiveScreen(screen.key)}
            >
              {screen.label}
            </button>
          ))}
        </nav>
        {renderScreen()}
      </header>
    </div>
  );
}

export default App;
