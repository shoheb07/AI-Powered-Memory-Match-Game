body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: #f4f4f4;
    transition: 0.3s;
}

body.dark {
    background: #1e1e1e;
    color: white;
}

.container {
    margin-top: 20px;
}

.controls {
    margin-bottom: 20px;
}

button {
    padding: 8px 12px;
    margin: 5px;
    cursor: pointer;
}

.game-board {
    display: grid;
    justify-content: center;
    gap: 10px;
}

.card {
    width: 80px;
    height: 80px;
    background: #2196f3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: transparent;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.3s, background 0.3s;
}

.card.flipped {
    background: #fff;
    color: #000;
    transform: rotateY(180deg);
}

body.dark .card {
    background: #444;
}

body.dark .card.flipped {
    background: #fff;
    color: #000;
}
