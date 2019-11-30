import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

 base_url: string = 'http://localhost:3000';
  items = [];
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    console.log('getting all items from the server');
    return this.http.get<Item[]>(`${this.base_url}/items`);
  }

  getItem(id): Observable<Item>{
    return this.http.get<Item>(`${this.base_url}/items/`+ id);
  }

  addItem(newItem:Item): Observable<Item>{
    return this.http.post<Item>(`${this.base_url}/items`, newItem, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  updateItem(editedItem:Item): Observable<Item>{
    return this.http.put<Item>(`${this.base_url}/items/${editedItem.id}`, editedItem, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteTodo(id): Observable<Item>{
    return this.http.delete<Item>(`${this.base_url}/items/`+ id);
  }
}