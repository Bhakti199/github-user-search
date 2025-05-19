import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import useGithubData from "@/hooks/useGithubData";
import { Card, Spin } from "antd";

function Home() {
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
  } = useGithubData();

  const data = {
    total_count: 100,
    incomplete_results: true,
    items: [
      {
        login: "karpathy",
        id: 241138,
        node_id: "MDQ6VXNlcjI0MTEzOA==",
        avatar_url: "https://avatars.githubusercontent.com/u/241138?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/karpathy",
        html_url: "https://github.com/karpathy",
        followers_url: "https://api.github.com/users/karpathy/followers",
        following_url:
          "https://api.github.com/users/karpathy/following{/other_user}",
        gists_url: "https://api.github.com/users/karpathy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/karpathy/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/karpathy/subscriptions",
        organizations_url: "https://api.github.com/users/karpathy/orgs",
        repos_url: "https://api.github.com/users/karpathy/repos",
        events_url: "https://api.github.com/users/karpathy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/karpathy/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "gaearon",
        id: 810438,
        node_id: "MDQ6VXNlcjgxMDQzOA==",
        avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/gaearon",
        html_url: "https://github.com/gaearon",
        followers_url: "https://api.github.com/users/gaearon/followers",
        following_url:
          "https://api.github.com/users/gaearon/following{/other_user}",
        gists_url: "https://api.github.com/users/gaearon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/gaearon/subscriptions",
        organizations_url: "https://api.github.com/users/gaearon/orgs",
        repos_url: "https://api.github.com/users/gaearon/repos",
        events_url: "https://api.github.com/users/gaearon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/gaearon/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "peng-zhihui",
        id: 12994887,
        node_id: "MDQ6VXNlcjEyOTk0ODg3",
        avatar_url: "https://avatars.githubusercontent.com/u/12994887?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/peng-zhihui",
        html_url: "https://github.com/peng-zhihui",
        followers_url: "https://api.github.com/users/peng-zhihui/followers",
        following_url:
          "https://api.github.com/users/peng-zhihui/following{/other_user}",
        gists_url: "https://api.github.com/users/peng-zhihui/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/peng-zhihui/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/peng-zhihui/subscriptions",
        organizations_url: "https://api.github.com/users/peng-zhihui/orgs",
        repos_url: "https://api.github.com/users/peng-zhihui/repos",
        events_url: "https://api.github.com/users/peng-zhihui/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/peng-zhihui/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "bradtraversy",
        id: 5550850,
        node_id: "MDQ6VXNlcjU1NTA4NTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/5550850?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/bradtraversy",
        html_url: "https://github.com/bradtraversy",
        followers_url: "https://api.github.com/users/bradtraversy/followers",
        following_url:
          "https://api.github.com/users/bradtraversy/following{/other_user}",
        gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/bradtraversy/subscriptions",
        organizations_url: "https://api.github.com/users/bradtraversy/orgs",
        repos_url: "https://api.github.com/users/bradtraversy/repos",
        events_url:
          "https://api.github.com/users/bradtraversy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/bradtraversy/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "rafaballerini",
        id: 54322854,
        node_id: "MDQ6VXNlcjU0MzIyODU0",
        avatar_url: "https://avatars.githubusercontent.com/u/54322854?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rafaballerini",
        html_url: "https://github.com/rafaballerini",
        followers_url: "https://api.github.com/users/rafaballerini/followers",
        following_url:
          "https://api.github.com/users/rafaballerini/following{/other_user}",
        gists_url: "https://api.github.com/users/rafaballerini/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rafaballerini/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rafaballerini/subscriptions",
        organizations_url: "https://api.github.com/users/rafaballerini/orgs",
        repos_url: "https://api.github.com/users/rafaballerini/repos",
        events_url:
          "https://api.github.com/users/rafaballerini/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rafaballerini/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "lucidrains",
        id: 108653,
        node_id: "MDQ6VXNlcjEwODY1Mw==",
        avatar_url: "https://avatars.githubusercontent.com/u/108653?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lucidrains",
        html_url: "https://github.com/lucidrains",
        followers_url: "https://api.github.com/users/lucidrains/followers",
        following_url:
          "https://api.github.com/users/lucidrains/following{/other_user}",
        gists_url: "https://api.github.com/users/lucidrains/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lucidrains/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lucidrains/subscriptions",
        organizations_url: "https://api.github.com/users/lucidrains/orgs",
        repos_url: "https://api.github.com/users/lucidrains/repos",
        events_url: "https://api.github.com/users/lucidrains/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lucidrains/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "geohot",
        id: 72895,
        node_id: "MDQ6VXNlcjcyODk1",
        avatar_url: "https://avatars.githubusercontent.com/u/72895?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/geohot",
        html_url: "https://github.com/geohot",
        followers_url: "https://api.github.com/users/geohot/followers",
        following_url:
          "https://api.github.com/users/geohot/following{/other_user}",
        gists_url: "https://api.github.com/users/geohot/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/geohot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/geohot/subscriptions",
        organizations_url: "https://api.github.com/users/geohot/orgs",
        repos_url: "https://api.github.com/users/geohot/repos",
        events_url: "https://api.github.com/users/geohot/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/geohot/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "IDouble",
        id: 18186995,
        node_id: "MDQ6VXNlcjE4MTg2OTk1",
        avatar_url: "https://avatars.githubusercontent.com/u/18186995?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/IDouble",
        html_url: "https://github.com/IDouble",
        followers_url: "https://api.github.com/users/IDouble/followers",
        following_url:
          "https://api.github.com/users/IDouble/following{/other_user}",
        gists_url: "https://api.github.com/users/IDouble/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/IDouble/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/IDouble/subscriptions",
        organizations_url: "https://api.github.com/users/IDouble/orgs",
        repos_url: "https://api.github.com/users/IDouble/repos",
        events_url: "https://api.github.com/users/IDouble/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/IDouble/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "ThePrimeagen",
        id: 4458174,
        node_id: "MDQ6VXNlcjQ0NTgxNzQ=",
        avatar_url: "https://avatars.githubusercontent.com/u/4458174?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ThePrimeagen",
        html_url: "https://github.com/ThePrimeagen",
        followers_url: "https://api.github.com/users/ThePrimeagen/followers",
        following_url:
          "https://api.github.com/users/ThePrimeagen/following{/other_user}",
        gists_url: "https://api.github.com/users/ThePrimeagen/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ThePrimeagen/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ThePrimeagen/subscriptions",
        organizations_url: "https://api.github.com/users/ThePrimeagen/orgs",
        repos_url: "https://api.github.com/users/ThePrimeagen/repos",
        events_url:
          "https://api.github.com/users/ThePrimeagen/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ThePrimeagen/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
      {
        login: "michaelliao",
        id: 470058,
        node_id: "MDQ6VXNlcjQ3MDA1OA==",
        avatar_url: "https://avatars.githubusercontent.com/u/470058?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/michaelliao",
        html_url: "https://github.com/michaelliao",
        followers_url: "https://api.github.com/users/michaelliao/followers",
        following_url:
          "https://api.github.com/users/michaelliao/following{/other_user}",
        gists_url: "https://api.github.com/users/michaelliao/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/michaelliao/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/michaelliao/subscriptions",
        organizations_url: "https://api.github.com/users/michaelliao/orgs",
        repos_url: "https://api.github.com/users/michaelliao/repos",
        events_url: "https://api.github.com/users/michaelliao/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/michaelliao/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        score: 1,
      },
    ],
  };

  return (
    <Card style={{ width: "80%", padding: "20px", margin: "auto" }}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleKeyPress={handleKeyPress}
        handleSearchUser={handleSearchUser}
        handleInputChange={handleInputChange}
      />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "300px",
            marginTop: "20px",
          }}
        >
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

export default Home;
