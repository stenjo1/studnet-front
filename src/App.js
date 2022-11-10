import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Footer from "./ui/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import StudiesPage from "./pages/StudiesPage";
import ExamsPage from "./pages/ExamsPage";
import ScrollToTop from "./components/ScrollToTop";
import SupportPage from "./pages/SupportPage";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [option, setOption] = useState(0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          option={option}
          setOption={setOption}
          isLogin={false}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <HomePage setActiveTab={setActiveTab} setOption={setOption} />
            )}
          ></Route>
          <Route exact path="/login" component={() => <LoginPage />}></Route>
          <Route
            exact
            path="/profile"
            component={() => <ProfilePage />}
          ></Route>
          <Route
            exact
            path="/studies"
            component={() => (
              <StudiesPage setActiveTab={setActiveTab} setOption={setOption} />
            )}
          ></Route>
          <Route exact path="/exams" component={() => <ExamsPage />}></Route>
          <Route
            exact
            path="/subjects"
            component={() => <div>Subjects</div>}
          ></Route>
          <Route
            exact
            path="/finances"
            component={() => <div>Financials</div>}
          ></Route>
          <Route
            exact
            path="/support"
            component={() => <SupportPage />}
          ></Route>
        </Switch>
        <Footer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          option={option}
          setOption={setOption}
          isLogin={false}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
