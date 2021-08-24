import React from "react";
import { App } from "framework7-react";
import routes from "./commons/routes";
import F7Views from "./components/Views";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const f7params = {
  routes,
  name: "My App",
  theme: "auto",
  id: "com.react.boiler",
};

const MyApp = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App {...f7params}>
          <F7Views />
        </App>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
