import React, { useState } from 'react'

export default function Tiktok() {
    return (
        <>
            <div className="intro">
                Tiktok using functional components
            </div>
            <div className="tiktok">
                <Game />
            </div>
        </>
    )
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props) {
    function renderSquare(i) {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function Game() {
    const [state, setState] = useState(
        {
            history: [
                {
                    squares: Array(9).fill(undefined)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        }
    )

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]; // array destructuring
            if (squares[a] && squares[a] === squares[b]
                && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return undefined;
    }

    function handleClick(i) {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = state.xIsNext ? "X" : "O";

        setState(
            {
                history: history.concat([
                    {
                        squares
                    }
                ]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext
            }
        );
    }

    function jumpTo(stepNumber) {
        setState(
            {
                history,
                stepNumber,
                xIsNext: (stepNumber % 2) === 0
            }
        )
    }

    const history = state.history;
    const current = state.history[state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((historyItem, stepNumber) => {

        const desc = stepNumber ? // 0 would a 'falsy' value
            'Go to move #' + stepNumber :
            'Go to game start';
        return (
            <li className="tiktok" key={stepNumber}>
                <button onClick={() => jumpTo(stepNumber)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (state.stepNumber === 9) {
        status = "Game over - you're both losers";
    }
    else {
        status = "Next player: " + (state.xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol className="tiktok">{moves}</ol>
            </div>
        </div>
    );
}