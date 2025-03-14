import { createContext, ReactNode, useCallback, useEffect, useState } from "react"

const DualSenseInputContext = createContext<DualSenseInputType | undefined>(undefined);

interface DualSenseInputProviderProps {
    children: ReactNode;
}

interface DualSenseInputType {
    leftStickX: number;
    setLeftStickX: React.Dispatch<React.SetStateAction<number>>;
    leftStickY: number;
    setLeftStickY: React.Dispatch<React.SetStateAction<number>>
    L3: boolean;
    setL3: React.Dispatch<React.SetStateAction<boolean>>
    //
    rightStickX: number;
    setRightStickX: React.Dispatch<React.SetStateAction<number>>
    rightStickY: number;
    setRightStickY: React.Dispatch<React.SetStateAction<number>>
    R3: boolean;
    setR3: React.Dispatch<React.SetStateAction<boolean>>
    //
    share: boolean;
    setShare: React.Dispatch<React.SetStateAction<boolean>>
    options: boolean;
    setOptions: React.Dispatch<React.SetStateAction<boolean>>
    logoHome: boolean;
    setLogoHome: React.Dispatch<React.SetStateAction<boolean>>
    //
    square: boolean;
    setSquare: React.Dispatch<React.SetStateAction<boolean>>
    cross: boolean;
    setCross: React.Dispatch<React.SetStateAction<boolean>>
    circle: boolean;
    setCircle: React.Dispatch<React.SetStateAction<boolean>>
    triangle: boolean;
    setTriangle: React.Dispatch<React.SetStateAction<boolean>>
    //
    directionLeft: boolean;
    setDirectionLeft: React.Dispatch<React.SetStateAction<boolean>>
    directionDown: boolean;
    setDirectionDown: React.Dispatch<React.SetStateAction<boolean>>
    directionRight: boolean;
    setDirectionRight: React.Dispatch<React.SetStateAction<boolean>>
    directionUp: boolean;
    setDirectionUp: React.Dispatch<React.SetStateAction<boolean>>
    //
    L1: boolean;
    setL1: React.Dispatch<React.SetStateAction<boolean>>
    R1: boolean;
    setR1: React.Dispatch<React.SetStateAction<boolean>>
    L2: boolean;
    setL2: React.Dispatch<React.SetStateAction<boolean>>
    R2: boolean;
    setR2: React.Dispatch<React.SetStateAction<boolean>>

    // connection states
    controllerConntected: boolean;
    setControllerConnected: React.Dispatch<React.SetStateAction<boolean>>
    controllerID: string;
    setControllerID: React.Dispatch<React.SetStateAction<string>>
    //
//    showTable: boolean;
//    setShowTable: React.Dispatch<React.SetStateAction<boolean>>
    verified: boolean;
    setVerified: React.Dispatch<React.SetStateAction<boolean>>
}

