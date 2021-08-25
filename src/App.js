import React from "react";
import { App } from "framework7-react";
import routes from "./commons/routes";
import F7Views from "./components/Views";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // reactQuery는 4가지 경우 백그라운드에서 데이터를 refetch한다
      // 1. 새로운 쿼리 인스턴스 마운트: refetchMount
      // 2. 브라우저 윈도우 다시 포커스되었을때: refetchOnWindowFocus
      // 3. 네트워크 다시 연결되었을때: refetchOnReconnect
      // 4. refetchInterval 옵션이 있을때 : refetchInterval
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
