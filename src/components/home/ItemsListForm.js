import React from "react";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";

const categories = ["Electronics", "Clothing", "Kitchen"];

const ItemListForm = ({
  householdItems,
  selectedCategory,
  onSave,
  saving = false,
}) => {
  return (
    <form onSubmit={onSave}>
      {householdItems.map((categorizedItems) => (
        <ul key={categorizedItems.category}>
          <p>
            {/* techdebt add a text output component */}
            {categorizedItems.category} {"$"}
            {categorizedItems.totalValue}
          </p>
          <p>
            {categorizedItems.items.map((item) => (
              <ul key={item.id}>
                <p>
                  {item.name} {"$"}
                  {item.value}
                </p>
              </ul>
            ))}
          </p>
        </ul>
      ))}

      {/* <TextInput name="name" label="Name" value={name} error={errors.name} /> */}

      {/* 
      <TextInput
        name="value"
        label="value"
        value={value}
        error={errors.value}
      /> */}
      <div>
        <SelectInput
          name="category"
          value={"Electronic"}
          defaultOption="Select Category"
          onChange={(e) => {
            this.setState({
              selectedCategory: e.name,
            });
          }}
          options={categories.map((category) => ({
            value: category,
            text: category,
          }))}
        />
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

ItemListForm.propTypes = {
  householdItems: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object.isRequired,
};

export default ItemListForm;
