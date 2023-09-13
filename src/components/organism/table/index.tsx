import { Box, styled } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import newcheque from "../../../assets/images/newcheque.png";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";

export interface DataTableProps {
  checkBox: boolean;
  columns: GridColDef[];
  rows: any[];
  setSelectedContracts?: any;
  selectedContracts?: GridRowSelectionModel;
}

export const customNoRowsOverlay = () => {
  return (
    <Box display="flex" flexDirection="column" paddingTop={5}>
      <Icon src={newcheque} alt="cheque book" height={"160"} />
    </Box>
  );
};

const DataTable = ({
  checkBox,
  columns,
  rows,
  setSelectedContracts,
  selectedContracts,
}: DataTableProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        width: "1020px",
      }}
    >
      <StyleDataGrid
        data-testid="dataTable"
        autoHeight={true}
        checkboxSelection={checkBox}
        columns={columns}
        rows={rows}
        hideFooter
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectedContracts(newSelectionModel);
        }}
        rowSelectionModel={selectedContracts}
        slots={{
          noRowsOverlay: customNoRowsOverlay,
        }}
        sx={{

        }}
      />
    </Box>
  );
};

const StyleDataGrid = styled(DataGrid)({
  "&.Mui-selected": {
    backgroundColor: theme.palette.purple[500],
    "&:hover": {
      backgroundColor: theme.palette.purple[500],
    },
  },
  "& .MuiDataGrid-cell": {
    color: theme.palette.textColor.lowemp,
    fontVariant: `theme.typography.body2!important`,
    borderBottom: "none",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: theme.palette.background.elevation1,
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.gray[100],
    color: theme.palette.textColor.lowemp,
    fontVariant: theme.typography.body2,
    borderBottom: "none",
  },
  "& .MuiDataGrid-root, .MuiDataGrid-row.Mui-selected": {
    backgroundColor: theme.palette.purple[500],

  },
  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: theme.palette.purple[500],
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: theme.palette.background.elevation1,
  },
  "& .MuiDataGrid-columnHeaders": {
    borderRadius: " 12px 12px 12px 12px ",
  },
  "& .MuiSvgIcon-root": {
    borderRadius: 3,
  },
  "& .MuiDataGrid-root, .MuiDataGrid-withBorderColor, .MuiDataGrid-autoHeight, .MuiDataGrid-root--densityStandard":
  {
    border: "none",
  },
  "& .MuiDataGrid-root, ": {
    border: "none",
  },
  "& .MuiDataGrid-overlayWrapper, ": {
    height: "160px",
  },
  '.MuiDataGrid-checkboxInput': {
    color: theme.palette.icon.lowemp,
  },
  '	.MuiCheckbox-root.Mui-checked': {
    color: theme.palette.purple[400],
  },
  width: "800px",
});

export default DataTable;

