import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    let map;

    // Initialize the map
    if (!map) {
      // Coordinates for Bhagalpur, Bihar
      const bhagalpurCoordinates = [25.2424, 86.9842];

      map = L.map("map").setView(bhagalpurCoordinates, 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker at Bhagalpur, Bihar
      L.marker(bhagalpurCoordinates)
        .addTo(map)
        .bindPopup("Ride Start Location: Bhagalpur, Bihar")
        .openPopup();
    }

    // Cleanup function to remove the map instance
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="map" className="h-[80vh] w-full"></div>;
};

export default Map;
