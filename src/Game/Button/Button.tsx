import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    gameScore: number;
    setGameScore: (id: number) => void;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void;
}

//button component
export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId, gameScore, setGameScore }) => {
    //active?
    const isActive = id === activeButtonId;
    const GetClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
        }

        return styles.button;

    }
//selects random button id, makes active and adds to game score.
    const buttonClicked = (): void => {
        if (isActive) {
            const randomButton = Math.floor(Math.random() * 8);
            setActiveButtonId(randomButton);
            setGameScore(gameScore + 1);
        }
    }

    return (
        <circle onClick={buttonClicked} className={GetClassName()} cx={x} cy={y} r={100} />
    );
};