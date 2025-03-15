import Styles from "./DualSenseInputTest.module.css";
// graphics import
import BodyFront from "../../assets/DualSense/Body/BodyFront.svg?react";
//
import DirectionLeft from "../../assets/DualSense/Front/DirectionLeft.svg?react";
import DirectionDown from "../../assets/DualSense/Front/DirectionDown.svg?react";
import DirectionRight from "../../assets/DualSense/Front/DirectionRight.svg?react";
import DirectionUp from "../../assets/DualSense/Front/DirectionUp.svg?react";
//
import Square from "../../assets/DualSense/Front/Square.svg?react";
import Cross from "../../assets/DualSense/Front/Cross.svg?react";
import Circle from "../../assets/DualSense/Front/Circle.svg?react";
import Triangle from "../../assets/DualSense/Front/Triangle.svg?react";
//
import L3Front from "../../assets/DualSense/Front/L3Front.svg?react";
import R3Front from "../../assets/DualSense/Front/R3Front.svg?react";
import L1Front from "../../assets/DualSense/Front/L1Front.svg?react";
import R1Front from "../../assets/DualSense/Front/R1Front.svg?react";
//
import Share from "../../assets/DualSense/Front/Share.svg?react";
import Options from "../../assets/DualSense/Front/Options.svg?react";

interface DisplayFrontProps {
    directionalButtonsOffset?: { top: number; left: number; };
    L3FrontPosition?: { top: number; left: number; };
    R3FrontPosition?: { top: number; left: number; };
    leftStickDeadZone?: boolean;
    rightStickDeadZone?: boolean;

    directionLeft?: boolean;
    directionDown?: boolean;
    directionRight?: boolean;
    directionUp?: boolean;

    square?: boolean;
    cross?: boolean;
    circle?: boolean;
    triangle?: boolean;

    L3?: boolean;
    R3?: boolean;
    L1?: boolean;
    R1?: boolean;

    share?: boolean;
    options?: boolean;
  }

const DisplayFrontComponent: React.FC<DisplayFrontProps> = ({
    directionalButtonsOffset,
    L3FrontPosition,
    R3FrontPosition,
    leftStickDeadZone,
    rightStickDeadZone,

    directionLeft,
    directionDown,
    directionRight,
    directionUp,

    square,
    cross,
    circle,
    triangle,

    L3,
    R3,
    L1,
    R1,

    share,
    options
}) => {
    return(<>
        <BodyFront className={`${Styles.BodyAppearance}`}/>
        <div className={`${Styles.AlignButton}`} style={directionalButtonsOffset}>
            <DirectionLeft className={`${Styles.ButtonAppearance} ${directionLeft ? Styles.Active : null}`}/>
            <DirectionDown className={`${Styles.ButtonAppearance} ${directionDown ? Styles.Active : null}`}/>
            <DirectionRight className={`${Styles.ButtonAppearance} ${directionRight ? Styles.Active : null}`}/>
            <DirectionUp className={`${Styles.ButtonAppearance} ${directionUp ? Styles.Active : null}`}/>
        </div>

        <div className={`${Styles.AlignButton}`}>
            <Square className={`${Styles.ButtonAppearance} ${square? Styles.ActionActive : null}`}/>
            <Cross className={`${Styles.ButtonAppearance} ${cross? Styles.ActionActive : null}`}/>
            <Circle className={`${Styles.ButtonAppearance} ${circle? Styles.ActionActive : null}`}/>
            <Triangle className={`${Styles.ButtonAppearance} ${triangle? Styles.ActionActive : null}`}/>
        </div>

        <div className={`${Styles.AlignLR3}`}>
            <L3Front className={`${Styles.LR3Appearance} ${L3 || leftStickDeadZone ? Styles.Active : null}`} style={L3FrontPosition} />
        </div>
        <div className={`${Styles.AlignLR3}`}>
            <R3Front className={`${Styles.LR3Appearance} ${R3 || rightStickDeadZone ? Styles.Active : null}`} style={R3FrontPosition} />
        </div>

        <div className={`${Styles.AlignButton}`}>
            <L1Front className={`${Styles.ButtonAppearance} ${L1 ? Styles.LR1FrontActive : null}`}/>
        </div>
        <div className={`${Styles.AlignButton}`}>
            <R1Front className={`${Styles.ButtonAppearance} ${R1 ? Styles.LR1FrontActive : null}`}/>
        </div>

        <div className={`${Styles.AlignButton}`}>
            <Share className={`${Styles.ButtonAppearance} ${share ? Styles.Active : null}`}/>
        </div>
        <div className={`${Styles.AlignButton}`}>
            <Options className={`${Styles.ButtonAppearance} ${options ? Styles.Active : null}`}/>
        </div>
    </>)
};

export default DisplayFrontComponent