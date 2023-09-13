import React from "react";
import DataTable, { DataTableProps,customNoRowsOverlay } from ".";
import { Meta, StoryFn } from "@storybook/react";
import dbData from "../../../../db.json";
import { columnsPayments} from "./columnHeaders";

const payments = dbData["payments"];
const mycashkicksdata = dbData["mycashkicks"];
const mycontractsdata = dbData["contracts"];

export default {
  title: "Organism/DataTable",
  component: DataTable,
} as Meta;

interface DataTablePropsWithSlots extends DataTableProps {
  checkbox?:boolean;
  slots?: {
    noRowsOverlay?: () => JSX.Element;
  };
}

const Template: StoryFn<DataTablePropsWithSlots> = (args) => <DataTable {...args} />;

export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  checkBox: true,
  columns: columnsPayments,
  rows: payments,
};

export const WithoutCheckbox = Template.bind({});
WithoutCheckbox.args = {
  checkBox: false,
  columns: columnsPayments,
  rows: payments,
};

export const WithCustomOverlay = Template.bind({});
WithCustomOverlay.args = {
  checkBox: false,
  columns: columnsPayments,
  rows: [],
  slots: {
    noRowsOverlay: customNoRowsOverlay,
  },
};
