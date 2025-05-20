import React, { Fragment } from "react";
import { Table, Pagination, Select } from "antd";
import { PAGINATION_ROW_OPTIONS } from "@/Constants";
import styles from "./UserList.module.css";

function UserList({
  data,
  page,
  handlePaginationChange,
  pageSize,
  handlePageSizeChange,
  columns,
  isMobileView,
}) {
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data.items}
        rowKey="id"
        pagination={false}
        size="small"
        className={styles.userListTable}
      />
      <div className={styles.userListPaginationContainer}>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data?.total_count}
          showSizeChanger={false}
          onChange={handlePaginationChange}
          simple={isMobileView()}
        />
        <Select
          value={pageSize}
          defaultValue={10}
          style={{ width: 120 }}
          onChange={handlePageSizeChange}
          options={PAGINATION_ROW_OPTIONS}
        />
      </div>
    </Fragment>
  );
}

export default UserList;
