import { Divider, Grid } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2";
import ChailedForm from "./Form";
import TableFrom from "./Table";

const Forms = () => {
  return (
    <Grid container columns={21} pt={3}>
      <Grid xs={21} md={10} item>
        <ChailedForm />
      </Grid>
      <Grid md={1} item display="flex" justifyContent="center">
        <Divider orientation="vertical" variant="middle" className="dividerForm" />
      </Grid>
      <Grid xs={21} md={10} item>
        <TableFrom />
      </Grid>
    </Grid>
  );
};

export default Forms;
