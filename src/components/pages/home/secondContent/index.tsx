import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { CustomCardProps } from "./types";
import { contents } from "./constants";

const DashboardCustomCard = ({ title, subTitle, content }: CustomCardProps) => {
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Box flexGrow={1}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4">{subTitle}</Typography>
          </Box>
          <Typography variant="body1">{content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const LowerContent = () => (
  <Grid item xs={12}>
    <Box sx={{ mt: 4, p: 2, backgroundColor: "secondary.main" }}>
      <Typography variant="h5" sx={{ color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dui,
        eleifend eget sem varius, aliquet elementum nisl. Vestibulum posuere
        placerat sem, vel mattis augue. Fusce porttitor mattis felis, ac
        tristique dolor congue vel. Mauris quam est, dignissim cursus libero et,
        gravida aliquam risus. Donec non vestibulum nisl. In tellus nisi,
        sollicitudin id facilisis ut, porttitor eu libero. Curabitur sed dictum
        enim. Donec porta dolor sapien. Vivamus in urna nibh. Sed ac lorem ac
        metus consectetur aliquam. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Mauris ut mollis
        magna. Vivamus non feugiat erat. Duis ut iaculis mauris. Nulla eu
        porttitor metus. Phasellus eleifend eros ut luctus euismod.
      </Typography>
    </Box>
  </Grid>
);

const SecondContent = () => {
  return (
    <Box
      sx={{
        height: "auto",
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
          backgroundColor: (theme) => `${theme.palette.primary.main}80`,
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ height: "auto" }}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {contents.map((c, i) => (
            <DashboardCustomCard
              key={i}
              title={c.title}
              subTitle={c.subTitle}
              content={c.content}
            />
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <LowerContent />
        </Grid>
      </Box>
    </Box>
  );
};

export default SecondContent;
