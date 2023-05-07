import { Box } from "@mui/material";
import FirstContent from "../../components/pages/home/firstContent";
import SecondContent from "../../components/pages/home/secondContent";

function Home() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <FirstContent />
      <SecondContent />
      <FirstContent />
      <FirstContent />
      {/* Add more content below this component */}
    </Box>
  );
}

export default Home;
