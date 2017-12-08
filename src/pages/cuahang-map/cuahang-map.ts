import { Component } from '@angular/core';
import { IonicPage /* ,NavController *//* , NavParams */ } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  //CameraPosition,
  //MarkerOptions,
  //Marker
 } from '@ionic-native/google-maps';
import { Cuahang } from '../../interfaces/cuahang';
import { Province } from '../../interfaces/province';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
  selector: 'page-cuahang-map',
  templateUrl: 'cuahang-map.html',
})
export class CuahangMapPage {
  
  mapElement: HTMLElement;
  map: GoogleMap;
  public cuahangs: Cuahang[]= [];
  public province: Province;


  constructor(
    private googleMaps: GoogleMaps,
    private navParams: NavParams
  ) { }

  ionViewDidLoad() {
    let data: {
      province: Province,
      cuahangs:Cuahang
    } = this.navParams.get("mapData");
    if(data){
      this.province = this.province;
      this.cuahangs = this.cuahangs;
    }    
    this.loadMap();
  }
  
  loadMap() {
    this.mapElement = document.getElementById('map_canvas');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);   

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      //Map sẵn sàng
      this.createCuahang(this.cuahangs);
      
    });
  }
  
  createCuahang(cuahangs:Cuahang[]){   

    cuahangs.forEach(cuahang=>{
      this.map.addMarker({
        title: cuahang.name,
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: cuahang.lat,
          lng: cuahang.lng
        }
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            alert('clicked');
          });
      });
    }) 

  }


}
