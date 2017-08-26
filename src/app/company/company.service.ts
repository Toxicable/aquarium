import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from "../models/company";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
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

    searchByCompanyName(term: string, take: number){
        return this.companies$.map(company => {
            return company.filter(c => c.Company.includes(term)).slice(0, take)
        });
    }
}