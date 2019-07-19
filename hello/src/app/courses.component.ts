
import {Component}  from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template:`<h2>{{ title }}</h2>
            <ul>
                <li *ngFor = "let course of courses">
                    {{course}}
                </li>
            </ul>
            `

})
export class CoursesComponent{
    title = "List of courses";
    courses ;// = [ "course1" ,"course2"  ,"course3"] ;

    //Logic for calling an HTTP service 
    constructor(service: CoursesService  )
    {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

}