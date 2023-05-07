import React from "react";
import { Drawer, Box, List, ListItem, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { menuItems } from "../constants";
import { MobileMenuProps } from "./types";

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  subItemsOpen,
  handleSubItemsClick,
}) => {
  return (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((page) => (
            <React.Fragment key={page.order}>
              <ListItem onClick={() => handleSubItemsClick(page)}>
                <ListItemText primary={page.title} />
                {page.subItems.length > 0 &&
                  (subItemsOpen === page.title ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItem>
              <Collapse
                in={subItemsOpen === page.title}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {page.subItems.map((subItem, i) => (
                    <ListItem
                      key={i}
                      component="a"
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
