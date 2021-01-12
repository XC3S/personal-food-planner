import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getCategories(){
    return this.dataService.getCategories()
  }
}
