import Styles from "./DualSenseInputTest.module.css";
import { useEffect, useMemo, useState } from "react";
import { useDualSenseInputContext } from "../../Contexts/useDualSenseInputContext";
import BodyFront from "../../assets/DualSense/Body/BodyFront.svg?react";
import BodyShoulder from "../../Assets/DualSense/Body/BodyShoulder.svg?react";

import DirectionLeft from "../../assets/DualSense/Front/DirectionLeft.svg?react";
import DirectionDown from "../../assets/DualSense/Front/DirectionDown.svg?react";
import DirectionRight from "../../assets/DualSense/Front/DirectionRight.svg?react";
import DirectionUp from "../../assets/DualSense/Front/DirectionUp.svg?react";

import Square from "../../assets/DualSense/Front/Square.svg?react";
import Cross from "../../assets/DualSense/Front/Cross.svg?react";
import Circle from "../../assets/DualSense/Front/Circle.svg?react";
import Triangle from "../../assets/DualSense/Front/Triangle.svg?react";

import L3Front from "../../assets/DualSense/Front/L3Front.svg?react";
import R3Front from "../../assets/DualSense/Front/R3Front.svg?react";
import L1Front from "../../assets/DualSense/Front/L1Front.svg?react";
import R1Front from "../../assets/DualSense/Front/R1Front.svg?react";
import L1Shoulder from "../../Assets/DualSense/Shoulders/L1Shoulder.svg?react"
import R1Shoulder from "../../Assets/DualSense/Shoulders/R1Shoulder.svg?react"
import L2Shoulder from "../../Assets/DualSense/Shoulders/L2.svg?react"
import R2Shoulder from "../../Assets/DualSense/Shoulders/R2.svg?react"

import Share from "../../assets/DualSense/Front/Share.svg?react";
import Options from "../../assets/DualSense/Front/Options.svg?react";

const DualSenseInputTest = () => {
    const {
        directionLeft,
        directionDown,
        directionRight,
        directionUp,

        square,
        cross,
        circle,
        triangle,

        L1,
        R1,
        L2,
        R2,
        L3,
        R3,

        leftStickX,
        leftStickY,
        rightStickX,
        rightStickY,

        share,
        options,

        controllerConntected
    } = useDualSenseInputContext();

    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const directionalButtonsOffset = useMemo(() => {
        return {
            left: directionLeft ? -2 : directionRight ? 2 : 0,
            top: directionUp ? -2 : directionDown ? 2 : 0,
        };
    }, [directionLeft, directionDown, directionRight, directionUp]);

    const L3FrontPosition = useMemo(() => {
        return {
            left: leftStickX ? (leftStickX * 15) : 0,
            top: leftStickY ? (leftStickY * 15): 0,
        };
    }, [leftStickX, leftStickY])

    const R3FrontPosition = useMemo(() => {
        return {
            left: rightStickX ? (rightStickX * 15) : 0,
            top: rightStickY ? (rightStickY * 15): 0,
        };
    }, [rightStickX, rightStickY])

    const [leftStickDeadZone, setLeftStickDeadZone] = useState<boolean>(false); // some browsers 'twitch' the stick despite no movement
    const [rightStickDeadZone, setRightStickDeadZone] = useState<boolean>(false); // some browsers 'twitch' the stick despite no movement
    useEffect(() => {
        if (
            leftStickX > 0.1 ||
            leftStickX < -0.1 ||
            leftStickY > 0.1 ||
            leftStickY < -0.1
        ) {
            setLeftStickDeadZone(true)
        } else {
            setLeftStickDeadZone(false)
        }

        if (
            rightStickX > 0.1 ||
            rightStickX < -0.1 ||
            rightStickY > 0.1 ||
            rightStickY < -0.1
        ) {
            setRightStickDeadZone(true)
        } else {
            setRightStickDeadZone(false)
        }
    }, [leftStickX, leftStickY, rightStickX, rightStickY])

    useEffect(() => {
        if (L2 || R2) {
            setRotation({ x: -90, y: 0 })
        } else {
            setRotation({ x: 0, y: 0 })
        }
    }, [L2, R2])

    const DisplayFront = () => {
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

    const DisplayShoulder = () => {
        return(<>
            <BodyShoulder className={`${Styles.BodyAppearance}`}/>
            <div className={`${Styles.AlignShoulderButton}`}>
                <L1Shoulder className={`${Styles.ShoulderButtonAppearance} ${L1 ? Styles.Active : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <R1Shoulder className={`${Styles.ShoulderButtonAppearance} ${R1 ? Styles.Active : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <L2Shoulder className={`${Styles.ShoulderButtonAppearance} ${L2 ? Styles.Active : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <R2Shoulder className={`${Styles.ShoulderButtonAppearance} ${R2 ? Styles.Active : null}`}/>
            </div>
        </>)
    };

    return(<div className={Styles.ComponentFrame}>
        <div className={Styles.DualSenseInputTestFrame}>
            {controllerConntected ? (<>

                <div className={Styles.CubeVessel} style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, }}>
                    <div className={`${Styles.Cube} ${Styles.Front}`}>
                        <DisplayFront />
                    </div>
                    <div className={`${Styles.Cube} ${Styles.Top}`}>
                        <DisplayShoulder/>
                    </div>
                </div>
                        
            </>) : null }
        </div>
    </div>)
}

export default DualSenseInputTest