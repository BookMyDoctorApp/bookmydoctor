export class Hospital {
    
    hospitalId:number;
    hospitalName:string;
    hospitalCity:string;
    hospitalState:string;
    speciality:string;
    imageName:string;
    fees:number;
    discount:number;
    about:string;

    constructor(hospitalId:number,hospitalName:string,hospitalCity:string,hospitalState:string,
        speciality:string,imageName:string,fees:number,discount:number,about:string){

            this.hospitalId=hospitalId;
            this.hospitalName=hospitalName;
            this.hospitalCity=hospitalCity;
            this.hospitalState=hospitalState;
            this.speciality=speciality;
            this.imageName=imageName;
            this.fees=fees;
            this.discount=discount;
            this.about=about
        }

}
