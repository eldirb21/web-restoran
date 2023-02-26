import React from "react";
import { connect } from "react-redux";

export const Tables = ({ theadData, tbodyData, customClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((item) => {
            return <td title={item}>{item}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return (
            <tr key={item.id}>
              {item.items.map((item) => {
                return <td key={item}>{item}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
