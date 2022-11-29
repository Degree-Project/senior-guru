import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ServiceCards(props) {
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" className="mb-4 p-2 m-1">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211015173104/Top-7-Data-Science-Certifications-That-You-Can-Consider.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.head}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              height: "40px",
              overflow: "hidden",
            }}
          >
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
