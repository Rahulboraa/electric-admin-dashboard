import React, { useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import member from "../../assets/Team/member.svg";
import member2 from "../../assets/Team/member2.svg";
import axios from "../../api/instance";

const TeamMember = () => {
  const history = useHistory();
  const handleAddTeam = () => {
    history.push("./addteamember");
  };

  const [team, setTeam] = useState(null);

  const getStore = () => {
    axios
      .get(`/Team`)
      .then((result) => {
        setTeam(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getStore();
  }, []);

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
                {team?.map(
                  ({ id, name, emailId, designation, Profile_pic }) => (
                    <React.Fragment key={id}>
                      <tr>
                        <td>{id}</td>
                        <td>
                          <img
                            src={member2}
                            alt="member"
                            style={{ marginRight: "10px" }}
                          />
                          {/* <img
                            src={Profile_pic}
                            alt="member"
                            style={{ marginRight: "10px" }}
                          /> */}
                          {name}
                        </td>
                        <td>{designation}</td>
                        <td>{emailId}</td>
                      </tr>
                    </React.Fragment>
                  )
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
