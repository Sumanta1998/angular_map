import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { DemoService } from "./app.service";

declare var MapmyIndia: any;
declare var L: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "DemoApp";
  public map: any;
  public layer: any;
  public marker: any[];
  public icon: any;

  public full_path: string =
    "http://www.mapmyindia.com/api/advanced-maps/doc/sample";

  constructor(private demoService: DemoService) {}
  // private token: string;

  ngOnInit(): void {
    this.map = new MapmyIndia.Map("map", {
      center: [28.04, 78.2],
      zoom: 12,
    });
  }

  add_marker() {
    // this.remove_marker();
    this.layer = L.marker([28.04, 78.2]).addTo(this.map);
  }

  remove_marker() {
    this.map.removeLayer(this.layer);
  }

  add_custom_marker() {
    // this.remove_marker();
    var icon = L.icon({
      iconUrl: this.full_path + "/images/MarkerIcon.png",
      iconRetinaUrl: this.full_path + "/images/MarkerIcon.png",
      iconSize: [30, 30],
      popupAnchor: [-3, -15],
    });
    this.layer = L.marker([28.04, 78.2], {
      icon: icon,
      draggable: true,
      title: "Custom marker",
    }).addTo(this.map);
  }
  add_arrow_marker() {
    var icon = L.icon({
      iconUrl: this.full_path + "/images/arrow.png",
      iconRetinaUrl: this.full_path + "/images/MarkerIcon.png",
      iconSize: [30, 30],
      popupAnchor: [-3, -15],
    });
    this.layer = L.marker([28.04, 78.2], {
      icon: icon,
      draggable: false,
      title: "Custom marker",
    }).addTo(this.map);
  }

  add_text_marker() {
    var icon = L.divIcon({
      className: "my-div-icon",
      html:
        "<img class='map_marker' src=" +
        "'https://maps.mapmyindia.com/images/2.png'>" +
        '<span class="my-div-span">' +
        "M" +
        "</span>",
      iconSize: [10, 10],
      popupAnchor: [5, -15],
    });
    this.layer = L.marker([28.04, 78.2], {
      icon: icon,
      draggable: false,
      title: "Text marker",
    }).addTo(this.map);
  }
  zoom_in() {
    this.map.zoomIn();
  }
  zoom_out() {
    this.map.zoomOut();
  }
  zoom_level() {
    this.map.setZoom(16);
    // this.map.getZoom() // return a number between 1-16
  }
  moov_to_center() {
    var pt = new L.LatLng(28.549948, 77.268241); /*WGS location object*/
    this.map.setView(pt);
  }
  info_window() {
    var pt4 = new L.latLng(28.551738, 77.270164); /*WGS location object*/
    var mk4 = new L.Marker(pt4, {
      draggable: true,
      title: "title",
    }).addTo(this.map);
    mk4.bindPopup("<div class='info-div'>This is info window demo.<div>");
    mk4.openPopup();

    // this.map.addLayer(mk)
    // mk4 = addMarker(pt4, '', "Marker4").addTo(map);
  }
}
