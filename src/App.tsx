import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Container, Drawer } from "@mantine/core";
import { Stack, Button } from "@mantine/core";
import "./main.scss";

//Routes
import Login from "./routes/login";
import Start from "./routes/Start";

import PageNotFound from "./routes/Page404";
import Footer from "./components/Footer";
import HeaderSearch from "./components/Headerline";

function App() {
  return (
    <React.Fragment>
      <HeaderSearch />
      <Stack
        justify="space-between"
        className="stack"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          // height: "100%",
        })}
      >
        <Container>
          <Router>
            <Routes>
              {/* general-pages */}
              <Route path="/" element={<Start />} />
              <Route path="/login" element={<Login />} />

              {/* Other */}
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Router>
        </Container>
      </Stack>
      <Footer />
    </React.Fragment>
  );
}

export default App;
