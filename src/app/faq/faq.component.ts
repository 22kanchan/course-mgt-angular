import { Component } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations:[
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FaqComponent {
 dataSource = ELEMENT_DATA;
 columnsToDisplay = ['Frequently Asked Questions'];
 columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
expandedElement: FaqElement | null | undefined;  
}

export interface FaqElement{
   id : number;
   question:string;
   answer : string;
}

const ELEMENT_DATA: FaqElement []=[
  {
       id:1,
       question:'How to purchase a course online?',
       answer: 'You have to register and login on portal and then choose the course which futher redirect u to purchase the course'

  },
  {
    id:2,
    question:'How to purchase a course online?',
    answer: 'You have to register and login on portal and then choose the course which futher redirect u to purchase the course'

},
{
  id:3,
  question:'How to purchase a course online?',
  answer: 'You have to register and login on portal and then choose the course which futher redirect u to purchase the course'

},
{
  id:4,
  question:'How to purchase a course online?',
  answer: 'You have to register and login on portal and then choose the course which futher redirect u to purchase the course'

},
]