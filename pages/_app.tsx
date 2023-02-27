import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'

type PageProps = {
  darkMode: boolean;
  isNotFound?: boolean;
  hideFooter?: boolean;
  hideHeader?: boolean;
  darkHeader?: boolean;
};

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
