import Styles from "./FooterComponent.module.css";

const FooterComponent = () => {

    return(<>
        <p>Designed for the DualSense for Safari and Chrome in mind</p>
        <p>GitHub: <a className={Styles.LinkAppearance} target="_blank" href="https://github.com/MidnattLantern/dualsense-input-test">github.com/MidnattLantern/dualsense-input-test</a></p>
    </>)
}

export default FooterComponent