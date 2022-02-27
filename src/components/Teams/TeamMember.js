import React, { useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";

const TeamMember = () => {
  const history = useHistory();
  const handleAddTeam = () => {
    history.push("./addteamember");
  };

  const [team, setTeam] = useState(null);

  const getStore = () => {
    axios
      .get(`/Team?page=1&limit=10`)
      .then((result) => {
        setTeam(result.data.data.results.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getStore();
  }, []);

  const handleEditTeam = (id) => {
    history.push(`/teams/edit/${id}`);
  };

  return (
    <>
      <section>
        <div className="d-flex">
          <Sidebar />
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Teams</h3>

            <div className="subHeadingButton">
              <div>
                <h4>Team Member</h4>
              </div>
              <div>
                <button className="mainAddBtn" onClick={handleAddTeam}>
                  Add Team Member
                </button>
              </div>
            </div>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {team?.map(
                    ({ id, name, emailId, designation, profilePic }) => (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>
                          <img
                            src={profilePic}
                            alt="member"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                          <span>{name}</span>
                        </td>
                        <td>{designation}</td>
                        <td>{emailId}</td>
                        <td
                          onClick={() => {
                            handleEditTeam(id);
                          }}
                        >
                          <button className="tableEditBtn">Edit Team</button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
