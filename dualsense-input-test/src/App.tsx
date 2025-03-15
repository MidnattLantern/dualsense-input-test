import Styles from "./App.module.css";
import DualSenseInputTest from "./Components/DualSenseInputTest/DualSenseInputTest"
import FooterComponent from "./Components/Footer/FooterComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
//import Test from "./Components/Test/Test";
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
