import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AdditemComponent } from './additem/additem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  title = 'Shopping List App';

  openDialog(): void {
    const dialogRef = this.dialog.open(AdditemComponent, 
      {
        width: '500px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}