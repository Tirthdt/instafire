import Header from "./components/Header";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Test from "./components/Test";
import ErrorComp from "./components/ErrorComp";

import AuthGuard from "./guard/AuthGuard";
import { AuthContextProvider } from "./context/AuthContext";

import { GlobalStyles } from "./styledComps/Global";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyles />
        <Header />
        <ErrorComp>
          <Routes>
            <Route path="" element={<Login />} exact />
            <Route exact path="/signup" element={<Signup />} />
            <Route
              path="/home"
              exact
              element={
                <AuthGuard>
                  <Home />
                </AuthGuard>
              }
            />
            <Route
              path="/addPost"
              element={
                <AuthGuard>
                  <AddPost />
                </AuthGuard>
              }
            />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorComp>
      </AuthContextProvider>
    </>
  );
}

export default App;
