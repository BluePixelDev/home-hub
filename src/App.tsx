import { ThemeProvider } from "./features/theme/ThemeProvider";
import { Layout } from "./Layout";
import { PowerProvider } from "./services/PowerProvvider";
import { TempProvider } from "./services/TempProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <PowerProvider>
          <TempProvider>
            <Layout />
          </TempProvider>
        </PowerProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
