import React from "react";
import PropTypes from "prop-types";

const ItemList = ({ householdItems: householdItems }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Value</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {householdItems.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Value}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ItemList.propTypes = {
  householdItems: PropTypes.array.isRequired,
};

export default ItemList;
