import React from "react";
import { connect } from "react-redux";
const theadData = ["ID", "Name", "Email", "Date", "Ation"];

const tbodyData = [
  {
    id: "1",
    items: [1, "John", "john@email.com", "01/01/2021"],
  },
  {
    id: "2",
    items: [2, "Sally", "sally@email.com", "12/24/2020"],
  },
  {
    id: "3",
    items: [3, "Maria", "maria@email.com", "12/01/2020"],
  },
];
export const Employees = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {theadData.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row) => (
            <tr key={row.id}>
              {row.items.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
