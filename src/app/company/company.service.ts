import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CompanyService{

    constructor(
        private http: HttpClient
    ){
        this.http.get('assets/companies.json')
    }

}