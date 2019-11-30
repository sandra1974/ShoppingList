import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { EdititemComponent } from './edititem/edititem.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemService } from './item.service';
import { from } from 'rxjs';
import {FilterPipe} from './items/items.component';
import { NgxPaginationModule } from 'ngx-pagination';  


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemsComponent,
    EdititemComponent,
    AdditemComponent,
	FilterPipe
	
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
	  MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
	HttpClientModule,
	 MatMenuModule
  ],
   entryComponents: [AdditemComponent, EdititemComponent],
  providers: [ItemService],
    bootstrap: [AppComponent]
})
export class AppModule { }
