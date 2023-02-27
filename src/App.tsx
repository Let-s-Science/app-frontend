import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import { Stack } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./main.scss";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

//Routes
import Login from "./routes/Login";
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
import ChallengeView from "./routes/Challenge";
import Quiz from "./routes/Quiz";
import ChallengeProgress from "./routes/ChallengeProgress";

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withNormalizeCSS
          withGlobalStyles
        >
          <NotificationsProvider position="top-right">
            <Router>
              <Stack
                className="stack"
                align="stretch"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                })}
              >
                <HeaderSearch />
                <Container fluid>
                  <Routes>
                    {/* general-pages */}
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/challenge/:id" element={<ChallengeView />} />
                    <Route
                      path="/challenge/:id/progress"
                      element={<ChallengeProgress />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/quiz" element={<Quiz />} />

                    {/* Other */}
                    <Route path="/404" element={<PageNotFound />} />
                    <Route path="/privacypolicy" element={<Privacy />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                    <Route path="/logout" element={<Logout />} />
                  </Routes>
                </Container>
              </Stack>
              <Footer />
              <CheckAuthorization />
            </Router>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
