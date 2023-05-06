import { Box } from "@mui/material";
import SiteMenu from "./components/siteMenu";
import Home from "./pages/home";

function App() {
  return (
    <>
      <SiteMenu />

      <Box sx={{ p: 2 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
