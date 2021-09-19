import React, {useState} from 'react';
import './App.css';
import Square from './Components/Square';
import Space from './Components/Space';
import Container from './Components/Container';
import Button from './Components/Button';

function handleKeyDown(event) {
  if ("123456789".includes(event.key)) {
      return parseInt(event.key);
  }
  return "";
}

function App() {
  const [clickedSpace, setClickedSpace] = useState(null);
  const [board, setBoard] = useState([]);
  const [saved, setSaved] = useState(false);
  const new_board = board;
  const grid = (
    <div class="grid grid-cols-3">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((square) => (
    <Square key={square}>
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
          const mID = square * 9 + id;
          if (!new_board[mID]) {
            new_board.push({id: mID, clicked: false, changable: true, value: ''})
          }
          const space = new_board[mID]
          if (space.id === clickedSpace) {
            space.clicked = true;
          }
          
          return (<Space 
            key={space.id}
            clicked={space.clicked}
            changable={space.changable}
            onClick={() => {
              board[clickedSpace].clicked = false;
              setClickedSpace(mID);
            }
            }
            onKeyDown={(event) => {
              space.value = handleKeyDown(event);
              board[space.id] = space;
            }
            }
          />)
        })
      }
      

    </Square>
    ))}
    
    
    
  </div>
  )
  
  
  
  return (

    <div className="">
    <h2 className="text-green-900 text-2xl text-center">SUDOKU SOLVER</h2>
    <Container>
      {grid}
    </Container>
    <div className="flex items-center justify-center">
    <Button 
      onClick={saved ? () => console.log("Solving...") : () => {
        setSaved(true);

      }} 
      color={saved ? "indigo" : "gray"} href="/">{saved ? 'Solve' : "Save"}</Button>
    </div>

    </div>

    

  );
}

export default App;
