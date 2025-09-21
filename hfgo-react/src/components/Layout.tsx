import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../utils/navigation';
import logo from '../assets/images/logo3.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, itemLabel: string) => {
    setAnchorEls(prev => ({ ...prev, [itemLabel]: event.currentTarget }));
  };

  const handleMenuClose = (itemLabel: string) => {
    setAnchorEls(prev => ({ ...prev, [itemLabel]: null }));
  };

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMobileItemToggle = (itemLabel: string) => {
    setExpandedItems(prev => ({ ...prev, [itemLabel]: !prev[itemLabel] }));
  };

  const renderDesktopNav = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
      {navigationItems.map((item) => (
        <Box key={item.label} sx={{ position: 'relative' }}>
          {item.children ? (
            <>
              <Button
                color="inherit"
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' }
                }}
                onClick={(e) => handleMenuOpen(e, item.label)}
                endIcon={<ExpandMore />}
              >
                {item.label}
              </Button>
              <Menu
                anchorEl={anchorEls[item.label]}
                open={Boolean(anchorEls[item.label])}
                onClose={() => handleMenuClose(item.label)}
                MenuListProps={{
                  sx: { py: 0 }
                }}
              >
                {item.children.map((child) => (
                  <MenuItem 
                    key={child.path}
                    component={Link}
                    to={child.path}
                    onClick={() => handleMenuClose(item.label)}
                    sx={{
                      color: 'text.primary',
                      '&:hover': { backgroundColor: 'primary.light', color: 'white' }
                    }}
                  >
                    {child.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to={item.path}
              sx={{ 
                mx: 1,
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {item.label}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderMobileNav = () => (
    <Drawer
      anchor="right"
      open={mobileDrawerOpen}
      onClose={handleMobileDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="primary">
          Menu
        </Typography>
        <IconButton onClick={handleMobileDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem
              component={item.children ? 'div' : Link}
              to={item.children ? undefined : item.path}
              onClick={() => {
                if (item.children) {
                  handleMobileItemToggle(item.label);
                } else {
                  setMobileDrawerOpen(false);
                }
              }}
              sx={{
                cursor: 'pointer',
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                '&:hover': { backgroundColor: 'action.hover' }
              }}
            >
              <ListItemText primary={item.label} />
              {item.children && (
                expandedItems[item.label] ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            {item.children && (
              <Collapse in={expandedItems[item.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.path}
                      component={Link}
                      to={child.path}
                      onClick={() => setMobileDrawerOpen(false)}
                      sx={{
                        pl: 4,
                        color: location.pathname === child.path ? 'primary.main' : 'text.primary',
                        '&:hover': { backgroundColor: 'action.hover' }
                      }}
                    >
                      <ListItemText primary={child.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <img
                src={logo}
                alt="His Family Global Outreach Logo"
                style={{ height: 50, marginRight: 16 }}
              />
            </Box>

            {renderDesktopNav()}

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={handleMobileDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {renderMobileNav()}

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            ©{new Date().getFullYear()} His Family Global Outreach
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;