export class FeedbackDTO {

    feedbackId:number;
    patientName:string;
    hospitalName:string;
    doctorName:string;
    rating:number;
    feedback:string;


    constructor(
        feedbackId:number,
        patientName:string,
        hospitalName:string,
        doctorName:string,
        rating:number,
        feedback:string
    ){
        this.feedbackId=feedbackId;
        this.patientName=patientName;
        this.hospitalName=hospitalName;
        this.doctorName=doctorName;
        this.rating=rating;
        this.feedback=feedback;
    }

}
