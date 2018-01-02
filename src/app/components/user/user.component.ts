import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) {
       this.route.params.subscribe(res => console.log(res.id))
 }

  ngOnInit() {
  }

}
