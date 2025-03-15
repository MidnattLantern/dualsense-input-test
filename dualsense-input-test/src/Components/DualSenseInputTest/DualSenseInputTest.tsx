import Styles from "./DualSenseInputTest.module.css";
import { useEffect, useMemo, useState } from "react";
import { useDualSenseInputContext } from "../../Contexts/useDualSenseInputContext";

import DisplayFront from "./DisplayFrontComponent";
import DisplayShoulder from "./DisplayShoulderComponent";

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

    return(<div className={Styles.ComponentFrame}>
        <div className={Styles.DualSenseInputTestFrame}>
            {controllerConntected ? (<>

                <div className={Styles.CubeVessel} style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, }}>
                    <div className={`${Styles.Cube} ${Styles.Front}`}>
                        <DisplayFront
                        directionalButtonsOffset={directionalButtonsOffset}
                        L3FrontPosition={L3FrontPosition}
                        R3FrontPosition={R3FrontPosition}
                        leftStickDeadZone={leftStickDeadZone}
                        rightStickDeadZone={rightStickDeadZone}
                        directionLeft={directionLeft}
                        directionDown={directionDown}
                        directionRight={directionRight}
                        directionUp={directionUp}
                        square={square}
                        cross={cross}
                        circle={circle}
                        triangle={triangle}
                        L3={L3}
                        R3={R3}
                        L1={L1}
                        R1={R1}
                        share={share}
                        options={options}
                        />
                    </div>
                    <div className={`${Styles.Cube} ${Styles.Top}`}>
                        <DisplayShoulder
                        L1={L1}
                        L2={L2}
                        R1={R1}
                        R2={R2}
                        />
                    </div>
                </div>
                        
            </>) : null }
        </div>
    </div>)
}

export default DualSenseInputTest