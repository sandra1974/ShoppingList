import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ItemService } from '../item.service';
import { Item } from './../item';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EdititemComponent>,
    @Inject(MAT_DIALOG_DATA) public passingData: Item,
    private myData: ItemService
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onUpdate(formData: any){
    let editedItem: any = { id: formData.id, itemname: formData.itemname, whentobuy: formData.whentobuy };
    this.myData.updateItem(editedItem)
      .subscribe(
        (data: Item) => location.reload(),
        (error) => console.log(error)
      );
    this.dialogRef.close();
  }

}