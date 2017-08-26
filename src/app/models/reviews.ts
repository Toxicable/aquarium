export interface Review{
    $key: string;
    location: string;
    salary: number; // will point to a salary range which we can define in the UI
    allowances: string;
    allowancesShort: string;
    allowancesRating: number;
    careerDev: string;
    careerDevShort: string;
    careerDevRating: number;
    dressCode: string;
    dressCodeShort: string;
    dressCodeRating: number;
    diversity: string;
    diversityShort: string;
    diversityRating: number;
    CompStruct: string;
    CompStructShort: string;
    CompStructRating: number;

}