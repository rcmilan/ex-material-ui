import { Box } from "@mui/material";
import SiteAppBar from "./components/siteAppBar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <SiteAppBar />

      <Box sx={{ p: 2 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
