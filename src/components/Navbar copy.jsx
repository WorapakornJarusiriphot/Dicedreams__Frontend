// [plugin:vite:import-analysis] Failed to resolve import "@mui/joy/Box" from "src/components/Navbar.jsx". Does the file exist?
// D:/University Work/Year 3, Term 2/Research Project in Software Engineering 1/2024-03-03 Sunday 3 Mar. 2024/dicedreams/src/components/Navbar.jsx:2:16
// 16 |  }
// 17 |  import * as React from "react";
// 18 |  import Box from "@mui/joy/Box";
//    |                   ^
// 19 |  import List from "@mui/joy/List";
// 20 |  import ListDivider from "@mui/joy/ListDivider";

import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function HorizontalList() {
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Products
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}