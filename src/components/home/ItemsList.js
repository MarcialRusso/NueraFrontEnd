import React from "react";
import PropTypes from "prop-types";

const ItemList = ({ householdItems }) => {
  return householdItems.map((categorizedItems) => (
    <ul key={categorizedItems.category}>
      <p>
        {/* techdebt add a text output component */}
        {categorizedItems.category} {"$"}
        {categorizedItems.totalValue}
      </p>
      <span>
        {categorizedItems.items.map((item) => (
          <ul key={item.id}>
            <p>
              {item.name} {"$"}
              {item.value}
            </p>
          </ul>
        ))}
      </span>
    </ul>
  ));
};

ItemList.propTypes = {
  householdItems: PropTypes.array.isRequired,
};

export default ItemList;
