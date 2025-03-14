import Styles from "./App.module.css";
import DualSenseInputTest from "./Components/DualSenseInputTest/DualSenseInputTest"
import FooterComponent from "./Components/Footer/FooterComponent";
import HeaderComponent from "./Components/Header/HeaderComponent"
import Wallpaper from "./Components/Wallpaper/Wallpaper"

function App() {

  return (
    <>
      <div className={Styles.AlignCenter}>
        <HeaderComponent />
        <DualSenseInputTest />
        <Wallpaper />
        <FooterComponent />
      </div>
    </>
  )
}

export default App
