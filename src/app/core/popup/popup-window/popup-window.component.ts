import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {MdDialogRef} from '@angular/material';
import { PopupModel } from 'app/model/popup/popup.model';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<PopupWindowComponent>, @Inject(MD_DIALOG_DATA) public data: PopupModel) {
      console.log(data);
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
