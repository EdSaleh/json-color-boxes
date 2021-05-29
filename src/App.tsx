import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Shuffle } from '@material-ui/icons';
import logo from './logo.svg';

import './App.css';

function App() {
  const [colors, setColors] = useState({ "one": "red", "two": "orange", "three": "yellow", "four": "green", "five": "blue", "six": "indigo", "seven": "violet", "eight": "grey", "nine": "black" } as { [key: string]: string });
  const shuffleColors = () => {
    function shuffleArray(array: string[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const colorsKeys = Object.keys(colors)
    const shuffledColorsValues = shuffleArray(Object.values(colors))
    const shuffledColors = {};
    for (const [i, colorKey] of colorsKeys.entries()) {
      shuffledColors[colorKey] = shuffledColorsValues[i];
    }
    setColors(shuffledColors);

  }
  return (
    <div className="App">
      <div className="main">
        <div className="grid">
          {
            Object.keys(colors).map(key => <div className="item" key={key} style={{ backgroundColor: colors[key] }}></div>)
          }
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={shuffleColors}><Shuffle />  Shuffle Colors</Button>
    </div>
  );
}

export default App;
