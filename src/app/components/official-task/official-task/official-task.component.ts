import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-official-task',
  templateUrl: './official-task.component.html',
  styleUrls: ['./official-task.component.scss']
})
export class OfficialTaskComponent implements OnInit {

  public instructors:any = []
  public picture:any = []
  constructor(private http: HttpClient) {
  }
  
  getAllInstructors(){
    const url ='https://api.bodysky.com/search/top'
    this.http.get(url).subscribe((res)=>{
      this.instructors = res
      console.log(this.instructors)
    })
  }
  
  ngOnInit() {
    this.getAllInstructors()
  }
}
