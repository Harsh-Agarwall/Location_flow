import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        System Resource Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List style={{ width: "250px" }}>
                    <ListItem button>Dashboard</ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
