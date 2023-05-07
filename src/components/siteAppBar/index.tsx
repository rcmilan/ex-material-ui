import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuPageProps } from "./types";
import DesktopMenu from "./desktop";
import MobileMenu from "./mobile";

const appTitle = "Escola";
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

  const handleSubItemsClick = (page: MenuPageProps) => {
    setSubItemsOpen(subItemsOpen === page.title ? null : page.title);
  };

  const renderDesktopMenu = () => (
    <DesktopMenu
      pages={pages}
      subItemsOpen={subItemsOpen}
      setSubItemsOpen={setSubItemsOpen}
    />
  );

  const renderMobileMenu = () => (
    <MobileMenu
      pages={pages}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      subItemsOpen={subItemsOpen}
      handleSubItemsClick={handleSubItemsClick}
    />
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
                {appTitle}
              </Typography>
            </>
          ) : (
            <>
              <MenuBookIcon />
              <Typography variant="h6" noWrap sx={{ ml: 1 }}>
                {appTitle}
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
