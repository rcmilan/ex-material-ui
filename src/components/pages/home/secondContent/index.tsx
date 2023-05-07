import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { CustomCardProps } from "./types";

const contents = [
  { title: "A", content: "AAA" },
  { title: "B", content: "BBB" },
  { title: "C", content: "CCC" },
  { title: "D", content: "DDD" },
];

const DashboardCustomCard = ({ title, content }: CustomCardProps) => {
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4">{content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const SecondContent = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "primary.main",
      }}
      component="section"
    >
      <Box
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: (theme) => `${theme.palette.primary.main}80`, // semi-transparent primary color
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ height: "90%" }}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {contents.map((c, i) => (
            <DashboardCustomCard key={i} title={c.title} content={c.content} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SecondContent;
