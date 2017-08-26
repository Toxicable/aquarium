export interface Review{
    $key: string;
    companyName: string;
    location: string;
    salary: number; // will point to a salary range which we can define in the UI
    /* maybe 
    0   -   < $40k      
    1   -   $40k - $60k
    2   -   $60k - $80k
    3   -   $80k - $100k
    4   -   $100k - $125k
    5   -   $125k - $150k
    6   -   > $150k
    */
    
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