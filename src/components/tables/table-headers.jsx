import React from "react";
import styles from "./tables.module.css";
export const TableHeaders = ({
  onAdd,
  onFilter,
  onSort,
  onSearch,
  onChangeSearch,
  searchValue,
}) => {
  return (
    <div className={`row ${styles.header}`}>
      <button onClick={onAdd}>
        <i className="fa fa-plus" aria-hidden="true" />
        Add Employee
      </button>
      <div className={`row ${styles.right}`}>
        <button onClick={onFilter}>
          <i className="fa fa-filter" aria-hidden="true" />
        </button>
        <button onClick={onSort}>
          <i className="fa fa-sort-amount-asc" aria-hidden="true" />
        </button>
        <form>
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={onChangeSearch}
          />
          <button type="submit" onClick={onSearch} />
        </form>
      </div>
    </div>
  );
};
