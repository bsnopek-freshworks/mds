import React from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HeaderDropdown from "@/components/layout/HeaderDropdown";
import AuthorizationWrapper from "@/components/common/wrappers/AuthorizationWrapper";
import * as routes from "@/constants/routes";
import { BC_GOV } from "@/constants/assets";

const propTypes = {
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
  lg: PropTypes.number.isRequired,
};

export const Header = (props) => (
  <Layout.Header>
    <Row type="flex" justify="center" align="top">
      <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
        <div className="header-content">
          <span className="header-logo">
            <a href="https://gov.bc.ca/">
              <img alt="BC Government Logo" src={BC_GOV} width={154} />
            </a>
          </span>
          <span className="header-title">
            <Link to={routes.HOME.route}>MineSpace</Link>
          </span>
          <span className="header-menu">
            <AuthorizationWrapper inDevelopment inTesting>
              <HeaderDropdown />
            </AuthorizationWrapper>
          </span>
        </div>
      </Col>
    </Row>
  </Layout.Header>
);

Header.propTypes = propTypes;

export default Header;
