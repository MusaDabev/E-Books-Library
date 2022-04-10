import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {NavLink} from 'react-router-dom'

function Header() {
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
            <NavLink to='/' style={{color: "white"}}>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          </NavLink>
          <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val) => {setValue(val)}}
           sx={{ml: 'auto'}}>
            <Tab LinkComponent={NavLink} to='/add' label="Add product" />
            <Tab LinkComponent={NavLink} to='/books'  label="Books" />
            <Tab LinkComponent={NavLink} to='/about'  label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
