import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

export const Game: FunctionComponent = () => {
    const [gameScore, setGameScore] = useState(0);
    //add state to game score
    return (
        <section className={styles.content}>
            <h2 className = "score">Score: {gameScore}</h2>
            <Board gameScore={gameScore} setGameScore={setGameScore}/>
        </section>
    );
};
