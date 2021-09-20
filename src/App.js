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
  const [clickedSpace, setClickedSpace] = useState(0);
  const [board, setBoard] = useState([]);
  const [saved, setSaved] = useState(false);
  const grid = (
    <div class="grid grid-cols-3">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((square) => (
    <Square key={square}>
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
          let new_board = board;
          const mID = square * 9 + id;
          new_board[mID] = !new_board[mID] ? {id: mID, clicked: false, changable: true, value: ''} : new_board[mID]
          let space = new_board[mID]
          space.clicked = space.id === clickedSpace;
          new_board[mID] = space;
          
          
          return (<Space 
            key={space.id}
            clicked={space.clicked}
            changable={space.changable}
            value={space.value}
            onClick={() => {
              let new_board = board
              new_board[clickedSpace].clicked = false;
              
              setClickedSpace(mID);
              new_board[mID].clicked = true;
              setBoard(new_board)
              
            }
            }
            onKeyDown={(event) => {
              space.value = handleKeyDown(event);
              let new_board = board
              new_board[mID] = space
              console.log("Space: " + new_board[mID].value)
              setBoard(new_board)
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
    <Container onKeyDown={(event) => {
      let new_board = board
      new_board[clickedSpace].value = handleKeyDown(event);
      setBoard(new_board);
    }}>
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
