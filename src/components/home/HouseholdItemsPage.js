import React from "react";
import { connect } from "react-redux";
import * as itemActions from "../../redux/actions/itemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ItemList from "./ItemsList";
import { Redirect } from "react-router-dom";

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

  render() {
    return (
      <>
        {this.state.redirectToAddHouseholdItemPage && (
          <Redirect to="/householdItem" />
        )}
        <h2>Items</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-item"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Item
        </button>

        <ItemList householdItems={this.props.householdItems} />
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
