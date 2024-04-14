import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',

})

export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt'];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Fernando',
      lastName: 'Jimenez',
      email: 'ferve91@gmail.com',
      createdAt: new Date()
    },

    {
      id: 2,
      firstName: 'Julieta',
      lastName: 'Sbarra',
      email: 'ju.sbarra@gmail.com',
      createdAt: new Date()
    },
  ];

  constructor(private matdialog: MatDialog) { }

  openDialog() : void {
    this.matdialog
    .open(UserDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (result) { this.users = [...this.users, result];
       // console.log(result)
      }
    },
    });
}

}


