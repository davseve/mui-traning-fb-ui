import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar.jsx";
import AddPost from "./components/AddPost";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

function App() {
    const[mode, setMode] = useState('dark');

    const darkTheme = createTheme ({
        palette: {
            mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between" >
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <RightBar/>
                </Stack>
                <AddPost />
            </Box>
        </ThemeProvider>
    )
}

export default App
