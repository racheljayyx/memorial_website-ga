import React, { useState } from "react";
import { LuNotepadText } from "react-icons/lu";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";

function TravelNote() {
  const [infoOpen, setInfoOpen] = useState(false);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "0.5rem",
    overflow: "hidden",
  };

  const center = {
    lat: 51.493196,
    lng: 0.07237,
  };

  return (
    <section
      className="pl-8 pr-8 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24 py-12"
      style={{ color: "#a178d0" }}
    >
      <LuNotepadText className="text-[80px] sm:text-[100px] md:text-[120px] mb-4" />

      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Travel Note</h2>
      <p className="text-lg mb-6">
        New Wine Church Gateway House, London, SE18 6QQ
      </p>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} onClick={() => setInfoOpen(true)} />
          {infoOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div>New Wine Church Gateway House, London, SE18 6QQ</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

export default TravelNote;
