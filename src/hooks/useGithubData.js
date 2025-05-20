import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { fetchUserDetails, fetchUserList } from "@/services/apiServices";
import { throttle } from "lodash";
import toast from "react-hot-toast";
import {
  API_DELAY_VALUE,
  API_LIMIT_ERROR,
  USER_DATA_FETCH_ERROR,
  USER_NAME_REQUIRED_ERROR,
} from "@/Constants";
import { Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowLayout } from "@/hooks/useWindowLayout";

const useGithubData = () => {
  const router = useRouter();
  const { user_name } = router.query;
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
        <Link href={`/user/${login}`} target="_blank">
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
      setUserDetails(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user_name) {
      getUserDetails(user_name);
    }
  }, [user_name]);

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
    if (!searchInput.trim()) {
      notify(USER_NAME_REQUIRED_ERROR);
      return;
    }
    setPage(value);
    throttledPagination({ page: value, pageSize, userName: searchInput });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setPageSize(10);
    if (value.trim())
      debouncedSearch({ page: 1, pageSize: 10, userName: value });
    else {
      setUserListData([]);
      setPage(1);
      setPageSize(10);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchInput.trim()) {
        debouncedSearch({ page: 1, pageSize: 10, userName: searchInput });
      } else {
        setUserListData([]);
        setPage(1);
        setPageSize(10);
        notify(USER_NAME_REQUIRED_ERROR);
      }
    }
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setPage(1);
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
