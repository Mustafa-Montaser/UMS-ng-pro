import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { UserData } from '../interfaces/user-data';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private _HttpClient: HttpClient) { }

    // userData: UserData | null = {} as UserData;
    
    retriveUserData(): UserData | null {
        let _userData: UserData| null = null;
        const token = localStorage.getItem('umsToken');
        if (token) {
            _userData = jwtDecode(token);
        }
        return _userData;
    }

    getUsersList(): Observable<any> {
        return this._HttpClient.get('https://dummyjson.com/users');
    }

    getUserProfileData(): Observable<any> {
        return this._HttpClient.get("https://dummyjson.com/user/me", {
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("umsToken")}` 
            }
        });
    }
}
