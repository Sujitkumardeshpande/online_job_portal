import { Grid, Typography } from "@material-ui/core";
import Home from "./Home";
import MyJobs from "./recruiter/MyJobs";

const Welcome = (props) => {
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid item>
          <Typography variant="h1">Welcome to Job Portal</Typography>
        </Grid>
        <Home />
      </Grid>
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
