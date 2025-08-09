"use client"


import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



// To Set Position
const position = [51.505, -0.09]


// Fix marker icon issues in Next.js
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl: "/custom-marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const locations = [
    { coords: [6.9271, 79.8612], label: "Colombo" },
    { coords: [7.2906, 80.6337], label: "Kandy" }
];

function CustomMap(props) {

 return (

     <div className={"map-container"} style={{marginBlock:"40px"}}>
         <MapContainer
             center={position}
             zoom={13}
             scrollWheelZoom={false}
             style={{ height: "600px", width: "70%",margin: "0 auto" }}
         >
             <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
             {/*<Marker*/}
             {/*    position={position}*/}
             {/*    icon={customIcon}*/}
             {/*>*/}
             {/*    <Popup>*/}
             {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
             {/*    </Popup>*/}
             {/*</Marker>*/}

             {locations.map((loc, i) => (
                 <Marker key={i} position={loc.coords}>
                     <Popup>{loc.label}</Popup>
                 </Marker>
             ))}
         </MapContainer>
     </div>






    )

 }

 ;


export default CustomMap;