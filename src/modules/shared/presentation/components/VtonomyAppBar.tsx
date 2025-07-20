'use client'
import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import {
    AccountCircle,
    Menu as MenuIcon,
    Search as SearchIcon,
    ShoppingCart,
} from "@mui/icons-material"
import { Search, SearchIconWrapper } from "@/modules/products/presentation/components/Search"
import { StyledInputBase } from "@/modules/products/presentation/components/StyledInputBase"

export const VtonomyAppBar = () => {
    return (
    <section>
        {/* Navigation Bar */}
        <AppBar
        position="sticky"
        sx={{ backgroundColor: "#7B68EE", boxShadow: 3 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {}}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ShopHub
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
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
            {/* <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Orders</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
          </Box>
        </Toolbar>
      </AppBar>
        </section>
    )
    
    
}