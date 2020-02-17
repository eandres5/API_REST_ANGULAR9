import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { Turista } from '../models/turista';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReserService {

  API_URI = 'http://localhost:3000/api'
  ;
  constructor(private http: HttpClient) { }

  getReser(){
    return this.http.get(`${this.API_URI}/turistas`);
  }

  getReserOne(id: string){
    return this.http.get(`${this.API_URI}/turistas/${id}`);
  }

  saveReser(turista: Turista){
    return this.http.post(`${this.API_URI}/turistas`,turista);
  }

  deleteReser(id: string){
    return this.http.delete(`${this.API_URI}/turistas/${id}`);
  }

  updateReser(id: string | number,updateReser: Turista): Observable<Turista>{
    return this.http.put(`${this.API_URI}/turistas/${id}`,this.updateReser);
  }

}
