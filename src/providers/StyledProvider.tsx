"use client";

import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import ThemeRegistry from "@/lib/themeRegistry";

export default function StyledProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeRegistry options={{ key: "mui" }}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <ToastContainer />
        {children}
      </StyledComponentsRegistry>
    </ThemeRegistry>
  );
}
