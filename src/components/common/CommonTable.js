import React from "react";
import { Table } from "reactstrap";

const CommonTable = () => {
  return (
    <>
      <Table
        size="sm"
        bordered
        responsive
        borderless
        style={{ width: "1180px", marginLeft: "61px" }}
      >
        <thead>
          <tr>
            <th>Application Number</th>
            <th>Brand Name</th>
            <th>Vehicle Name</th>
            <th>Dealer Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>555-0112</td>
            <td>Hero Electic</td>
            <td>LO:EV</td>
            <td>Barone LLC.</td>
            <td>On Review</td>
            <td>View Application</td>
          </tr>
          <tr>
            <td>555-0112</td>
            <td>Hero Electic</td>
            <td>LO:EV</td>
            <td>Barone LLC.</td>
            <td>On Review</td>
            <td>View Application</td>
          </tr>
          <tr>
            <td>555-0112</td>
            <td>Hero Electic</td>
            <td>LO:EV</td>
            <td>Barone LLC.</td>
            <td>On Review</td>
            <td>View Application</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CommonTable;
