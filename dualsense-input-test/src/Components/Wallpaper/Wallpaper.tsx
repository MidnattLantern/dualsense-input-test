import Styles from "./Wallpaper.module.css";
import Wallpaper2 from "../../Assets/Wallpapers/placeholder2.jpg";

const Wallpaper = () => {

    return(<>
        <img src={ Wallpaper2 } alt="failed to load wallpaper" className={Styles.WallpaperAppearance}/>
    </>)
}
export default Wallpaper;