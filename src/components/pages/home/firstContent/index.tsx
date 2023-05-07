import { Grid, Skeleton, Box, Typography, useTheme } from "@mui/material";
import { RightContentProps } from "./types";

const LeftContent = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{ height: "100%", borderRadius: 1 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ height: "100%", borderRadius: 1 }}
      />
    </>
  );
};

const RightContent = ({ theme }: RightContentProps) => {
  const UpperContent = () => (
    <Skeleton variant="rectangular" sx={{ height: "100%", borderRadius: 1 }} />
  );

  const LowerContent = () => (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle1">
        <span
          style={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          Lorem ipsum dolor sit amet
        </span>
        , consectetur adipiscing elit. Curabitur at interdum augue. Duis aliquam
        ultrices ex, nec feugiat ex vulputate sed.
      </Typography>
    </Box>
  );

  return (
    <Grid container direction="column" sx={{ height: "100%" }}>
      <Grid item sx={{ height: "80%", p: 0.5 }}>
        <UpperContent />
      </Grid>
      <Grid item sx={{ height: "20%", p: 0.5 }}>
        <LowerContent />
      </Grid>
    </Grid>
  );
};

const FirstContent = () => {
  const theme = useTheme();

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={8} sx={{ height: "50%", p: 0.5 }}>
        <LeftContent />
      </Grid>
      <Grid item xs={4} sx={{ height: "50%" }}>
        <RightContent theme={theme} />
      </Grid>
    </Grid>
  );
};

export default FirstContent;
