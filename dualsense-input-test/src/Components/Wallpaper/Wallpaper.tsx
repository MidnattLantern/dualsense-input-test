import Styles from "./Wallpaper.module.css";
import WallpaperAsset from "../../Assets/Wallpapers/placeholder1.jpg";

const Wallpaper = () => {

    return(<>
        <img src={ WallpaperAsset } alt="failed to load wallpaper" className={Styles.WallpaperAppearance}/>
    </>)
}
export default Wallpaper;