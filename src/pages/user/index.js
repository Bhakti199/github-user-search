import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import useGithubData from "@/hooks/useGithubData";
import { Card, Spin } from "antd";
import styles from "@/styles/UserSearch.module.css";

function UserSearch() {
  const {
    searchInput,
    setSearchInput,
    handleKeyPress,
    handleSearchUser,
    userListData,
    loading,
    page,
    handleInputChange,
    handlePaginationChange,
    pageSize,
    userListColumns,
    isMobileView,
    handlePageSizeChange,
    getUserList,
  } = useGithubData();

  return (
    <Card className={styles.userSearchContainer}>
      <h1 className={styles.title}>Search GitHub User</h1>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleKeyPress={handleKeyPress}
        handleSearchUser={handleSearchUser}
        handleInputChange={handleInputChange}
        getUserList={getUserList}
      />
      {loading ? (
        <div className={styles.spinContainer}>
          <Spin />
        </div>
      ) : (
        <UserList
          data={userListData}
          columns={userListColumns}
          page={page}
          handlePaginationChange={handlePaginationChange}
          pageSize={pageSize}
          isMobileView={isMobileView}
          handlePageSizeChange={handlePageSizeChange}
        />
      )}
    </Card>
  );
}

export default UserSearch;
