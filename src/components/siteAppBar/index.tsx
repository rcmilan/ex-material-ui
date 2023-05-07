import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
  useMediaQuery,
  useTheme,
  ListItemText,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";

interface MenuSubPageProps {
  order: number;
  title: string;
  href: string;
}

interface MenuPageProps {
  order: number;
  title: string;
  href: string;
  subItems: MenuSubPageProps[];
}

const menuTitle = "Escola";
const pages: MenuPageProps[] = [
  {
    order: 1,
    title: "Cursos",
    href: "#",
    subItems: [
      { order: 1, title: "Curso 1", href: "#" },
      { order: 2, title: "Curso ABC", href: "#" },
    ],
  },
  {
    order: 2,
    title: "Quem Somos",
    href: "#",
    subItems: [],
  },
  {
    order: 3,
    title: "Dúvidas",
    href: "#",
    subItems: [],
  },
];

const SiteAppBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subItemsOpen, setSubItemsOpen] = useState<string | null>(null);
  const anchorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSubItemsClick = (page: MenuPageProps) => {
    if (subItemsOpen === page.title) {
      setSubItemsOpen(null);
    } else {
      setSubItemsOpen(page.title);
    }
  };

  const renderDesktopMenu = () => {
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
        {pages.map((page, index) => (
          <React.Fragment key={page.title}>
            {page.subItems.length > 0 ? (
              <>
                <Button
                  color="inherit"
                  ref={getAnchorRef(index)}
                  onClick={() => handleSubItemsClick(page)}
                  endIcon={
                    subItemsOpen === page.title ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  }
                >
                  {page.title}
                </Button>
                <Menu
                  anchorEl={
                    subItemsOpen === page.title
                      ? anchorRefs.current[index]
                      : null
                  }
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  open={subItemsOpen === page.title}
                  onClose={() => setSubItemsOpen(null)}
                >
                  {page.subItems.map((subItem) => (
                    <MenuItem
                      key={subItem.title}
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

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {pages.map((page) => (
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

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {menuTitle}
              </Typography>
            </>
          ) : (
            <>
              <MenuBookIcon />
              <Typography variant="h6" noWrap sx={{ ml: 1 }}>
                {menuTitle}
              </Typography>
            </>
          )}
        </Box>
        {!isMobile && (
          <Box flexGrow={1} display="flex" justifyContent="center">
            {renderDesktopMenu()}
          </Box>
        )}
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>

      {isMobile && renderMobileMenu()}
    </AppBar>
  );
};

export default SiteAppBar;
