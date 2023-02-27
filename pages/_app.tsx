import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

type PageProps = {
  darkMode: boolean;
  isNotFound?: boolean;
  hideFooter?: boolean;
  hideHeader?: boolean;
  darkHeader?: boolean;
};

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
