import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context/AppContext";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home/Home";
import Counter from "./components/counter/Counter";
import RootLayout from "./components/rootLayout/RootLayout";
import Posts from "./components/posts/Posts";
import Error from "./components/error/Error";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
