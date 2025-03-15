import Styles from "./FooterComponent.module.css";

const FooterComponent = () => {

    return(<>
    <div className={Styles.FooterComponent}>
        <a className={Styles.LinkAppearance} target="_blank" href="https://github.com/MidnattLantern/dualsense-input-test">Github repository</a>
        <a className={Styles.LinkAppearance} target="_blank" href="https://wallpaper.dog/black-abstract-desktop-wallpapers#google_vignette">Wallpaper source</a>
    </div>
    </>)
}

export default FooterComponent