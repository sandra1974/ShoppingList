import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ItemService } from '../item.service';
import { Item } from './../item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

   constructor(
    public dialogRef: MatDialogRef<AdditemComponent>,
    private myData: ItemService
  ){}

  items = [];

    ngOnInit() {
        this.myData.getItems()
        .subscribe(
          (data: Item[]) =>  this.items = data,
          (error: any)   => console.log(error),
          ()             => console.log('all items gets')
        );
    }

    onCancel(): void {
      this.dialogRef.close();
    }
    
    onSave(formData: any){
      let newItem: any = { itemname: formData.itemname, whentobuy: formData.whentobuy };
      this.myData.addItem(newItem)
        .subscribe(
          (data: Item) => location.reload(),
          (error) => console.log(error)
        );
      this.dialogRef.close();
    }

}
