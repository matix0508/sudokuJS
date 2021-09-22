import React from 'react';
import './App.css';
import Square from './Components/Square';
import Space from './Components/Space';
import Container from './Components/Container';
import Button from './Components/Button';

function getRow(id) {
  return Math.floor(id / 9)
}

function getCol(id) {
  return id % 9
}

function getSquare(id) {
  const row = getRow(id);
  const col = getCol(id);
  const mRow = Math.floor(row / 3);
  const mCol = Math.floor(col / 3)
  return mRow * 3 + mCol;
}

function getRows() {
  let output = []
  for (let row = 0; row < 9; row++) {
    let lst = [];
    for (let i = 0; i < 81; i++) {
      if (row === getRow(i)) lst.push(i);
    }
    output.push(lst)
  }
  return output;
}

function getCols() {
  let output = []
  for (let col = 0; col < 9; col++) {
    let lst = [];
    for (let i = 0; i < 81; i++) {
      if (col === getCol(i)) lst.push(i);
    }
    output.push(lst)
  }
  return output;
}

function getSquares() {
  let output = []
  for (let sq = 0; sq < 9; sq++) {
    let lst = [];
    for (let i = 0; i < 81; i++) {
      if (sq === getSquare(i)) lst.push(i);
    }
    output.push(lst)
  }
  return output;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [...Array(81).keys()].map((i) => (
        {
          id: i, 
          clicked: false, 
          changable: true, 
          value: '',
          invalid: false
        }
    )),
    rows: getRows(),
    cols: getCols(),
    squares: getSquares(),
    saved: false,
    clickedSpace: 0,
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.generateSpace = this.generateSpace.bind(this)
    this.generateSquare = this.generateSquare.bind(this)
  }

  // componentDidMount() {
  //   this.populateBoard()
  // }

  extractInt(key) {
  if ("123456789".includes(key)) {
    return parseInt(key);
  }
  return "";
  }

  handleKeyDown(event) {
    let output = this.state.board;
    output[this.state.clickedSpace].value = this.extractInt(event.key)
    // console.log(event.key)
    this.setState({board: output})
  }

  handleClick(id) {
    let new_board = this.state.board
    // new_board[0].clicked = true;
    // console.log(new_board[0].clicked)
    new_board[this.state.clickedSpace].clicked = false;
    new_board[id].clicked = true;
    this.setState({
      board: new_board,
      clickedSpace: id
    })
  }




  generateSpace(space) {
    // console.log(space)
    return (
    <Space 
      key={space.id}
      clicked={space.clicked}
      changable={space.changable}
      value={space.value}
      invalid={space.invalid}
      onClick={() => (this.handleClick(space.id))}
    />
    )
  }

  generateSquare(square) {
    // console.log(this.squares)
    // console.log("ROWS" + this.state.rows)
    const squareTab = this.state.squares[square]
    // console.log(this.state.board[0])
    return (
      <Square key={square}>
      {
        [...Array(9).keys()].map((id) => {
          const space = this.state.board[squareTab[id]]
          // console.log(this.state.board)
          return this.generateSpace(space)
        })
      }
      

    </Square>
    )
  }

  generateGrid() {
    return (
      <div className="grid grid-cols-3">
      {[...Array(9).keys()].map((square) => (
        this.generateSquare(square)
      ))}
    </div>
    )
  }



  

  render() {

    return (
      <div className="">
      <h2 className="text-green-900 text-2xl text-center">SUDOKU SOLVER</h2>
      <Container onKeyDown={(event) => (this.handleKeyDown(event))}>
        {this.generateGrid()}
      </Container>
      <div className="flex items-center justify-center">
      <Button 
        onClick={this.state.saved ? () => console.log("Solving...") : () => {
          // console.log("HELLO")
          this.setState({saved: true});
        }} 
        color={this.state.saved ? "indigo" : "gray"} href="/">{this.state.saved ? 'Solve' : "Save"}</Button>
      </div>
  
      </div>
    );
  }
}

export default App;
