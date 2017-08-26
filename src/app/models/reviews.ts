export interface Review{
    $key: string;
    location: string;
    salary: number; // will point to a salary range which we can define in the UI
    allowances: string;
    allowancesRating: number;
    careerDev: string;
    careerDevRating: number;
    dressCode: string;
    dressCodeRating: number;
    diversity: string;
    diversityRating: number;
    CompStruct: string;
    CompStructRating: number;

}