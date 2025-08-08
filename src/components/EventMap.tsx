import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  address: string;
  coordinates: [number, number];
  description: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "Tan Fle-sto Winter Market",
    date: "2024-12-15",
    location: "Phoenix MarketCity",
    address: "LBS Marg, Kurla, Mumbai",
    coordinates: [72.8777, 19.0760],
    description: "A curated winter market featuring 50+ women entrepreneurs"
  },
  {
    id: 2,
    name: "Holiday Artisan Fair",
    date: "2024-12-22",
    location: "Palladium Mall",
    address: "High Street Phoenix, Lower Parel, Mumbai",
    coordinates: [72.8311, 19.0176],
    description: "Special holiday edition with festive collections"
  },
  {
    id: 3,
    name: "New Year Creative Bazaar",
    date: "2025-01-05",
    location: "R City Mall",
    address: "Amrut Nagar, Ghatkopar West, Mumbai",
    coordinates: [72.9081, 19.0896],
    description: "Start the year with unique handcrafted finds"
  }
];

const EventMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [72.8777, 19.0760], // Mumbai center
      zoom: 11
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for each event
    upcomingEvents.forEach((event) => {
      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer flex items-center justify-center';
      markerElement.innerHTML = '<i class="fas fa-store text-white text-sm"></i>';
      
      // Add marker to map
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat(event.coordinates)
        .addTo(map.current!);

      // Add click event to marker
      markerElement.addEventListener('click', () => {
        setSelectedEvent(event);
        map.current?.flyTo({
          center: event.coordinates,
          zoom: 14,
          duration: 1000
        });
      });

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2 font-montserrat">
            <h3 class="font-bold text-sm mb-1">${event.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${event.date}</p>
            <p class="text-xs">${event.location}</p>
          </div>
        `);

      marker.setPopup(popup);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <Card className="p-6">
        <CardContent className="text-center space-y-4">
          <h3 className="font-bold font-montserrat text-lg">View Event Locations</h3>
          <p className="text-foreground/80 font-montserrat text-sm">
            To display the interactive map, please enter your Mapbox public token.
            You can get one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter your Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground font-montserrat"
            />
            <p className="text-xs text-muted-foreground">
              Note: For production, add this token to your Supabase Edge Function Secrets
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Map */}
      <div className="relative h-96 rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>

      {/* Event Details */}
      {selectedEvent && (
        <Card className="p-6">
          <CardContent className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold font-montserrat text-xl">{selectedEvent.name}</h3>
                <p className="text-primary font-montserrat">{selectedEvent.date}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedEvent(null)}
              >
                <i className="fas fa-times"></i>
              </Button>
            </div>
            <div>
              <p className="font-medium font-montserrat mb-1">{selectedEvent.location}</p>
              <p className="text-muted-foreground font-montserrat text-sm">{selectedEvent.address}</p>
            </div>
            <p className="text-foreground font-montserrat">{selectedEvent.description}</p>
            <Button variant="cta" className="w-full">
              Get Directions
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {upcomingEvents.map((event) => (
          <Card 
            key={event.id} 
            className={`cursor-pointer transition-all hover:shadow-[var(--shadow-card)] ${
              selectedEvent?.id === event.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => {
              setSelectedEvent(event);
              if (map.current) {
                map.current.flyTo({
                  center: event.coordinates,
                  zoom: 14,
                  duration: 1000
                });
              }
            }}
          >
            <CardContent className="p-4">
              <h4 className="font-bold font-montserrat mb-2">{event.name}</h4>
              <p className="text-primary font-montserrat text-sm mb-1">{event.date}</p>
              <p className="text-muted-foreground font-montserrat text-sm mb-2">{event.location}</p>
              <p className="text-foreground font-montserrat text-xs">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventMap;