'use client'
import "reflect-metadata"
import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Grid,
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
  Container,
  Paper,
  Collapse,
} from "@mui/material";
import {
  Category,
  FilterList,
  ChevronRight,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { GridLegacy } from "node_modules/@mui/material";
import { VtonomyProductCard } from "../components/ProductCard";
import { useProductUseCases } from "../hooks/useAllProducts";

export const ProductsPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoriesOpen] = useState(true);
  const [filtersOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { getAllProducts } = useProductUseCases();

  // Mock product data
  useEffect(() => {
    getAllProducts.execute()
  }, [])

  const products = getAllProducts.data || []

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Books",
    "Toys & Games",
    "Health & Beauty",
    "Automotive",
  ];


  const sidebarContent = (
    <Box sx={{ width: 250, p: 2 }}>
      {/* Categories Section */}
      <Box sx={{ mb: 3 }}>
        <ListItem
          //button
          //onClick={() => setCategoriesOpen(!categoriesOpen)}
          sx={{
            px: 0,
            "&:hover": { backgroundColor: "rgba(123, 104, 238, 0.08)" },
          }}
        >
          <ListItemIcon>
            <Category sx={{ color: "#7B68EE" }} />
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(123, 104, 238, 0.08)",
                    transform: "translateX(8px)",
                  },
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
            "&:hover": { backgroundColor: "rgba(123, 104, 238, 0.08)" },
          }}
        >
          <ListItemIcon>
            <FilterList sx={{ color: "#7B68EE" }} />
          </ListItemIcon>
          <ListItemText primary="Filters" />
          {filtersOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={filtersOpen} timeout="auto" unmountOnExit>
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Price Range
            </Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              sx={{
                color: "#7B68EE",
                "& .MuiSlider-thumb": {
                  "&:hover": {
                    boxShadow: "0 0 0 8px rgba(123, 104, 238, 0.16)",
                  },
                },
              }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography variant="caption">${priceRange[0]}</Typography>
              <Typography variant="caption">${priceRange[1]}</Typography>
            </Box>

            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Rating
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#7B68EE",
                      "&.Mui-checked": { color: "#7B68EE" },
                    }}
                  />
                }
                label={<Rating value={4} readOnly size="small" />}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#7B68EE",
                      "&.Mui-checked": { color: "#7B68EE" },
                    }}
                  />
                }
                label={<Rating value={3} readOnly size="small" />}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#7B68EE",
                      "&.Mui-checked": { color: "#7B68EE" },
                    }}
                  />
                }
                label={<Rating value={2} readOnly size="small" />}
              />
            </FormGroup>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { sm: "none" } }}
      >
        {sidebarContent}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <Paper
          sx={{
            width: 250,
            position: "sticky",
            top: 64,
            height: "calc(100vh - 64px)",
            overflow: "auto",
            display: { xs: "none", sm: "block" },
            borderRadius: 0,
            boxShadow: 2,
          }}
        >
          {sidebarContent}
        </Paper>

        {/* Products Grid */}
        <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3}>
            {
              (products instanceof Array) ?
              products.map((product) => (
                <GridLegacy item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <VtonomyProductCard product={product} />
                </GridLegacy>
              )): false
            }
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
