import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Divider, Typography } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getUserInfo } from "@/selectors/authenticationSelectors";
import { getUserMineInfo } from "@/selectors/userMineSelectors";
import { fetchUserMineInfo } from "@/actionCreators/userDashboardActionCreator";
import CustomPropTypes from "@/customPropTypes";
import Loading from "@/components/common/Loading";
import * as routes from "@/constants/routes";
import * as Strings from "@/constants/strings";

const { Paragraph, Title } = Typography;

const propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchUserMineInfo: PropTypes.func.isRequired,
  userMineInfo: CustomPropTypes.userMines.isRequired,
};

export class MinesPage extends Component {
  state = { isLoaded: false };

  componentDidMount() {
    this.props.fetchUserMineInfo().then(() => this.setState({ isLoaded: true }));
  }

  render() {
    const { mines } = this.props.userMineInfo;
    return (
      (this.state.isLoaded && (
        <Row>
          <Col>
            <Title>My Mines</Title>
            <Divider />
            <Title level={2}>Welcome, {this.props.userInfo.preferred_username}.</Title>
            {(mines && mines.length > 0 && (
              <Row>
                <Col>
                  <Paragraph>
                    You are authorized to submit information for the following mines:
                  </Paragraph>
                  <Paragraph>
                    <ul>
                      {mines
                        .sort((a, b) => (a.mine_name > b.mine_name ? 1 : -1))
                        .map((mine) => (
                          <li key={mine.mine_guid}>
                            <Link to={routes.MINE_DASHBOARD.dynamicRoute(mine.mine_guid)}>
                              {mine.mine_name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </Paragraph>
                  <Paragraph>
                    Don&apos;t see the mine you&apos;re looking for? Contact&nbsp;
                    <a href={`mailto:${Strings.MDS_EMAIL}`}>{Strings.MDS_EMAIL}</a>
                    &nbsp;for assistance.
                  </Paragraph>
                </Col>
              </Row>
            )) || (
              <Row>
                <Col>
                  <Paragraph>
                    You are not authorized to manage information for any mines. Please contact&nbsp;
                    <a className="underline" href={Strings.MDS_EMAIL}>
                      {Strings.MDS_EMAIL}
                    </a>
                    &nbsp;for assistance.
                  </Paragraph>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      )) || <Loading />
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  userMineInfo: getUserMineInfo(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUserMineInfo,
    },
    dispatch
  );

MinesPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MinesPage);
