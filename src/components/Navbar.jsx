import { useState } from "react";
import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems: "center",
} )

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}))


function Navbar() {
    const [menuState, setMenuState] = useState(false);
    return(
        <AppBar position="sticky" bgcolor="grey">
            <StyledToolBar>
                <Typography variant="h6"
                    sx={{ display: { xs: "none", sm:"block" } }}
                >
                    Navbar
                </Typography>
                <Pets
                    sx={{ display: { xs: "block", sm:"none" } }}
                />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph"
                            onClick={() => setMenuState(!menuState)}
                        />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph"
                        onClick={() => setMenuState(!menuState)}
                    />
                    <Typography variant="h6">John</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                open={menuState}
                onClose={() => setMenuState(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;