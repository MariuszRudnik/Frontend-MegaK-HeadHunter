// import {StudentCVResponse} from 'types';
export enum ExpectedTypeWork {
    AT_LOCATION = 'atLocation',
    CHANGE_OF_LOCATION = 'changeoflocation',
    MANUAL = 'manual',
    IRRELEVANT = 'irrelevant',
    NO_MATTER = 'no matter'
}

export enum ExpectedContractType {
    UoP = 'UoP',
    B2B = 'B2B',
    UZ_UoD = 'UZ/UoD',
    IRRELEVANT = 'irrelevant',
}

export interface StudentCVResponse {
    bio: string;
    bonusProjectUrls: string[];
    canTakeApprenticeship: boolean;
    courseCompletion: number;
    courseEngagment: number;
    courses: string;
    education: string | null;
    email: string;
    expectedContractType: ExpectedContractType;
    expectedSalary: string | null;
    expectedTypeWork: ExpectedTypeWork;
    firstName: string;
    githubUsername: string;
    hr: "string" | null;
    id: string;
    lastName: string;
    monthsOfCommercialExp: number;
    portfolioUrls: string[] | null;
    projectDegree: number;
    projectUrls: string[];
    targetWorkCity: string;
    teamProjectDegree: number;
    tel: string;
    workExperience: string;
}

export const getOneStudentData = async (id: string): Promise<StudentCVResponse> => {
    const res = await fetch(`http://localhost:3001/student/getone/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    return data.message;
}
