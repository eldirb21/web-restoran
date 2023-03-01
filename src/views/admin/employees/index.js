import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TableHeaders } from "../../../components/tables/table-headers";
import styles from "./employees.module.css";
import AddEmployee from "./add-employee";
import ModalAlert from "../../../components/ModalAlart";
import {
  addEmployee,
  clearDeleteEmployee,
  deleteEmployee,
  getEmployeeList,
} from "../../../redux/actions/employeeAction";
import { formatDate } from "../../../constants/helpers";
import { Spinner } from "../../../components/Spinner";

const theadData = ["ID", "Username", "Role", "Join date", "Ation"];

export const Employees = (props) => {
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalAlert, setmodalAlert] = useState(false);
  const [Items, setItems] = useState([]);
  const [selected, setselected] = useState({});
  const showModalAdd = () => {
    setmodalAdd(!modalAdd);
  };
  const showModalAlert = () => {
    setmodalAlert(!modalAlert);
  };

  useEffect(() => {
    props.getEmployeeList();
  }, []);

  useEffect(() => {
    if (props.employee.employees) {
      setItems(props.employee.employees);
    }
  }, [props.employee]);

  useEffect(() => {
    if (props.employee.submitStatus) {
      showModalAdd();
      props.getEmployeeList();
    }
  }, [props.employee.submitStatus]);

  useEffect(() => {
    if (props.employee.deleteStatus) {
      showModalAlert();
      props.getEmployeeList();
      props.clearDeleteEmployee();
    }
  }, [props.employee.deleteStatus]);

  console.log("props.employee.submitStatus = ", props.employee.deleteStatus);

  const handleDelete = () => {
    props.deleteEmployee({ id: selected.id });
  };

  return (
    <div className={`container ${styles.employese}`}>
      <div className={styles.content}>
        <TableHeaders onAdd={showModalAdd} />
        <table>
          <thead>
            <tr>
              {theadData.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="temployee">
            {Items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <td>{formatDate(item.createdAt, true)}</td>

                <td>
                  {/* <button onClick={showModalEdit}>Edit</button> */}
                  <button
                    onClick={() => {
                      setselected(item);
                      showModalAlert();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className={styles.paginate}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div> */}
      </div>

      <AddEmployee visible={modalAdd} onModal={showModalAdd} {...props} />
      {/* <EditEmployee visible={modalEdit} onModal={showModalEdit} /> */}

      <ModalAlert
        multibuttton={true}
        visible={modalAlert}
        onHidden={showModalAlert}
        onSubmit={handleDelete}
      />
      <Spinner visible={props.employee.loading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  employee: state.employee,
});

const mapDispatchToProps = {
  getEmployeeList,
  addEmployee,
  deleteEmployee,
  clearDeleteEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
