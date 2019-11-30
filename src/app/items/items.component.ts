import { Component, OnInit, Inject, Output, Input, Pipe, PipeTransform, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';


import { ItemService } from '../item.service';
import { Item } from './../item';
 import { EdititemComponent } from './../edititem/edititem.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

   items: Item[];
 page = 1; 
 
 
  constructor(
    public dialog: MatDialog,
    private myData: ItemService,
  ) {}
  

  ngOnInit(): void {
    //TODO FIND THE WAY TO REFACTOR THIS CODE
    this.myData.getItems()
      .subscribe(
        (data: Item[]) =>  this.items = data,
        (error: any)   => console.log(error),
        ()             => console.log('all data gets')
      );
  }

  //delete a todo
  deleteItem(id){
	   if (window.confirm('Are you sure, you want to delete this item?')){
    this.myData.deleteTodo(id)
      .subscribe(
        (res: any) => location.reload(),
        (error: any) => console.log(error)
	   )}
  }

   
  
  
  //open the edit dialog
  openEditDialog(id): void {
    this.myData.getItem(id)
        .subscribe( 
          (resp: Item) => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.width = '500px';
            dialogConfig.data = resp;
            const dialogRef = this.dialog.open(EdititemComponent, dialogConfig);

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
          },
          (error: any) => console.log(error),
          ()=> console.log('complete')
        );
  }
}


@Pipe({
    name: "arrayFilter"
})

export class FilterPipe implements PipeTransform {
   transform(value: any[],searchString:string ){

       if(!searchString){
         console.log('no search')
         return value  
       }

       return value.filter(it=>{   
           const id = it.id.toString().includes(searchString) 
           const itemname = it.itemname.toLowerCase().includes(searchString.toLowerCase())
           const whentobuy = it.whentobuy.toLowerCase().includes(searchString.toLowerCase())
		   
           console.log( id + itemname + whentobuy );
           return (id + itemname + whentobuy );      
       }) 
    }
}


