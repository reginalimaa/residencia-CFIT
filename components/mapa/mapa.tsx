'use client'

import React, { useEffect } from 'react';
import L, { LatLngTuple } from 'leaflet';

const Mapa: React.FC = () => {
  useEffect(() => {
    const coordenadasCristoRedentor: LatLngTuple = [-22.9519, -43.2105];

    // Verifica se o mapa já foi inicializado antes de criá-lo
    if (!L.DomUtil.get('map')) {
      const mapa = L.map('map').setView(coordenadasCristoRedentor, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapa);

      L.marker(coordenadasCristoRedentor).addTo(mapa);
    }
  }, []);

  return (
    <div id="map" style={{ height: '300px' }}></div>
  );
}

export default Mapa;
