export const GITHUB_BASE_API_URL = "https://api.github.com";

export const GITHUB_USER_LIST = ({
  page = 1,
  pageSize = 10,
  userName = "john",
}) =>
  `${GITHUB_BASE_API_URL}/search/users?q=${userName}&per_page=${pageSize}&page=${page}`;

export const GITHUB_USER_DETAILS = (username) =>
  `${GITHUB_BASE_API_URL}/users/${username}`;