const DualSenseInputProvider: React.FC<DualSenseInputProviderProps> = ({ children }) => {
      // input states
      const [leftStickX, setLeftStickX] = useState<number>(0); // .axes[0]
      const [leftStickY, setLeftStickY] = useState<number>(0); // .axes[1]
      const [L3, setL3] = useState<boolean>(false); // .buttons[10].pressed
      //
      const [rightStickX, setRightStickX] = useState<number>(0); // .axes[2]
      const [rightStickY, setRightStickY] = useState<number>(0); // .axes[3]
      const [R3, setR3] = useState<boolean>(false); // .buttons[11].pressed
      //
      const [share, setShare] = useState<boolean>(false); // .buttons[8].pressed
      const [options, setOptions] = useState<boolean>(false); // .buttons[9].pressed
      const [logoHome, setLogoHome] = useState<boolean>(false); // .buttons[16].pressed
      //
      const [square, setSquare] = useState<boolean>(false); // .buttons[2].pressed
      const [cross, setCross] = useState<boolean>(false); // .buttons[0].pressed
      const [circle, setCircle] = useState<boolean>(false); // .buttons[1].pressed
      const [triangle, setTriangle] = useState<boolean>(false); // .buttons[3].pressed
      //
      const [directionLeft, setDirectionLeft] = useState<boolean>(false); // .buttons[14].pressed
      const [directionDown, setDirectionDown] = useState<boolean>(false); // .buttons[13].pressed
      const [directionRight, setDirectionRight] = useState<boolean>(false); // .buttons[15].pressed
      const [directionUp, setDirectionUp] = useState<boolean>(false); // .buttons[12].pressed
      //
      const [L1, setL1] = useState<boolean>(false); // .buttons[4].pressed
      const [R1, setR1] = useState<boolean>(false); // .buttons[5].pressed
      const [L2, setL2] = useState<boolean>(false); // .buttons[6].pressed
      const [R2, setR2] = useState<boolean>(false); // .buttons[7].pressed
    
      // connection states
      const [controllerConntected, setControllerConnected] = useState<boolean>(false);
      const [controllerID, setControllerID] = useState<string>("Not connected");
      //
//      const [showTable, setShowTable] = useState<boolean>(false);
      const [verified, setVerified] = useState<boolean>(false);

        const verifyController = useCallback(() => {
            if (controllerID.includes("DualSense") || controllerID.includes("DUALSHOCK")) {
                setVerified(true);
//                setShowTable(true);
            } else {
                setVerified(false);
            }
        }, [controllerID, setVerified]);

        const resetConnection = useCallback(() => {
            setControllerConnected(false);
            setControllerID("Not connected");
            setVerified(false);
//            setShowTable(false);
        }, [setControllerConnected, setControllerID, setVerified]);

  useEffect(() => {
    verifyController();

      setInterval(() => {
        const controller = navigator.getGamepads()[0];
        if (controller) {
          setControllerConnected(true);
          setControllerID(controller.id);
          //
          setLeftStickX(controller.axes[0])
          setLeftStickY(controller.axes[1])
          setL3(controller.buttons[10]?.pressed)
          //
          setRightStickX(controller.axes[2])
          setRightStickY(controller.axes[3])
          setR3(controller.buttons[11]?.pressed)
          //
          setSquare(controller.buttons[2]?.pressed)
          setCross(controller.buttons[0]?.pressed)
          setCircle(controller.buttons[1]?.pressed)
          setTriangle(controller.buttons[3]?.pressed)
          //
          setDirectionLeft(controller.buttons[14]?.pressed)
          setDirectionDown(controller.buttons[13]?.pressed)
          setDirectionRight(controller.buttons[15]?.pressed)
          setDirectionUp(controller.buttons[12]?.pressed)
          //
          setL1(controller.buttons[4]?.pressed)
          setR1(controller.buttons[5]?.pressed)
          setL2(controller.buttons[6]?.pressed)
          setR2(controller.buttons[7]?.pressed)
          //
          setShare(controller.buttons[8]?.pressed)
          setOptions(controller.buttons[9]?.pressed)
          setLogoHome(controller.buttons[16]?.pressed)

        } else {
          resetConnection();
        }
      }, 1)

  }, [
    verifyController, resetConnection,
    leftStickX, setLeftStickX,
    leftStickY, setLeftStickY,
    L3, setL3,

    rightStickX, setRightStickX,
    rightStickY, setRightStickY,
    R3, setR3,

    share, setShare,
    options, setOptions,
    logoHome, setLogoHome,

    square, setSquare,
    cross, setCross,
    circle, setCircle,
    triangle, setTriangle,

    directionLeft, setDirectionLeft,
    directionDown, setDirectionDown,
    directionRight, setDirectionRight,
    directionUp, setDirectionUp,

    L1, setL1,
    R1, setR1,
    L2, setL2,
    R2, setR2,

    controllerConntected, setControllerConnected,
    controllerID, setControllerID,

//    showTable, setShowTable,
    verified, setVerified
  ]);

      return(
        <DualSenseInputContext.Provider value={{
            leftStickX, setLeftStickX,
            leftStickY, setLeftStickY,
            L3, setL3,

            rightStickX, setRightStickX,
            rightStickY, setRightStickY,
            R3, setR3,

            share, setShare,
            options, setOptions,
            logoHome, setLogoHome,

            square, setSquare,
            cross, setCross,
            circle, setCircle,
            triangle, setTriangle,

            directionLeft, setDirectionLeft,
            directionDown, setDirectionDown,
            directionRight, setDirectionRight,
            directionUp, setDirectionUp,

            L1, setL1,
            R1, setR1,
            L2, setL2,
            R2, setR2,

            controllerConntected, setControllerConnected,
            controllerID, setControllerID,

//            showTable, setShowTable,
            verified, setVerified
        }}>
            {children}
        </DualSenseInputContext.Provider>
      )
}

export { DualSenseInputProvider, DualSenseInputContext }; 