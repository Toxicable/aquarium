import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from "../models/company";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of'
@Injectable()
export class CompanyService{

    private companies$: Observable<Company[]>;
    constructor(
        private http: HttpClient
    ){
        this.companies$ = this.http.get<Company[]>('assets/companies.json').share();
    }

    getAll(){
        return this.companies$;
    }
    getCompanyNames(){
        return this.companies$.map(companies => companies.map(c => c.Company));
    }

    searchByCompanyName(term: string, take: number){
        return this.companies$.map(company => {
            return company.filter(c => c.Company.includes(term)).slice(0, take)
        });
    }

    searchCompanies(search: string){

        if(search == ''){
            return Observable.of([]);
        }

        search = search.toLowerCase();
        let keyWords: string[] = search.split(" ");
        let keyWord: string = "";

        let allCompanies = this.getAll();

        return allCompanies.map(companies => {

            type sortingCompany = Company & {hits: number};

            companies.forEach((company: sortingCompany)  => {
                company.hits = 0;
                let companyName = company.Company.toLowerCase();
                for(let i = 0; i < keyWords.length; i++){
                    if(companyName.includes(keyWords[i])){
                        company.hits ++;
                    }
                }
            });
            
            return companies.filter((company: sortingCompany) => {
                return company.hits > 0;
            }).sort((a: sortingCompany, b: sortingCompany) => b.hits - a.hits);

        });

/*
        return this.getAll().map(companies => {
            return companies.filter(c => {
                for(let i = 0; i < keyWords.length; i++){
                    if(c.Company.toLowerCase().includes(keyWords[i].toLowerCase())){
                        return true;
                    }
                }
                return false;
            }).slice(0,10);
        });
        */
    }
}
