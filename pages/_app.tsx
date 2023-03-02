import React from "react";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type PageProps = {
  darkMode: boolean;
  isNotFound?: boolean;
  hideFooter?: boolean;
  hideHeader?: boolean;
  darkHeader?: boolean;
};

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
