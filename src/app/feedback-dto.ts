export class FeedbackDTO {

    feedbackId:number;
    doctorName:String;
    rating:number;
    feedbackComment:String;

    constructor(feedbackId:number,
        doctorName:String,
        rating:number,
        feedbackComment:String)
        {
            this.feedbackId=feedbackId;
            this.doctorName=doctorName;
            this.rating=rating;
            this.feedbackComment=feedbackComment;
        }
}
