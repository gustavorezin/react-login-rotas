import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { router } from "./routes";
import { AuthContextProvider } from "./contexts/auth-contexts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { Toaster } from "sonner";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Helmet titleTemplate="%s | react.rotas" />
          <GlobalStyle />
          <Toaster
            richColors
            position="bottom-center"
            toastOptions={{ className: "toaster-container" }}
          />
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <RouterProvider router={router} />
            </AuthContextProvider>
          </QueryClientProvider>
        </SkeletonTheme>
      </ThemeProvider>
    </HelmetProvider>
  );
}
