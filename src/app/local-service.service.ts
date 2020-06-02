import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor(
    private localApiCall : HttpClient
  ) { }

  // Ajax call method

  public usersDataAccess = "https://jsonplaceholder.typicode.com/users";

  public usersAlbumsData = "https://jsonplaceholder.typicode.com/albums";

  public usersCommentsData = "https://jsonplaceholder.typicode.com/comments";

  usersDataAjaxCall(){
   return this.localApiCall.get(this.usersDataAccess);
  }

  usersAlbumsAjaxCall(){
    return this.localApiCall.get(this.usersAlbumsData);
  }

  usersCommentsAjaxCall(){
    return this.localApiCall.get(this.usersCommentsData);
  }



}
