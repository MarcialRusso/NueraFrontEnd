import React from "react";
import { Dropdown } from "semantic-ui-react";

const categories = [
  {
    key: "Electronics",
    text: "Electronics",
    value: "Electronics",
  },
  {
    key: "Clothing",
    text: "Clothing",
    value: "Clothing",
  },
  {
    key: "Kitchen",
    text: "Kitchen",
    value: "Kitchen",
  },
];

const DropdownSelection = () => (
  <Dropdown placeholder="Select Friend" fluid selection options={categories} />
);

export default DropdownSelection;
