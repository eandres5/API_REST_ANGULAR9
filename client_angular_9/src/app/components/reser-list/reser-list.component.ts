import { Component, OnInit, HostBinding } from '@angular/core';

import { ReserService } from "../../services/reser.service";


@Component({
  selector: 'app-reser-list',
  templateUrl: './reser-list.component.html',
  styleUrls: ['./reser-list.component.css']
})
export class ReserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  turistas: any = [];

  constructor(private reserService: ReserService) { }

  ngOnInit(): void {
    this.getResers();
  }

  getResers() {
    this.reserService.getReser().subscribe(
      res => {
        this.turistas = res;
      },
      err => console.error(err)
    );
  }

  deleteReser(id: string) {
    this.reserService.deleteReser(id).subscribe(
      res => {
        console.log(res);
        this.getResers();
      },
      err => console.log(err)
    )
  }

}
