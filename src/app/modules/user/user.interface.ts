// creating an Interface
// interface er belai type gula hobe sob somoy choto hater. ex: (id: string)
// Schema er belai type hobe sob somoy boro hater. ex: (id: {type: String}) 

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string
    };
    dateOfBirth?: string;
    gander: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}
