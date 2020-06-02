import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalServiceService } from '../../local-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private localHttpClient : HttpClient,
    private localService : LocalServiceService
  ) { }

  public userDataRes:any = [];

  public userAlbumDataRes:any = [];

  public userCommentsDataRes:any = [];

  ngOnInit(): void {

    // User data call
    this.localService.usersDataAjaxCall().subscribe( res => {
      this.userDataRes = res;
      console.log("User data call",this.userDataRes);
    });

    // User Albums Data call
    this.localService.usersAlbumsAjaxCall().subscribe( res => {
      this.userAlbumDataRes = res;
      console.log("User Albums Data call",  this.userAlbumDataRes);
    })

    // User Comments Data call

    this.localService.usersCommentsAjaxCall().subscribe(res => {
      this.userCommentsDataRes = res;
      console.log("User Comments Data call", this.userCommentsDataRes );
    })

  }

  name = '';
  items = [
    {name:'teja'},
    {name:'kiran'},
    {name:'venky'},
    {name:'monky'},
    {name:'saiteja'},
    {name:'nethas'},
  ]

  userEnterData(event){
    let searchData = event.target.value;
    console.log(searchData);
  }

}
