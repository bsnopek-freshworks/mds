/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ChangeNOWMineForm from "@/components/Forms/noticeOfWork/ChangeNOWMineForm";

const propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  handleNOWImport: PropTypes.func.isRequired,
};

export class VerifyNOWMineInformation extends Component {
  render() {
    return (
      <div>
        <h4>Verify Mine</h4>
        <p>
          Review the information below and verify that the mine associated with the notice of work
          is correct. Use the search to associate a different mine.
        </p>
        <br />
        <ChangeNOWMineForm
          initialValues={this.props.values}
          onSubmit={this.props.handleNOWImport}
          title="Confirm Mine"
        />
      </div>
    );
  }
}
VerifyNOWMineInformation.propTypes = propTypes;

export default VerifyNOWMineInformation;