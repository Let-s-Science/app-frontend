import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Drawer,
  MantineProvider,
} from "@mantine/core";
import { Stack, Button } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./main.scss";
import { useColorScheme } from "@mantine/hooks";

//Routes
import Login from "./routes/login";
import Start from "./routes/Start";

import PageNotFound from "./routes/Page404";
import Footer from "./components/Footer";
import HeaderSearch from "./components/Headerline";
import Settings from "./routes/Settings";
import Challenges from "./routes/Challenges";
import Profile from "./routes/Profile";
import ContactUs from "./routes/ContactUs";
import Privacy from "./routes/Privacy";
import Signup from "./routes/Signup";
import CheckAuthorization from "./components/CheckAuthorization";
import Logout from "./components/Logout";

function App() {
  // const colorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <React.Fragment>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ colorScheme: colorScheme }}
        >
          <NotificationsProvider position="top-right">
            <Router>
              <HeaderSearch />
              <Stack
                className="stack"
                align="stretch"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                  // height: "100%",
                })}
              >
                <Routes>
                  {/* general-pages */}
                  <Route path="/" element={<Start />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/challenges" element={<Challenges />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/sign-up" element={<Signup />} />

                  {/* Other */}
                  <Route path="/404" element={<PageNotFound />} />
                  <Route path="/privacypolicy" element={<Privacy />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                  <Route path="/logout" element={<Logout />} />
                </Routes>
              </Stack>
              <Footer />
              <CheckAuthorization />
            </Router>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.Fragment>
  );
}

export default App;
