import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { IUser } from '../../models';
import { SharedModule } from '../../../../../../shared/shared.module';
import { ValidationsErrorsPipe } from '../../../../../../shared/pipe/Validations-errors.pipe';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})

export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
     private formBuilder: FormBuilder, 
     private MatDialogRef: MatDialogRef<UserDialogComponent>,
     @Inject(MAT_DIALOG_DATA) private editingUser?: IUser
  
    )
      {
      this.userForm = this.formBuilder.group({
        firstName: ['',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
        ],

        lastName: ['',
          [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
        ],

        email: ['',
          [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')],
        ],

        role: ['USER',[Validators.required]],

       });

       if (editingUser) {
        this.userForm.patchValue(editingUser);
       }
    }

    get FirstNameControl(){
      return this.userForm.get ('firstName'); 
    }

    get LastNameControl(){
      return this.userForm.get ('lastName');  
    }

    get EmailControl(){
      return this.userForm.get ('Email');  
    }

    onSave(): void {
      if(this.userForm.invalid){
        this.userForm.markAllAsTouched();
    } else{
      this.MatDialogRef.close(this.userForm.value);

    }
  }

}

