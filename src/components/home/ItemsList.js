import React from "react";
import PropTypes from "prop-types";

const ItemList = ({ householdItems, total }) => {
  const itemsList = householdItems.map((categorizedItems) => (
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

  return itemsList.concat("TOTAL ".concat(total));
};

ItemList.propTypes = {
  householdItems: PropTypes.array.isRequired,
};

export default ItemList;
