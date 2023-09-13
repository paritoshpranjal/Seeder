import { Stack } from "@mui/material";
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import MUIChip from "../../atoms/Chip";
import TypographyComponent from "../../atoms/Typography";

export const columnsPayments: GridColDef[] = [
  {
    field: "dueDate",
    headerName: "Due date",

    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypographyComponent children={params.value.dueDate} variant="body2" />
          <TypographyComponent children={params.value.daysLeft} variant="caption" />
        </Stack>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "expectedAmount",
    headerName: "Expected amount",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "outstanding",
    headerName: "Outstanding",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
];

export const columnsContracts: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "perPayment",
    headerName: "Per payment",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "termLength",
    headerName: "Term length",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypographyComponent children={params.value.length} variant="body2" />
          <TypographyComponent children={params.value.fee} variant="caption" />
        </Stack>
      );
    },
  },
  {
    field: "totalFinanced",
    headerName: "Total financed",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "paymentAmount",
    headerName: "Payment amount",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "totalAvailable",
    headerName: "Total available",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
];

export const columnsCachKicks: any = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "maturity",
    headerName: "Maturity",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
  {
    field: "totalRecieved",
    headerName: "Total received",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypographyComponent children={params.value.totalRecieved} variant="body2" />
          <TypographyComponent
            children={params.value.totalInterestrate}
            variant="caption"
          />
        </Stack>
      );
    },
  },
  {
    field: "totalFinanced",
    headerName: "Total financed",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypographyComponent children={params.colDef.headerName ?? ""} variant="body2" />
      );
    },
  },
];
