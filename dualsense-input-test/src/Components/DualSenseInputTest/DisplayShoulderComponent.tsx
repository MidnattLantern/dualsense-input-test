import Styles from "./DualSenseInputTest.module.css";
import BodyShoulder from "../../Assets/DualSense/Body/BodyShoulder.svg?react";
import L1Shoulder from "../../Assets/DualSense/Shoulders/L1Shoulder.svg?react"
import R1Shoulder from "../../Assets/DualSense/Shoulders/R1Shoulder.svg?react"
import L2Shoulder from "../../Assets/DualSense/Shoulders/L2.svg?react"
import R2Shoulder from "../../Assets/DualSense/Shoulders/R2.svg?react"

interface DisplayShoulderProps {
    L1?: boolean;
    L2?: boolean;
    R1?: boolean;
    R2?: boolean;
}

const DisplayShoulderComponent: React.FC<DisplayShoulderProps> = ({
L1, R1, L2, R2
}) => {
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

export default DisplayShoulderComponent;