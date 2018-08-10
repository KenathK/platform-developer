import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entities/user";




@Injectable()
export class AuthService {

    constructor(private http:HttpClient) {

    }

    login(email:string, password:string): Observable<any> {
        return this.http.post<any>('/api/auth/login', {email,password});
    }

}
