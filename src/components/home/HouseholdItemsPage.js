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
    const item = event.value;
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
            <input></input>

            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="value"
              value={this.state.value}
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
