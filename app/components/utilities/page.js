import getAllUtilities from "@/lib/getAllUtilites";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
const result = await getAllUtilities();

export default function Utilities() {
  return (
    <div className="grid grid-cols-6 gap-8 mt-9">
      {result.map((utilitie) => (
        <Card className="p-0" key={utilitie.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
            // component="img"
            // height="100"
            // image={utilitie.logo}
            // alt="green iguana"
            />
            <CardContent className="flex flex-col items-center p-0">
              <div className="p-4">
                <img className="h-[80px]" src={utilitie.logo} alt="logo"></img>
              </div>
              <Typography className="pt-3 " gutterBottom variant="h6" component="div">
                Total Complaints
              </Typography>
              <Typography
                className="font-bold text-green-700 "
                gutterBottom
                variant="h5"
                component="div"
              >
                {utilitie.total_complaints}
              </Typography>

              <div className="bg-green-200 w-full text-center text-xs mt-7">
              
                {utilitie.timestamp}
             
                
              </div>
              
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
