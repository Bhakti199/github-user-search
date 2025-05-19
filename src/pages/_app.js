import "antd/dist/reset.css";
import "@/styles/global.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
