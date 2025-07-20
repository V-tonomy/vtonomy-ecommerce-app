import { Box, Button, Card, CardContent, CardMedia, Rating, Typography, Zoom } from "@mui/material"
import { useState } from "react"

interface VtonomyProductCardProps {
    id: string
    name: string
    price: number
    rating: number
    reviews: number
    image: string

}

export const VtonomyProductCard = ({
    product
}: {
    product: VtonomyProductCardProps
}) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
    return (
        <Card
                    onMouseEnter={() => setHoveredProduct(null)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      transform:
                        hoveredProduct === product.id
                          ? "translateY(-8px)"
                          : "none",
                      boxShadow: hoveredProduct === product.id ? 8 : 1,
                      "&:hover": {
                        "& .product-image": {
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      className="product-image"
                      sx={{
                        transition: "transform 0.3s ease",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Rating
                          value={product.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{ color: "#7B68EE" }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          ({product.reviews})
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        color="primary"
                        sx={{
                          fontWeight: "bold",
                          color: "#7B68EE",
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
                            backgroundColor: "#7B68EE",
                            "&:hover": {
                              backgroundColor: "#6B5ED8",
                            },
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Zoom>
                    </CardContent>
                  </Card>
    )
}