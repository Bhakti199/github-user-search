import { GITHUB_USER_DETAILS, GITHUB_USER_LIST } from "@/Constants/apiUrls";
import axios from "axios";
const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

export const fetchUserList = async ({
  page = 1,
  pageSize = 10,
  userName = "",
}) => {
  const response = await axios.get(
    GITHUB_USER_LIST({
      page,
      pageSize,
      userName,
    }),
    headers
  );
  return response.data;
};

export const fetchUserDetails = async (username) => {
  const response = await axios.get(GITHUB_USER_DETAILS(username), headers);
  return response.data;
};
