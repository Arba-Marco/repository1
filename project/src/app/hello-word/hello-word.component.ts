import { Component, OnInit } from '@angular/core'; //Molto simile alle import in Java
@Component({
selector: 'app-hello-world',
templateUrl: './hello-world.component.html',
styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
constructor() { }
ngOnInit() {
}
}