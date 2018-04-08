import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilterPipe } from "../filter.pipe";
import { LogginService } from "../logging.service";
import { DataService } from "../data.service";
declare var firebase:any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [ DataService ]
})
export class DirectoryComponent implements OnInit {

  ninjas =[];

  constructor(private logger: LogginService, private dataService: DataService) {
  }

  logIt(){
    this.logger.log();
  }
  ngOnInit() {
  /*  this.dataService.fetchData().subscribe(
          (data) => this.ninjas = data//console.log(data)
        );*/

          this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) =>{
      this.ninjas.push(snapshot.val())
    });
  }

  fbPostData(available,name,belt,rate,thumb){
    firebase.database().ref('/').push(
      {
        available:available,
        name:name,
        belt:belt,
        rate:rate,
        thumb:thumb
      }
    );
  }
}
