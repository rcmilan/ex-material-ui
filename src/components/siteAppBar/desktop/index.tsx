import React, { useRef } from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MenuPageProps } from "../types";
import { menuItems } from "../constants";
import { DesktopMenuProps } from "./types";

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  subItemsOpen,
  setSubItemsOpen,
}) => {
  const anchorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSubItemsClick = (page: MenuPageProps) => {
    if (subItemsOpen === page.title) {
      setSubItemsOpen(null);
    } else {
      setSubItemsOpen(page.title);
    }
  };

  const getAnchorRef = (index: number) => {
    if (!anchorRefs.current[index]) {
      anchorRefs.current[index] = null;
    }
    return (el: HTMLButtonElement | null) => {
      anchorRefs.current[index] = el;
    };
  };

  return (
    <Box display="flex" justifyContent="center" flexGrow={1}>
      {menuItems.map((page, index) => (
        <React.Fragment key={page.order}>
          {page.subItems.length > 0 ? (
            <>
              <Button
                color="inherit"
                ref={getAnchorRef(index)}
                onClick={() => handleSubItemsClick(page)}
                endIcon={
                  subItemsOpen === page.title ? <ExpandLess /> : <ExpandMore />
                }
              >
                {page.title}
              </Button>
              <Menu
                anchorEl={
                  subItemsOpen === page.title ? anchorRefs.current[index] : null
                }
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={subItemsOpen === page.title}
                onClose={() => setSubItemsOpen(null)}
              >
                {page.subItems.map((subItem) => (
                  <MenuItem
                    key={subItem.order}
                    onClick={() => setSubItemsOpen(null)}
                    component="a"
                    href={subItem.href}
                  >
                    {subItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              key={page.title}
              component="a"
              href={page.href}
            >
              {page.title}
            </Button>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default DesktopMenu;
