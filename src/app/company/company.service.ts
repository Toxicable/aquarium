import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from "../models/company";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CompanyService{

    constructor(
        private http: HttpClient
    ){
        
    }

    getAll(){
        return this.http.get<Company[]>('assets/companies.json');
    }

    searchByCompanyName(term: string){
        return this.getAll().map(companies => {
            return companies.filter(c => c.Company.includes(term))
        });
    }

    searchCompanies(search: string){
        let keyWords: string[] = search.split(" ");
        let keyWord: string = "";

        /*
        let hits = {};
        for(let i = 0; i < keyWords.length; i++) {
            hits[keyWords[i]] = 0;
        }*/

        // count hits

        /*
        allCompanies.forEach(company => {
            for(let i = 0; i < keyWords.length; i++){
                if(company.indexOf(keyWords[i]) >= 0){
                    
                }
            }
            
        })
        */

        return this.getAll().map(companies => {
            return companies.filter(c => {
                for(let i = 0; i < keyWords.length; i++){
                    if(c.Company.includes(keyWords[i])){
                        return true;
                    }
                }
                return false;
            });
        });
    }
}