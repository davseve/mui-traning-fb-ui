import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { People } from "@mui/icons-material";

const ListSingleItem = ( {data: { icon, text, href } } ) => {
    return(
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href={ href }>
                    <ListItemIcon>
                        { icon }
                    </ListItemIcon>
                    <ListItemText primary={ text } />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default ListSingleItem;