import React from 'react';
import './styles/App.css';

function App() {
  const myArray = [1,2,3,4,5,6,7,8,9,10];    
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(rand)

  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    console.log(o);
    return o;
  };


  
  const slot1 = [1,2,3,4,5];
  const slot2 = [2,4,1,3,5];
  const slot3 = [5,2,1,4,3];
  let slot1Element = slot1.map(item => <li className="spin" key= {item}>{item}</li>)
  let slot2Element = slot2.map(item => <li className="spin" key= {item}>{item}</li>)
  let slot3Element = slot3.map(item => <li className="spin" key= {item}>{item}</li>)
  const startShuffle = () => {
    Shuffle(slot1);
    Shuffle(slot2);
    Shuffle(slot3);
    slot1Element = slot1.map(item => <li key= {item}>{item}</li>)
    slot2Element = slot2.map(item => <li key= {item}>{item}</li>)
    slot3Element = slot3.map(item => <li key= {item}>{item}</li>)
  }
  
  return (
    <div className="App">
      <ul className="float-left">{slot1Element}</ul>
      <ul className="float-left">{slot2Element}</ul>
      <ul className="float-left">{slot3Element}</ul>
      <button onClick={startShuffle}>click</button>
    </div>
  );
}

export default App;
