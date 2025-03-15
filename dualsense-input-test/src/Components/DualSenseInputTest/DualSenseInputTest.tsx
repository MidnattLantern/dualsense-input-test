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
                <BodyFront className={`${Styles.BodyFrontAppearance}`}/>
                <div className={`${Styles.AlignDirectionalButtons}`} style={directionalButtonsOffset}>
                    <DirectionLeft className={`${Styles.DirectionLeftAppearance} ${directionLeft ? Styles.Active : null}`}/>
                    <DirectionDown className={`${Styles.DirectionDownAppearance} ${directionDown ? Styles.Active : null}`}/>
                    <DirectionRight className={`${Styles.DirectionRightAppearance} ${directionRight ? Styles.Active : null}`}/>
                    <DirectionUp className={`${Styles.DirectionUpAppearance} ${directionUp ? Styles.Active : null}`}/>
                </div>

                <div className={`${Styles.AlignActionButtons}`}>
                    <Square className={`${Styles.SquareAppearance} ${square? Styles.SquareActive : null}`}/>
                    <Cross className={`${Styles.CrossAppearance} ${cross? Styles.CrossActive : null}`}/>
                    <Circle className={`${Styles.CircleAppearance} ${circle? Styles.CircleActive : null}`}/>
                    <Triangle className={`${Styles.TriangleAppearance} ${triangle? Styles.TriangleActive : null}`}/>
                </div>

                <div className={`${Styles.AlignL3Front}`}>
                    <L3Front className={`${Styles.L3FrontAppearance} ${L3 || leftStickDeadZone ? Styles.Active : null}`} style={L3FrontPosition} />
                </div>
                <div className={`${Styles.AlignR3Front}`}>
                    <R3Front className={`${Styles.R3FrontAppearance} ${R3 || rightStickDeadZone ? Styles.Active : null}`} style={R3FrontPosition} />
                </div>

                <div className={`${Styles.AlignL1Front}`}>
                    <L1Front className={`${Styles.L1FrontAppearance} ${L1 ? Styles.L1FrontActive : null}`}/>
                </div>
                <div className={`${Styles.AlignR1Front}`}>
                    <R1Front className={`${Styles.R1FrontAppearance} ${R1 ? Styles.R1FrontActive : null}`}/>
                </div>

                <div className={`${Styles.AlignShare}`}>
                    <Share className={`${Styles.ShareAppearance} ${share ? Styles.Active : null}`}/>
                </div>
                <div className={`${Styles.AlignOptions}`}>
                    <Options className={`${Styles.OptionsAppearance} ${options ? Styles.Active : null}`}/>
                </div>
        </>)
    };

    const DisplayShoulder = () => {
        return(<>
            <BodyShoulder className={`${Styles.BodyShoulderAppearance}`}/>
            <div className={`${Styles.AlignShoulderButton}`}>
                <L1Shoulder className={`${Styles.ShoulderButtonAppearance} ${L1 ? Styles.ShoulderButtonActive : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <R1Shoulder className={`${Styles.ShoulderButtonAppearance} ${R1 ? Styles.ShoulderButtonActive : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <L2Shoulder className={`${Styles.ShoulderButtonAppearance} ${L2 ? Styles.ShoulderButtonActive : null}`}/>
            </div>
            <div className={`${Styles.AlignShoulderButton}`}>
                <R2Shoulder className={`${Styles.ShoulderButtonAppearance} ${R2 ? Styles.ShoulderButtonActive : null}`}/>
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