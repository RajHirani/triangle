export class PopupModel{
    //success, error, warning
    popupStatus : string;
    popupHeader : string;
    popupMessage : string;

    constructor(popupStatus : string, popupHeader : string, popupMessage : string){
        this.popupHeader = popupHeader;
        this.popupMessage = popupMessage;
        this.popupStatus = popupStatus;
    }
}