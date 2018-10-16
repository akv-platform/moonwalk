import React, { Component } from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-navigation";
import ScreenBackground from "../../Common/ScreenBackground";
import ScreenTitle from "../../Common/ScreenTitle";
import NextLaunchCard from "../NextLaunchCard";
import ErrorCard from "../ErrorCard";
import Loader from "../../Common/Loader";
import CountdownCard from "../CountdownCard/CountdownCard";

const Wrapper = styled(ScreenBackground)`
  flex: 1;
  padding: 40px 0 0 0;
`;

const ContentWrapper = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
`;

class DashboardScreen extends Component {
  componentDidMount() {
    this.props.loadNextLaunches();
  }

  navigateToDetails() {
    const { data } = this.props.launches;
    this.props.setSelectedLaunch(data.launches[0].id);
    this.props.navigation.navigate("details");
  }

  render() {
    const { loading, error, data } = this.props.launches;
    const { loadNextLaunches } = this.props;
    return (
      <Wrapper
        colors={["#373468", "#222437"]}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
      >
        <ScreenTitle title="Next launch" />
        <ContentWrapper>
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorCard onPress={loadNextLaunches} />
          ) : (
            data && (
              <>
                <NextLaunchCard
                  data={data.launches[0]}
                  navigateToDetails={() => this.navigateToDetails()}
                />
                <CountdownCard data={data.launches[0]} />
              </>
            )
          )}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default DashboardScreen;
