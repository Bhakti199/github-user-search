import styles from "@/styles/Error.module.css";
import { Card } from "antd";

function Error() {
  return (
    <Card className={styles.errorCard}>
      <h1 className={styles.errorMessage}>
        User not found, please try again later
      </h1>
    </Card>
  );
}

export default Error;
