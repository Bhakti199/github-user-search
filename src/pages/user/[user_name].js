import useGithubData from "@/hooks/useGithubData";
import { Card } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "@/styles/UserDetails.module.css";
import { Fragment } from "react";
import Error from "@/components/Error";

function UserDetails() {
  const { userDetails } = useGithubData();
  console.log(userDetails, "userDetails");
  return (
    <Fragment>
      {userDetails ? (
        <Card className={styles.userDetailsCard}>
          <h1 className={styles.title}>User Details</h1>
          <div className={styles.userDetailsContainer}>
            <div className={styles.userImageContainer}>
              {userDetails?.name && <h2>{userDetails?.name}</h2>}
              <Image
                src={userDetails?.avatar_url}
                alt={`${userDetails?.name ?? "user"} image`}
                width={200}
                height={200}
                className={styles.userImage}
              />
            </div>
            <div className={styles.userOtherDetailsContainer}>
              <h2>Bio & other details</h2>

              <div className={styles.userDetails}>
                {userDetails?.bio && <div>{userDetails?.bio}</div>}
                {userDetails?.login && (
                  <div className={styles.userDetailWithIcon}>
                    <UserOutlined />
                    {userDetails?.login}
                  </div>
                )}
                {userDetails?.location && (
                  <div className={styles.userDetailWithIcon}>
                    <EnvironmentOutlined />
                    {userDetails?.location}
                  </div>
                )}
                <div>Followers: {userDetails?.followers ?? 0}</div>
                <div>Following: {userDetails?.following ?? 0}</div>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Error />
      )}
    </Fragment>
  );
}

export default UserDetails;
