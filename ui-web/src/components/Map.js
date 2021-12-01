import React from "react";
import BingMapsReact from "bingmaps-react";


export default function Map(){
      
    return(
        <BingMapsReact
        bingMapsKey="AluNyYYbk2RB0UfFVNK1F4GqEJCB8rQexqULNKFW7EeMjQEJcdRZACxknAc4UrAC"
        height="500px"
        mapOptions={{
          navigationBarMode: "square",
        }}
        width="500px"
        viewOptions={{
          center: { latitude: 42.360081, longitude: -71.058884 },
          mapTypeId: "grayscale",
        }}
      />
    )
}