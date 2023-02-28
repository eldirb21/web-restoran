import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TableHeaders } from "../../../components/tables/table-headers";
import styles from "./employees.module.css";
import ReactPaginate from "react-paginate";
import { Modal } from "../../../components/modal";
import EditEmployee from "./edit-employee";
import AddEmployee from "./add-employee";
import ModalAlert from "../../../components/ModalAlart";
import { getEmployeeList } from "../../../redux/actions/employeeAction";
import { formatDate } from "../../../constants/helpers";

const theadData = ["ID", "Username", "Role", "Join date", "Ation"];

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
  {
    id: "1",
    items: [4, "John", "john@email.com", "01/01/2021"],
  },
  {
    id: "2",
    items: [5, "Sally", "sally@email.com", "12/24/2020"],
  },
  {
    id: "3",
    items: [6, "Maria", "maria@email.com", "12/01/2020"],
  },
  {
    id: "1",
    items: [7, "John", "john@email.com", "01/01/2021"],
  },
  {
    id: "2",
    items: [8, "Sally", "sally@email.com", "12/24/2020"],
  },
  {
    id: "3",
    items: [9, "Maria", "maria@email.com", "12/01/2020"],
  },
  {
    id: "1",
    items: [10, "John", "john@email.com", "01/01/2021"],
  },
];
export const Employees = (props) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalAlert, setmodalAlert] = useState(false);
  var itemsPerPage = 10;
  const pageCount = Math.ceil(tbodyData.length / itemsPerPage);
  const [Items, setItems] = useState([]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tbodyData.length;
    setItemOffset(newOffset);
  };

  const showModalEdit = () => {
    setmodalEdit(!modalEdit);
  };

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
                  <button onClick={showModalAlert}>Delete</button>
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

      <AddEmployee visible={modalAdd} onModal={showModalAdd} />
      <EditEmployee visible={modalEdit} onModal={showModalEdit} />

      <ModalAlert
        multibuttton={true}
        visible={modalAlert}
        onHidden={showModalAlert}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  employee: state.employee,
});

const mapDispatchToProps = {
  getEmployeeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
