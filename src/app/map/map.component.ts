import { Component, OnInit } from '@angular/core';
import { icon,latLng,  marker, point, polyline, tileLayer, circleMarker, LeafletMouseEvent } from 'leaflet';
import { MapService } from './map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers:[MapService]
})

export class MapComponent implements OnInit{
constructor(private mapService: MapService){
}
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'
  });

  Esri_WorldStreetMap = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    detectRetina: true,
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

    sensordata:Array<any>=[];
    points=new Array();
  /*summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });*/

  /*stations = [ circleMarker([32.897480,  -97.040443],{
    radius:10,
    fillColor: '#c2f442',
    fillOpacity: 0.7,
    color:'#bbbbbb',
    opacity:0.7
  }).on('click',e => {
    alert((e as LeafletMouseEvent).latlng)}),

  circleMarker([32.697480,  -97.340443],{
    radius:10,
    fillColor: '#4253f4',
    fillOpacity: 0.7,
    color:'#bbbbbb',
    opacity:0.7
  }).bindPopup("I am a popup.").openPopup()
]*/


/*function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}*/
 /* paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });*/


  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps,
      'ESRI Maps': this.Esri_WorldStreetMap
    }
  };

  options = {
    layers: this.streetMaps,
    zoom: 10,
    center: latLng([ 32.897480,  -97.040443 ])
  };

  //onMapReady(map: Map) {
    /*map.fitBounds(this.paradise.getBounds(), {
      padding: point(24, 24),
      maxZoom: 12,
      animate: true
    });*/
 // }

 color(p) {
  if(p>=30)    {return '#ff0000'} 
  if(p>=29.5) {return '#ff0f00'} 
  if(p>=29)    {return '#ff1f00'} 
  if(p>=28.5) {return '#ff2e00'} 
  if(p>=28)    {return '#ff3d00'} 
  if(p>=27.5) {return '#ff4700'} 
  if(p>=27)    {return '#ff5200'} 

  if(p>=26.5) {return '#ff5c00'} 
  if(p>=26) {return '#ff6600'} 
  if(p>=25.5) {return '#ff7000'} 
  if(p>=25) {return '#ff7a00'} 
  if(p>=24.5) {return '#ff8500'} 
  if(p>=24) {return '#ff8f00'} 
  if(p>=23.5) {return '#ff9900'} 


  if(p>=23) {return '#ffa300'} 
  if(p>=22.5) {return '#ffad00'} 
  if(p>=22) {return '#ffb800'} 
  if(p>=21.5) {return '#ffc200'} 
  if(p>=21) {return '#ffcc00'} 
  if(p>=20.5) {return '#ffd600'} 
  if(p>=20) {return '#ffe000'} 


  if(p>=19.5) {return '#fff200'} 
  if(p>=19) {return '#faff00'} 
  if(p>=18.5) {return '#e8ff00'} 
  if(p>=18) {return '#c4ff00'} 
  if(p>=17.5) {return '#b3ff00'} 
  if(p>=17) {return '#9cff00'} 
  if(p>=16.5) {return '#8aff00'} 

  if(p>=16) {return '#78ff00'} 
  if(p>=15.5) {return '#66ff00'} 
  if(p>=15) {return '#4fff00'} 
  if(p>=14.5) {return '#3dff00'} 
  if(p>=14) {return '#2bff00'} 
  if(p>=13.5) {return '#1aff00'} 
  if(p>=13) {return '#00ff00'} 


  if(p>=12.5) {return '#00ff1c'} 
  if(p>=12) {return '#00ff2e'} 
  if(p>=11.5) {return '#00ff40'} 
  if(p>=11) {return '#00ff52'} 
  if(p>=10.5) {return '#00ff63'} 
  if(p>=10) {return '#00ff87'} 
  if(p>=9.5) {return '#00ffab'} 

  if(p>=9) {return '#00ffab'} 
  if(p>=8.5) {return '#00ffbd'} 
  if(p>=8) {return '#00ffcf'} 
  if(p>=7.5) {return '#00ffe0'} 
  if(p>=7) {return '#00fff2'} 
  if(p>=6.5) {return '#00faff'} 
  if(p>=6) {return '#00e8ff'} 

  if(p>=5.5) {return '#00c4ff'} 
  if(p>=5) {return '#00b3ff'} 
  if(p>=4.5) {return '#00a1ff'} 
  if(p>=4) {return '#008fff'} 
  if(p>=3.5) {return '#007dff'} 
  if(p>=3) {return '#006bff'} 
  if(p>=2.5) {return '#0059ff'} 

  if(p>=2) {return '#0047ff'} 
  if(p>=1.5) {return '#0036ff'} 
  if(p>=1) {return '#0024ff'} 
  if(p>=0.5) {return '#0012ff'} 
  if(p<0.5) {return '#ffffff'} 


}
ngOnInit():void{
  this.mapService.getData().subscribe(
    sensordata=>{
      this.sensordata = sensordata;
      for (let entry of sensordata.post){
        console.log(entry);
       this.points.push( circleMarker([entry.coordinates.latitude, entry.coordinates.longitude],{
          radius:7,
          fillColor: this.color(entry.value),
          fillOpacity: 0.7,
          color:'#4f4d54',
          opacity:0.5
        }).bindPopup("The city of "+entry.city + "  "+ entry.parameter +"  "+ entry.value + " µg/m3" +" " + entry.date.utc).openPopup()
        /*.on('click',e => {
          alert("The city of "+entry.city" "+ entry.parameter ++ "entry.value"}*/
          );
      }
    }
  );

 

  
}


}
