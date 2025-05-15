import { useEffect } from "react";
import { Layout } from "./Layout";
import { PowerProvider } from "./services/PowerProvider";
import { TempProvider } from "./services/TempProvider";
import { ScreenOrientation } from "@capacitor/screen-orientation";
import { StatusBar } from "@capacitor/status-bar";

function App() {
  useEffect(() => {
    const appSetup = async () => {
      await ScreenOrientation.lock({ orientation: "landscape" });
      await StatusBar.hide();
    };
    appSetup();
  });

  return (
    <>
      <PowerProvider>
        <TempProvider>
          <Layout />
        </TempProvider>
      </PowerProvider>
    </>
  );
}

export default App;
