import React from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import member from "../../assets/Team/member.svg";
import member2 from "../../assets/Team/member2.svg";

const TeamMember = () => {
  const history = useHistory();
  const handleAddTeam = () => {
    history.push("./addteamember");
  };
  return (
    <>
      <section>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Teams</h3>

            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBottom: "2.18rem" }}
            >
              <div>
                <h4>Team Member</h4>
              </div>
              <div>
                <button className="mainAddBtn" onClick={handleAddTeam}>
                  Add Team Member
                </button>
              </div>
            </div>
            <Table bordered responsive borderless style={{ width: "880px" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>555-0112</td>
                  <td>
                    <img
                      src={member2}
                      alt="member"
                      style={{ marginRight: "10px" }}
                    />
                    Dianne Russell
                  </td>
                  <td>Associate Director</td>
                  <td>sara.cruz@example.com</td>
                </tr>
                <tr>
                  <td>555-0112</td>
                  <td>
                    <img
                      src={member}
                      alt="member"
                      style={{ marginRight: "10px" }}
                    />
                    Dianne Russell
                  </td>
                  <td>Associate Director</td>
                  <td>sara.cruz@example.com</td>
                </tr>
                <tr>
                  <td>555-0112</td>
                  <td>
                    <img
                      src={member}
                      alt="member"
                      style={{ marginRight: "10px" }}
                    />
                    Dianne Russell
                  </td>
                  <td>Associate Director</td>
                  <td>sara.cruz@example.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
