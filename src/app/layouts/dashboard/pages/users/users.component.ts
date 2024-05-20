import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName', 
    'lastName', 
    'email',
    'role',
    'createdAt',
    'actions',
  ];

  users: IUser[] = [];
  error: string = '';

  constructor(private matDialog: MatDialog, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => this.error = err
    });
  }

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            // Actualizar usuario en el array
            if (editingUser) {
              this.users = this.users.map((u) => u.id === editingUser.id ? { ...u, ...result } : u);
            } else {
              // Lógica de crear el usuario
              result.id = new Date().getTime().toString().substring(0, 1);
              result.createdAt = new Date();
              this.users = [...this.users, result];
            }
          }
        }
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('¿Estás seguro de eliminar este ítem?')) {
      this.users = this.users.filter((u) => u.id !== id);
    }
  }
}



