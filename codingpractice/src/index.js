import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OneThroughTen from './components/OneThroughTen';
import ElevenThroughTwenty from './components/ElevenThroughTwenty';
import TwentyOneThroughThirty from './components/TwentyOneThroughThirty';
import ThirtyOneThroughForty from './components/ThirtyOneThroughForty';
import FortyOneThroughFifty from './components/FortyOneThroughFifty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <OneThroughTen />
    <ElevenThroughTwenty />
    <TwentyOneThroughThirty />
    <ThirtyOneThroughForty />
    <FortyOneThroughFifty />
  </React.StrictMode>
);
