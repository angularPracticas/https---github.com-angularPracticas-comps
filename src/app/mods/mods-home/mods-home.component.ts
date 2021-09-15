import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'Is blue because the beach'},
    { title: 'Why beard fly?', content: 'They fly because yes'},
    { title: 'Why is raining', content: 'Is raining because we need water'},
    { title: 'Why is the sky blue?', content: 'Is blue because the beach'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
