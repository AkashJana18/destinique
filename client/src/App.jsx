import "./App.css";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Property from "./pages/Property/Property.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "./components/Context/UserDetailContext";
import AddBusiness from "./pages/AddBusiness/AddBusiness";

function App() {
  const queryClient = new QueryClient();

  const [UserDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ UserDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/addbusiness" element={<AddBusiness show={1} />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
