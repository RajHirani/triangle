import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PopupWindowComponent } from 'app/core/popup/popup-window/popup-window.component';
import { MdDialog } from '@angular/material';
import { vehicleItem } from 'app/model/vehicle/vehicle.model';
import { PopupModel } from 'app/model/popup/popup.model';
import { ViewMoreComponent } from 'app/core/popup/view-more/view-more.component';

@Component({
  selector: 'vehicle-item',
  templateUrl: './vehicle-info-item.component.html',
  styleUrls: ['./vehicle-info-item.component.css']
})
export class VehicleInfoItemComponent implements OnInit, OnChanges{

  @Input("vehicleItem") vehicle_Item : vehicleItem;
  gaugeType = "arch";
  gaugeValue;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  thickValue = 10;
  capValue = "round";
  coloeValue = "#666";
  minValue = 0;
  maxValue = 200;
  sizeValue = 150;
  acStatus = false;
  ignitionStatus = false;
  vehicleName = "";
  vehicleFuel = 50;
  dialogResult = "";

  constructor(public dialog : MdDialog) { }

  ngOnChanges(){
    this.gaugeValue = this.vehicle_Item.vehicleSpeed;
    this.acStatus = this.vehicle_Item.acStatus;
    this.ignitionStatus = this.vehicle_Item.ingnitionStatus;
    this.vehicleName = this.vehicle_Item.vehicleName;
    this.vehicleFuel = this.vehicle_Item.vehicleFuel;
  }


  ngOnInit() {
  }


  openDialog() {
    let dialogRef = this.dialog.open(PopupWindowComponent, {
      width: '500px',
      data: new PopupModel("success","ABC","hello")
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
  
  openViewMoreDialog() {
    let dialogRef = this.dialog.open(ViewMoreComponent, {
      width: '800px',
      data: this.vehicle_Item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
}
