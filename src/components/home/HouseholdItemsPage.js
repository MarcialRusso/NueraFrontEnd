import React from "react";
import { connect } from "react-redux";
import * as itemActions from "../../redux/actions/itemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ItemList from "./ItemsList";

class HouseholdItemsPage extends React.Component {
  state = {
    redirectToAddHouseholdItemPage: false,
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
    /*save new item here*/
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Items</h2>
        <ItemList householdItems={this.props.householdItems} />
        <div>
          <div role="listbox" aria-expanded="false">
            <div role="alert" aria-live="polite" aria-atomic="true">
              Select Category
            </div>
            <i aria-hidden="true"></i>
            <div>
              <div role="option" aria-checked="false" aria-selected="true">
                <span>Electronics</span>
              </div>
              <div role="option" aria-checked="false" aria-selected="false">
                <span>Clothing</span>
              </div>
              <div role="option" aria-checked="false" aria-selected="false">
                <span>Kitchen</span>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {"Add"}
          </button>
        </div>
      </form>
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
