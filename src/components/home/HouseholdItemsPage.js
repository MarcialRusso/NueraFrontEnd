import React from "react";
import { connect } from "react-redux";
import * as itemActions from "../../redux/actions/itemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ItemList from "./ItemsList";
import SelectInput from "../common/SelectInput";

class HouseholdItemsPage extends React.Component {
  state = {
    redirectToAddHouseholdItemPage: false,
    newItemName: "",
    newItemValue: 0,
    newItemCategory: "",
  };

  componentDidMount() {
    const { householdItems, actions } = this.props;

    if (householdItems.length === 0) {
      actions.fetchItems().catch((error) => {
        alert("Loading items failed" + error);
      });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = {
      name: this.newItemName.value,
      value: this.newItemValue.value,
      category: this.newItemCategory.value,
    };
    itemActions
      .saveItem(item)
      .then(() => {
        history.push("/householdItems");
      })
      .catch((error) => {
        alert(error);
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    //const categories = ["Electronics", "Clothing", "Kitchen"];
    return (
      <>
        <>
          <h2>Items</h2>
          <ItemList householdItems={this.props.householdItems} />
        </>
        <>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.newItemName}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="value"
              value={this.state.newItemValue}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              value={this.state.newItemCategory}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              {"Add"}
            </button>
          </form>
        </>
      </>
    );
  }
}

HouseholdItemsPage.propTypes = {
  householdItems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log(state.householdItems);
  return {
    householdItems:
      state.householdItems.householdItems.length === 0
        ? []
        : state.householdItems.householdItems.map((householdItem) => {
            return {
              ...householdItem,
            };
          }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchItems: bindActionCreators(itemActions.fetchItems, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseholdItemsPage);
