// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import HomePage from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/plan" element={<PlanPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
