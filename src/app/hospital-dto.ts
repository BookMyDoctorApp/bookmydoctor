export class HospitalDto {
    hospitalId:number;
    hospitalName:string;
    imageName:string;

    constructor(hospitalId:number,hospitalName:string,imageName:string){
        this.hospitalId=hospitalId;
        this.hospitalName=hospitalName;
        this.imageName=imageName;
    }
}
