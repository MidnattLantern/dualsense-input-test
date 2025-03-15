import Styles from "./HeaderComponent.module.css"
import { useDualSenseInputContext } from "../../Contexts/useDualSenseInputContext";
import { detect } from "detect-browser";

const HeaderComponent = () => {
    const detectedBrowser = detect();
    const {
        controllerConntected,
        controllerID,
        verified
    } = useDualSenseInputContext();

    const DisplayControllerVerification = () => {
        return(<>
            {verified ?
            ( <p className={Styles.VerificationAppearance}>✅ {controllerID}</p> ):
            ( <p className={Styles.VerificationAppearance}>⚠️ {controllerID} is not supported and might cause unexpected behaviours</p> )}
        </>)
    };

    const DisplayBrowserVerification = () => {
        switch (detectedBrowser?.name) {
            case 'safari':
            case 'chrome':
                return(
                    <p className={Styles.VerificationAppearance}>✅ Current browser: {detectedBrowser?.name}</p>
                )
            default:
                return(
                    <p className={Styles.VerificationAppearance}>⚠️ {detectedBrowser?.name} is not supported and may cause unexpected behaviours</p>
                )
        }

        return(<>
            
        </>)
    }

    return(<>
        <h1 className={Styles.FontSize}>DualSense input test</h1>
        {controllerConntected ? 
        ( <DisplayControllerVerification /> ) :
        (<p className={Styles.VerificationAppearance}>Push any button to connect</p> )}
        <DisplayBrowserVerification />
    </>)
}

export default HeaderComponent