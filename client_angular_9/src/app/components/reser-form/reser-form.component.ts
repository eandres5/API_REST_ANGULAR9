import { Component, OnInit } from '@angular/core';
import { Turista } from 'src/app/models/turista';
import { ActivatedRoute, Router } from '@angular/router';

import { ReserService } from '../../services/reser.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-reser-form',
  templateUrl: './reser-form.component.html',
  styleUrls: ['./reser-form.component.css']
})
export class ReserFormComponent implements OnInit {

  turista: Turista = {
    id: 0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private reserService: ReserService, private router:Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params);
    if (params.id){
      this.reserService.getReserOne(params.id).subscribe(
        res=> {
          console.log(res);
          this.turista = res;
          this.edit = true;
          console.log(this.edit);
        },
        err => console.error(err)
      )
    }
  }

  saveNewReser() {
    delete this.turista.id;
    delete this.turista.created_at;
    
    this.reserService.saveReser(this.turista).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['turistas']);
      },
      err => console.error(err)
      
    )
  }

  updateRe(){
    delete this.turista.created_at;

    this.reserService.updateReser(this.turista.id, this.turista).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['turistas']);
      },
      err => console.error(err)
    )
  }
}
