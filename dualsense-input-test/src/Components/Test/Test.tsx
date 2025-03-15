import { useEffect, useState } from "react";
import Styles from "./Test.module.css";
import { useDualSenseInputContext } from "../../Contexts/useDualSenseInputContext";

const Test = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const { L2 } = useDualSenseInputContext();

    useEffect(() => {
        if (L2) {
            setRotation({ x: -90, y: 0 })
        } else {
            setRotation({ x: 0, y: 0 })
        }
    }, [L2])

    return (<>
            <div className={Styles.CubeContainer} style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, }}>
                <div className={`${Styles.Cube} ${Styles.Front}`}>Front</div>
                <div className={`${Styles.Cube} ${Styles.Top}`}>Top</div>
            </div>
        
    </>);
};

export default Test;