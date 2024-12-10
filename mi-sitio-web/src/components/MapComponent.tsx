import React, { memo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Corregir el icono de marcador por defecto de Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

L.Marker.prototype.options.icon = DefaultIcon

const MapComponent: React.FC = memo(() => {
  const position: [number, number] = [-27.3694, -55.8965] // Coordenadas de Posadas

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false}
      style={{ 
        height: '400px', 
        width: '100%', 
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        minZoom={5}
        loading="lazy"
      />
      <Marker 
        position={position} 
        interactive={true}
        keyboard={false}
      >
        <Popup 
          closeButton={false}
          className="custom-popup"
        >
          <div className="text-center">
            <h3 className="font-bold text-green-800 text-lg">Raíces de Posadas</h3>
            <p className="text-gray-600 text-sm">Institución Educativa</p>
            <p className="text-gray-600 text-sm">Av. Ejemplo 123, Posadas</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
})

MapComponent.displayName = 'MapComponent'

export default MapComponent
