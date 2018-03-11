export class vehicleItem{

    public vehicleName : string;
    public vehicleSpeed : string;
    public acStatus : boolean;
    public ingnitionStatus : boolean;
    public vehicleFuel : number;
    public vehicleRunning : string;
    public vehicleRunningDuration : string;
    public stopDuration : string;
    public lastAddress : string;

    constructor(
         vehicleName : string, vehicleSpeed : string, acStatus : boolean,
         ingnitionStatus : boolean,vehicleFuel : number,
         vehicleRunning : string, vehicleRunningDuration : string,
         stopDuration : string, lastAddress : string){

        this.vehicleName = vehicleName;
        this.vehicleSpeed = vehicleSpeed;
        this.acStatus = acStatus;
        this.ingnitionStatus = ingnitionStatus;
        this.vehicleFuel = vehicleFuel;
        this.vehicleRunning =vehicleRunning;
        this.vehicleRunningDuration = vehicleRunningDuration;
        this.stopDuration = stopDuration;
        this.lastAddress = lastAddress;
    }
}