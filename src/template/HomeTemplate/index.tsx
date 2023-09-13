import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
interface IHomeTemplate {
  sidebar?: any;
  header?: any;
  datacard?: any;
  progresscard?: any
  cashkickcard?: any;
  table?: any;
}

const HomeTemplate: React.FC<IHomeTemplate> = ({
  sidebar,
  header,
  datacard,
  progresscard,
  cashkickcard,
  table,
}: IHomeTemplate) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        display="flex"
        width="100%"
        height="100%"
        flexDirection={"row"}
        sx={{ backgroundColor: `${theme.palette.background.elevation0}` }}
      >
        <Grid
          display="flex"
          sx={{
            width: `${theme.spacing(62.5)}`,
          }}
          height="100%"
        >
          {sidebar}
        </Grid>
        <Grid
          display="flex"
          sx={{
            width: `calc(100% - ${theme.spacing(62.5)})`,
          }}
          height="100%"
          flexDirection={"column"}
        >
          {header}
          <Grid display="flex" flexDirection={"row"}>
            {datacard}
            {progresscard}
            {cashkickcard}
          </Grid>
          {table}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomeTemplate;
