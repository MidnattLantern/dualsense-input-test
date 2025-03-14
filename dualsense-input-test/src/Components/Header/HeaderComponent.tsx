import Styles from "./HeaderComponent.module.css"
import { useDualSenseInputContext } from "../../Contexts/useDualSenseInputContext";

const HeaderComponent = () => {
    const {
        controllerConntected,
        controllerID,
        verified
    } = useDualSenseInputContext();

    const DisplayVerification = () => {
        return(<>
            {verified ?
            ( <p>Connected {controllerID}</p> ):
            ( <p>⚠️ {controllerID} is not verified</p> )}
        </>)
    };

    return(<>
        <h1 className={Styles.FontSize}>DualSense input test</h1>
        {controllerConntected ? 
        ( <DisplayVerification /> ) :
        (<p>Push any button to connect</p> )}
    </>)
}

export default HeaderComponent