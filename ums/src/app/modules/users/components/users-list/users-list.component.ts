import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    constructor(private _UsersService: UsersService) { }
    
    ngOnInit(): void {
        this._UsersService.getUsersList().subscribe({
            next: (res) => {
                console.log(res);
            }
        });
    }
}
