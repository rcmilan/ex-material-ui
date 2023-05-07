import { Box } from "@mui/material";
import FirstContent from "../../components/pages/home/firstContent";

function Home() {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflowY: "auto" }}>
      <FirstContent />
      {/* Add more content below this component */}
    </Box>
  );
}

export default Home;
