import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {MdDialogRef} from '@angular/material';
import { vehicleItem } from 'app/model/vehicle/vehicle.model';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<ViewMoreComponent>, @Inject(MD_DIALOG_DATA) public vehicle_Item: vehicleItem) { 
    console.log(vehicle_Item);

  }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
