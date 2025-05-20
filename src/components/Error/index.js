import { API_LIMIT_ERROR } from "@/Constants";
import styles from "./Error.module.css";
import { Card } from "antd";
import Head from "next/head";

function Error() {
  return (
    <Card className={styles.errorCard}>
      <Head>
        <title>Github User Search | Error</title>
      </Head>
      <div className={styles.errorCardContent}>
        <h1 className={styles.errorMessage}>
          User not found, please try again later
        </h1>
        <div>or</div>
        <div>{API_LIMIT_ERROR}</div>
      </div>
    </Card>
  );
}

export default Error;
