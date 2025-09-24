import React, { useState, useEffect } from "react";
import { LuNotepadText } from "react-icons/lu";
import { FaCar, FaTrain, FaBus } from "react-icons/fa";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

function TravelNote() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

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

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <section
      id="travel"
      className="pl-8 pr-8 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24 py-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl transition-all duration-700"
      style={{ color: "#a178d0" }}
    >
      <LuNotepadText className="text-[80px] sm:text-[100px] md:text-[120px] mb-4 animate-bounce-slow" />
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {visible ? "Travel Note" : ""}
      </h2>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} onClick={() => setInfoOpen(true)} />
        {infoOpen && (
          <InfoWindow position={center} onCloseClick={() => setInfoOpen(false)}>
            <div>New Wine Church Gateway House, London, SE18 6QQ</div>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 active:scale-95">
          <FaCar className="text-4xl text-purple-500 mb-2" />
          <h3 className="font-medium text-lg">By Car</h3>
          <p className="text-gray-600 text-sm">
            Parking avaliable at the following locations: <br /> - Opposite Christ Faith Tabernacle <br /> - Tesco <br /> - Sainsburys
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 active:scale-95">
          <FaTrain className="text-4xl text-purple-500 mb-2" />
          <h3 className="font-medium text-lg">By Train</h3>
          <p className="text-gray-600 text-sm">
            Closest stations: Woolwich Arsenal (Southeastern, Thameslink, DLR), Woolwich (Elizabeth Line)
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 active:scale-95">
          <FaBus className="text-4xl text-purple-500 mb-2" />
          <h3 className="font-medium text-lg">Public Transport</h3>
          <p className="text-gray-600 text-sm">
            Bus routes 161, 177, 180 stop nearby
          </p>
        </div>
      </div>
    </section>
  );
}

export default TravelNote;
