export class AppointmentDTO {

    appointmentId:number;
    date:String;
    status:String;
	remark:String;

    constructor(appointmentId:number,
        date:String,
        status:String,
        remark:String)
        {
            this.appointmentId=appointmentId;
            this.date=date;
            this.status=status;
            this.remark=remark;
        }
}
