import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUserNames()
      .subscribe(
        x => {
          this.data = JSON.stringify(x);;
          console.log(this.data);
        }
      );
  }
  // FormSubmit(form: FormGroup) {
  //   console.log(form.value);
  // }
}
