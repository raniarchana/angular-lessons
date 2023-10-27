import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent  {
constructor(private obj:DataService, private route: ActivatedRoute ){}

private category:string = ''

data:string=''

ngOnInit(){
  //  this.route.queryParams.subscribe({
  //   next: (data)=>{this.category = data["categories"] }
  //  })

  this.obj.getProducts().subscribe({
    next: (data) =>{console.log(data)},
    error: (err) => {console.log(err)},
    complete: () =>{console.log('complete')}
    
  });

}




addItem(){
 this.data = this.obj.getData()
 console.log(this.data)
}

}
