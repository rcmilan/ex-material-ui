import { Grid, Skeleton, Box, Typography } from "@mui/material";

const FirstContent = () => (
  <Grid container sx={{ height: "100%" }}>
    <Grid item xs={8} sx={{ height: "50%", p: 0.5 }}>
      <Skeleton
        variant="rectangular"
        sx={{ height: "100%", borderRadius: 1 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ height: "100%", borderRadius: 1 }}
      />
    </Grid>
    <Grid item xs={4} sx={{ height: "50%" }}>
      <Grid container direction="column" sx={{ height: "100%", p: 0.5 }}>
        <Grid item sx={{ height: "80%" }}>
          <Skeleton
            variant="rectangular"
            sx={{ height: "100%", borderRadius: 1 }}
          />
        </Grid>
        <Grid item sx={{ height: "20%", p: 0.5 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Some text
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default FirstContent;
