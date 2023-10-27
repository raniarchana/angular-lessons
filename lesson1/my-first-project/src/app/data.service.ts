import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private url = "http://localhost:3000"
private category:string = ''
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe({
      next: (params) => {this.category= params['categories']} 
    
    }

    )
  }

getProducts():Observable<any[]>{
  console.log("category came from component", this.category)
 const params =  new HttpParams().set('category', this.category)
  return this.http.get<any[]>(`${this.url}/products`,{'params':params})
}




getData(){
  return "data"
}

}
