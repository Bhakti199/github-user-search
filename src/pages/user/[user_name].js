import useGithubData from "@/hooks/useGithubData";
import { Card, Spin } from "antd";
import styles from "@/styles/UserDetails.module.css";
import Error from "@/components/Error";
import Head from "next/head";
import UserDetails from "@/components/UserDetails";

function UserDetailsPage() {
  const { userDetails, loading } = useGithubData();

  return (
    <Card className={styles.userDetailsCard}>
      <Head>
        <title>Github User Search | User details</title>
      </Head>
      {loading ? (
        <div className={styles.spinContainer}>
          <Spin />
        </div>
      ) : userDetails ? (
        <UserDetails userDetails={userDetails} />
      ) : (
        <Error />
      )}
    </Card>
  );
}

export default UserDetailsPage;
