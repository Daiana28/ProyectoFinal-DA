import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',

})

export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName', 
    'lastName', 
    'email',
    'role',
    'createdAt',
    'actions',
  ];


  users: IUser[] = [
    {
      id: 1,
      firstName: 'Fernando',
      lastName: 'Jimenez',
      email: 'ferve91@gmail.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },

    {
      id: 2,
      firstName: 'Julieta',
      lastName: 'Sbarra',
      email: 'ju.sbarra@gmail.com',
      role: 'USER',
      createdAt: new Date(),
    },
  ];

  
  constructor(private matdialog: MatDialog) { }

  openDialog(editingUser?: IUser) : void {
    this.matdialog
    .open(UserDialogComponent, {
      data: editingUser,
    }


    )
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (result) 
          { 
// Actualizar usuario en el array
            if (editingUser){
              this.users = this.users.map((u)  => u.id === editingUser.id ? { ...u, ...result}: u
            );

            } else{
// Logica de crear el usuario
            result.id = new Date().getTime().toString().substring(0,1);
            result.createdAt = new Date();
            this.users = [...this.users, result];
      }
      }
    },
    });
}


  ondeleteUser(id:number): void{
    if (confirm ('¿Estás seguro de eliminar este ítem?')) {
      this.users = this.users.filter((u) => u.id != id);
  }

}

}


