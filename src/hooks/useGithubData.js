import { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { fetchUserDetails, fetchUserList } from "@/services/apiServices";
import { throttle } from "lodash";
import toast from "react-hot-toast";

import {
  API_DELAY_VALUE,
  API_LIMIT_ERROR,
  USER_DATA_FETCH_ERROR,
} from "@/Constants";
import { Avatar } from "antd";
import Link from "next/link";
import { useWindowLayout } from "./useWindowLayout";

const useGithubData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userListData, setUserListData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { windowWidth } = useWindowLayout();

  const isMobileView = () => windowWidth <= 639;

  const userListColumns = [
    {
      title: "Avatar",
      dataIndex: "avatar_url",
      key: "avatar",
      render: (url) => <Avatar src={url} alt="avatar" data-testid="aaa" />,
    },
    {
      title: "Username",
      dataIndex: "login",
      key: "username",
      render: (login, record) => (
        <Link href={`/user/${login}`} target="_blank" rel="noopener noreferrer">
          {login}
        </Link>
      ),
    },
  ];

  const notify = (errorMessage) =>
    toast.error(errorMessage, {
      style: {
        width: "450px",
      },
    });

  const getUserList = async ({ page, pageSize, userName }) => {
    setLoading(true);
    try {
      const data = await fetchUserList({ page, pageSize, userName });
      setUserListData(data);
      setLoading(false);
    } catch (error) {
      notify(API_LIMIT_ERROR);
      setUserListData([]);
      setLoading(false);
    }
  };

  const getUserDetails = async (userName) => {
    setLoading(true);
    try {
      const data = await fetchUserDetails(userName);
      setUserDetails(data);
      setLoading(false);
    } catch (error) {
      notify(USER_DATA_FETCH_ERROR);
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce(({ page, pageSize, userName }) => {
      getUserList({ page, pageSize, userName });
    }, API_DELAY_VALUE),
    []
  );

  const throttledPagination = useCallback(
    throttle(
      ({ page, pageSize, userName }) => {
        getUserList({ page, pageSize, userName });
      },
      API_DELAY_VALUE,
      { leading: true, trailing: false }
    ),
    []
  );

  const handlePaginationChange = (value) => {
    setPage(value);
    throttledPagination({ page: value, pageSize, userName: searchInput });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setPageSize(10);
    debouncedSearch({ page: 1, pageSize: 10, userName: value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      debouncedSearch({ page: 1, pageSize: 10, userName: searchInput });
    }
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    throttledPagination({
      page: 1,
      pageSize: value,
      userName: searchInput,
    });
  };

  return {
    searchInput,
    setSearchInput,
    handleKeyPress,
    getUserList,
    userListData,
    setPage,
    setPageSize,
    userDetails,
    getUserDetails,
    loading,
    setLoading,
    page,
    pageSize,
    debouncedSearch,
    handleInputChange,
    handlePaginationChange,
    userListColumns,
    isMobileView,
    handlePageSizeChange,
  };
};

export default useGithubData;
