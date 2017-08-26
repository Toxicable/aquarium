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

    searchByCompanyName(term: string, take: number){
        return this.getAll().map(company => {
            return company.filter(c => c.Company.includes(term)).slice(0, take)
        });
    }
}