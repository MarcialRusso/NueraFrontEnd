import React from "react";
import { connect } from "react-redux";
import * as itemActions from "../../redux/actions/itemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ItemList from "./ItemsList";
import SelectInput from "../common/SelectInput";

class HouseholdItemsPage extends React.Component {
  state = {
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

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { actions } = this.props;
    const item = {
      name: this.newItemName.value,
      value: this.newItemValue.value,
      category: this.newItemCategory.value,
    };
    actions
      .saveItem(item)
      .then(() => {
        // force a re-render, is gross but will get it working?
        // could try to concat new item to existing items
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    //const categories = ["Electronics", "Clothing", "Kitchen"];
    return (
      <>
        <div>
          <h2>Items</h2>
          <ItemList householdItems={this.props.householdItems} />
        </div>
        <div>
          {/* techdebt, check if this can be moved outside the scope of this container */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="newItemName"
              defaultValue="name"
              ref={(input) => (this.newItemName = input)}
            />
            <input
              type="number"
              name="newItemValue"
              defaultValue="value"
              ref={(input) => (this.newItemValue = input)}
            />
            <input
              type="text"
              name="newItemCategory"
              defaultValue="category"
              ref={(input) => (this.newItemCategory = input)}
            />
            <button type="submit" className="btn btn-primary">
              {"Add"}
            </button>
          </form>
        </div>
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
      saveItem: bindActionCreators(itemActions.saveItem, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseholdItemsPage);
