import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css',],
})
export class ContactsComponent implements OnInit 
{
  private map!: Leaflet.Map;
  private center: Leaflet.LatLng = Leaflet.latLng(43.90135, 12.857064);
  
  private pesaroMarker!: Leaflet.Marker;
  private bolognaMarker!: Leaflet.Marker;
  private romaMarker!: Leaflet.Marker;

  ngOnInit(): void 
  {
    this.initMap();
  }

  private initMap(): void 
  {
    this.map = Leaflet.map('map', 
    {
      center: this.center,
      zoom: 6
    });

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      minZoom: 2,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    //sede di pesaro
    const icon = Leaflet.icon
    (
      {
        iconUrl: 'marker.svg',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      }
    );

    this.bolognaMarker = Leaflet.marker([44.49415, 11.344162], {icon: icon});
    this.bolognaMarker.addTo(this.map).bindPopup('<a href="https://goo.gl/maps/S9YHh4Nu77sB7s257">Via degli Orefici, 2 (BO)</a>');

    this.pesaroMarker = Leaflet.marker([43.90135, 12.857064], {icon: icon});
    this.pesaroMarker.addTo(this.map).bindPopup(`<a href="https://goo.gl/maps/yFpg6GXjcB1NEJie6">Sede principale - Via degli Olmi, 16/4 (PU)</a>`).openPopup();

    this.romaMarker = Leaflet.marker([41.830499, 12.487075], {icon: icon});
    this.romaMarker.addTo(this.map).bindPopup('<a href="https://goo.gl/maps/x9Fxk9H5osAzrSz77">Via del Serafico 89/91 (RM)</a>')
  }
}