import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDate, getTableHeaders } from "@common/utils/helpers";
import CustomPropTypes from "@/customPropTypes";
import * as router from "@/constants/routes";
import NullScreen from "@/components/common/NullScreen";
import TableLoadingWrapper from "@/components/common/wrappers/TableLoadingWrapper";

/**
 * @class AdminVerifiedMinesList displays list of mineVerifiedStatuses for the admin page.
 */

const propTypes = {
  minesVerifiedStatusList: PropTypes.arrayOf(CustomPropTypes.mineVerificationStatus).isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const columns = [
  {
    title: "Mine Name",
    width: 150,
    dataIndex: "mine_name",
    render: (text, record) => (
      <div key={record.key} title="Mine Name">
        <Link to={router.MINE_SUMMARY.dynamicRoute(record.key)}>{text}</Link>
      </div>
    ),
  },
  {
    title: "Last Verified By",
    width: 150,
    dataIndex: "verifying_user",
    render: (text) => <div title="Last Verified By">{text}</div>,
  },
  {
    title: "Last Verified On",
    width: 150,
    dataIndex: "formatted_timestamp",
    render: (text) => <div title="Last Verified On">{text}</div>,
  },
];

const transformRowData = (verifiedMinesList) =>
  verifiedMinesList.map(({ mine_guid, verifying_timestamp, ...rest }) => ({
    key: mine_guid,
    formatted_timestamp: formatDate(verifying_timestamp),
    ...rest,
  }));

export const AdminVerifiedMinesList = (props) => (
  <div>
    <TableLoadingWrapper condition={props.isLoaded} tableHeaders={getTableHeaders(columns)}>
      <Table
        rowClassName="fade-in"
        align="center"
        pagination={false}
        columns={columns}
        dataSource={transformRowData(props.minesVerifiedStatusList)}
        scroll={{ y: 500 }}
        locale={{ emptyText: <NullScreen type="no-results" /> }}
      />
    </TableLoadingWrapper>
  </div>
);

AdminVerifiedMinesList.propTypes = propTypes;

export default AdminVerifiedMinesList;
