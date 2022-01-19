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

// import React from "react";
// import { useTable } from "react-table";
// import { Table } from "reactstrap";

// export default function TeamMember() {
//   // !Headers
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "col1",
//       },
//       {
//         Header: "Name",
//         accessor: "col2",
//       },
//       {
//         Header: "Designation",
//         accessor: "col3",
//       },
//       {
//         Header: "Email",
//         accessor: "col4",
//       },
//     ],
//     []
//   );

//   const data = React.useMemo(
//     () => [
//       {
//         col1: "Hello",
//         col2: "World",
//         col3: "This",
//         col4: "Data",
//       },
//       {
//         col1: "react-table",
//         col2: "rocks",
//         col3: "react",
//         col4: "Devs",
//       },
//       {
//         col1: "whatever",
//         col2: "you want",
//         col3: "Nice",
//         col4: "Color",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     // <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
//     //   <thead>
//     //     {headerGroups.map((headerGroup) => (
//     //       <tr {...headerGroup.getHeaderGroupProps()}>
//     //         {headerGroup.headers.map((column) => (
//     //           <th
//     //             {...column.getHeaderProps()}
//     //             style={{
//     //               borderBottom: "solid 3px red",
//     //               background: "aliceblue",
//     //               color: "black",
//     //               fontWeight: "bold",
//     //             }}
//     //           >
//     //             {column.render("Header")}
//     //           </th>
//     //         ))}
//     //       </tr>
//     //     ))}
//     //   </thead>
//     //   <tbody {...getTableBodyProps()}>
//     //     {rows.map((row) => {
//     //       prepareRow(row);
//     //       return (
//     //         <tr {...row.getRowProps()}>
//     //           {row.cells.map((cell) => {
//     //             return (
//     //               <td
//     //                 {...cell.getCellProps()}
//     //                 style={{
//     //                   padding: "10px",
//     //                   border: "solid 1px gray",
//     //                   background: "papayawhip",
//     //                 }}
//     //               >
//     //                 {cell.render("Cell")}
//     //               </td>
//     //             );
//     //           })}
//     //         </tr>
//     //       );
//     //     })}
//     //   </tbody>
//     // </table>

//     <Table bordered responsive borderless style={{ width: "880px" }}>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Designation</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         <React.Fragment>
//           <tr>
//             <td>id</td>
//             <td>name</td>
//             <td>designation</td>
//             <td>emailId</td>
//           </tr>
//         </React.Fragment>
//       </tbody>
//     </Table>
//   );
// }
