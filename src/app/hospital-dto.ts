export class HospitalDTO {

    hospitalId:number;
    hospitalName:string;
    city:string;
    state:string;

    address:string;
    hospitalRating:number;
 

    constructor(hospitalId:number,hospitalName:string,city:string,state:string,
       address:string,hospitalRating:number)
        {

            this.hospitalId=hospitalId;
            this.hospitalName=hospitalName;
            this.city=city;
            this.state=state;
          
            this.address=address;
            this.hospitalRating=hospitalRating;
        

        }

}
