import { Component } from "@angular/core";

 

@Component({
    standalone: true,
    selector: 'app-header',
    template: `
    <header>
      <h1 class="text-3xl text-blue">Intro to Programming</h1>
      <p>Sample Full-Stack Application For Class</p>
    </header>
    `
})

export class HeaderComponent {

}