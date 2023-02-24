export class PatientDTO {

    patientId: number;
    patientName: string;
    patientCity: string;
    patientAge: number;
    patientGender: string;
    patientDisease: string;

    constructor(
        patientId: number,
        patientName: string,
        patientCity: string,
        patientAge: number,
        patientGender: string,
        patientDisease: string,
        
    ) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.patientCity = patientCity;
        this.patientAge = patientAge;
        this.patientGender = patientGender;
        this.patientDisease = patientDisease;
    }
}
