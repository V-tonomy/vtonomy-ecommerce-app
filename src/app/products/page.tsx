'use client'

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
  Container,
  Paper,
  Collapse,
  Menu,
  MenuItem,
  Fade,
  Zoom,
  Grow
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart,
  AccountCircle,
  Menu as MenuIcon,
  Category,
  FilterList,
  ChevronRight,
  ExpandMore,
  ExpandLess} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { GridLegacy } from 'node_modules/@mui/material';

// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const EcommercePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoriesOpen] = useState(true);
  const [filtersOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Mock product data
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 900) + 100,
    rating: Math.random() * 2 + 3,
    reviews: Math.floor(Math.random() * 500) + 50,
    image: `https://via.placeholder.com/300x300/7B68EE/FFFFFF?text=Product+${i + 1}`
  }));

  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports & Outdoors',
    'Books',
    'Toys & Games',
    'Health & Beauty',
    'Automotive'
  ];


  const handleClose = () => {
    setAnchorEl(null);
  };

  const sidebarContent = (
    <Box sx={{ width: 250, p: 2 }}>
      {/* Categories Section */}
      <Box sx={{ mb: 3 }}>
        <ListItem 
          //button 
          //onClick={() => setCategoriesOpen(!categoriesOpen)}
          sx={{ 
            px: 0,
            '&:hover': { backgroundColor: 'rgba(123, 104, 238, 0.08)' }
          }}
        >
          <ListItemIcon>
            <Category sx={{ color: '#7B68EE' }} />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((category) => (
              <ListItem 
                //button 
                key={category} 
                sx={{ 
                  pl: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    backgroundColor: 'rgba(123, 104, 238, 0.08)',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <ListItemText primary={category} />
                <ChevronRight sx={{ opacity: 0.5, fontSize: 18 }} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Filters Section */}
      <Box>
        <ListItem 
          //button 
          //onClick={() => setFiltersOpen(!filtersOpen)}
          sx={{ 
            px: 0,
            '&:hover': { backgroundColor: 'rgba(123, 104, 238, 0.08)' }
          }}
        >
          <ListItemIcon>
            <FilterList sx={{ color: '#7B68EE' }} />
          </ListItemIcon>
          <ListItemText primary="Filters" />
          {filtersOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={filtersOpen} timeout="auto" unmountOnExit>
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              sx={{ 
                color: '#7B68EE',
                '& .MuiSlider-thumb': {
                  '&:hover': {
                    boxShadow: '0 0 0 8px rgba(123, 104, 238, 0.16)'
                  }
                }
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="caption">${priceRange[0]}</Typography>
              <Typography variant="caption">${priceRange[1]}</Typography>
            </Box>

            <Typography variant="subtitle2" sx={{ mb: 1 }}>Rating</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox sx={{ color: '#7B68EE', '&.Mui-checked': { color: '#7B68EE' } }} />}
                label={<Rating value={4} readOnly size="small" />}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: '#7B68EE', '&.Mui-checked': { color: '#7B68EE' } }} />}
                label={<Rating value={3} readOnly size="small" />}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: '#7B68EE', '&.Mui-checked': { color: '#7B68EE' } }} />}
                label={<Rating value={2} readOnly size="small" />}
              />
            </FormGroup>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#7B68EE', boxShadow: 3 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            ShopHub
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Login
            </Button>
            <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Register
            </Button>
            
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            
            <IconButton
              edge="end"
              color="inherit"
             // onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Orders</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { sm: 'none' } }}
      >
        {sidebarContent}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ display: 'flex' }}>
        {/* Desktop Sidebar */}
        <Paper
          sx={{
            width: 250,
            position: 'sticky',
            top: 64,
            height: 'calc(100vh - 64px)',
            overflow: 'auto',
            display: { xs: 'none', sm: 'block' },
            borderRadius: 0,
            boxShadow: 2
          }}
        >
          {sidebarContent}
        </Paper>

        {/* Products Grid */}
        <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <GridLegacy item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Grow in timeout={product.id * 100}>
                  <Card
                    onMouseEnter={() => setHoveredProduct(null)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      transform: hoveredProduct === product.id ? 'translateY(-8px)' : 'none',
                      boxShadow: hoveredProduct === product.id ? 8 : 1,
                      '&:hover': {
                        '& .product-image': {
                          transform: 'scale(1.05)'
                        }
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      className="product-image"
                      sx={{ 
                        transition: 'transform 0.3s ease',
                        objectFit: 'cover'
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating 
                          value={product.rating} 
                          precision={0.1} 
                          readOnly 
                          size="small"
                          sx={{ color: '#7B68EE' }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({product.reviews})
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        color="primary" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: '#7B68EE'
                        }}
                      >
                        ${product.price}
                      </Typography>
                      
                      <Zoom in={hoveredProduct === product.id}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            mt: 2,
                            backgroundColor: '#7B68EE',
                            '&:hover': {
                              backgroundColor: '#6B5ED8'
                            }
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Zoom>
                    </CardContent>
                  </Card>
                </Grow>
              </GridLegacy>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EcommercePage;