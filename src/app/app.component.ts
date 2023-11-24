import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public openAccordianIndex : Set<number> = new Set();

  faqItems : any[] = [
    { question: 'What is the difference between maintenance blocks and on-going plans?', answer : 'Maintenance blocks typically refer to a pre-arranged set of hours or services that a client purchases in advance for ongoing maintenance and support.' },
    { question: 'Do Webflow websites need maintenance?', answer : 'Yes, like any other websites, Webflow websites may require maintenance to ensure they continue to function optimally and remain secure. ' },
    { question: 'Will you maintain my Webflow website even though you did not develop it?', answer : 'Maintaining a Webflow website typically involves tasks such as content updates, security checks, performance optimization, and addressing any issues that may arise.'},
    { question: 'What do I need to upload to start?', answer : 'Webflow Account, Project Creation, Design and Layout' }
  ];

  constructor() {}
  
  ngOnInit(): void {
  }

  toggleAccordian(index : number){
    if(this.openAccordianIndex.has(index)){
      this.openAccordianIndex.delete(index);
    } else{
      this.openAccordianIndex.add(index);
    }
    console.log(this.openAccordianIndex);
  }
}
