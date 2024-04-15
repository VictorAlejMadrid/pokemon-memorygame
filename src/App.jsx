import GamePage from "./pages/GamePage";
import Home from "./pages/Home";

import { useState } from "react";
import { useHomeSettings } from "./hooks/useHomeSettings";

export default function App() {
  const [homeSettings, setHomeSettings] = useHomeSettings();
  const [changePage, setChangePage] = useState(false);

  return (
    <>
      {changePage ? (
        <GamePage
          homeSettings={homeSettings} 
        />
      ) : (
        <Home
          homeSettings={homeSettings}
          setHomeSettings={setHomeSettings}
          setChangePage={setChangePage}
        />
      )}
    </>
  );
}
