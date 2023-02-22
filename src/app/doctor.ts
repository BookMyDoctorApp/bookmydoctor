export class Doctor {
    
    doctorId:number;
	doctorName:String;
	speciality:String;
	state:String;
	city:String ;
	email:String;
    fromDay:String;
    toDay:String;
    chargePerVisit:number;

    constructor(
        doctorId:number,
	    doctorName:String,
	    speciality:String,
	    state:String,
	    city:String ,
	    email:String,
        fromDay:String,
        toDay:String,
        chargePerVisit:number
    )
    
    {
        this.doctorId=doctorId;
        this.doctorName=doctorName;
        this.speciality=speciality;
        this.state=state;
        this.city=city;
        this.email=email;
        this.fromDay=fromDay;
        this.toDay=toDay;
        this.chargePerVisit=chargePerVisit;
    }
}
