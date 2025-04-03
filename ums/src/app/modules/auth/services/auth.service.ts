import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFormData } from '../../../interfaces/user-form-data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _HttpClient: HttpClient) { }

    onLogin(data: UserFormData): Observable<any> {
        return this._HttpClient.post('https://dummyjson.com/auth/login', data);
    }   
} 
