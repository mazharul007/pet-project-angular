import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  public datas =[
    {
      name:'Alexa',age:24,Job:'HR',employed:true
    },
    {
      name:'Brad',age:68,Job:'Instructor',employed:true
    },
    {
      name:'Stephen',age:34,Job:'Instructor',employed:false
    }
    
  ];

  headers=[
    {key:'employed', label:'Has a job?'},
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'Job',label:'Job'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
