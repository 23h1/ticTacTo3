const Square = ({ id, player }) => {
    const [color, setColor] = React.useState("yellow");
    const palette = ["brown", "green", "blue", "red"];

    const getRandomColor = () => {
        console.log("Random color called!");
        palette[Math.floor(Math.random() * 3)];
    };

    return (//randomColor
        <button
        onClick={(e) => {
            setColor(getRandomColor());
            e.target.style.background = color;
        }}
        >
        <h1>{id}</h1>
        </button>
    );
    // keep track of the state of the Square
    // return (
    //   <button onClick = {()=> {alert(`I'm Square: ${id}`)}}>
    //     <h1>{player}</h1>
    //   </button>
    // )
};

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mount, setMounted] = React.useState(true);
    const [random, setRandom] = React.useState(0);
    let status = `TURN: Player ${player}`;

    const reRender = () => {
        console.log(`Re-rendering!`);
        setRandom(Math.random());
    };
    const toggle = () => {
        setMounted(!mount);
        console.log(`Toggle mount/unmount`);
    };
    function renderSquare(i) {
        console.log(`Rendering Square: ${i} !`);
        return <Square id={i} player={player}></Square>;
    }

    return (
        <div className="game-board">
        <div className="grid-row">
            {mount && renderSquare(0)}
            {mount && renderSquare(1)}
            {mount && renderSquare(2)}
        </div>
        <div id="info">
            <button onClick={toggle}>Show/Hide Row</button>
            <button onClick={reRender}>Re-Render</button>
            <h1>{status}</h1>
        </div>
        </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
