import { connect } from "react-redux";
import DashboardScreen from "./DashboardScreen";
import { loadNextLaunches, setSelectedLaunch } from "../../Ducks/launches";

const mapStateToProps = state => {
  return {
    launches: state.launches
  };
};

const mapDispatchToProps = {
  loadNextLaunches,
  setSelectedLaunch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
