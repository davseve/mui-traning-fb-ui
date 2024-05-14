import { useEffect, useState } from "react";
import ListSingleItem from "./ListSingleItem";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Article, Home, People, AddShoppingCart, GroupWork, ModeNight } from "@mui/icons-material";

const listData = [
    {
        text: 'Homepage',
        icon: <Home />,
        href: '#home'
    },
    {
        text: 'Pages',
        icon: <Home />,
        href: '#pages'
    },
    {
        text: 'Groups',
        icon: <GroupWork />,
        href: '#Article'
    },
    {
        text: 'Marketplace',
        icon: <AddShoppingCart />,
        href: '#pages'
    },
    {
        text: 'Friends',
        icon: <People />,
        href: '#friends'
    },
]
function Sidebar({setMode, mode}){
    const [checked, setChecked] = useState(false);

    return(
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: "none",  sm: "block" } }}
        >
            <Box  position="fixed">
                {listData.map((item, index) => {
                    return (
                        <ListSingleItem data={item} />
                    )}
                )}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch
                                onChange={() => {setMode('light'===mode ? 'dark' : 'light')}}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;