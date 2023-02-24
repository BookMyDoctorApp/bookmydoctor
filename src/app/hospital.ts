export class Hospital {

    hospitalId:number;
    hospitalName:string;
    city:string;
    state:string;
    address:string;
    hospitalRating:number;
    imageName:string;

    constructor(hospitalId:number,hospitalName:string,city:string,state:string,
       address:string,hospitalRating:number,imageName:string)
        {

            this.hospitalId=hospitalId;
            this.hospitalName=hospitalName;
            this.city=city;
            this.state=state;
            this.address=address;
            this.hospitalRating=hospitalRating;
            this.imageName=imageName

        }

}
