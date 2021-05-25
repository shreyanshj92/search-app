import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

import data from '../data/documentData.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  documents: any[] = [];
  search = {
    searchTerm: "",
    category: ""
  };
  showHint: boolean = false;
  selectedCategory: string = "";
  innerWidth: number = 0;
  @HostListener('window:resize', []) 
  private onResize() {
    this.detectScreenSize();
  }

  constructor() { }

  ngOnInit(): void {
    this.documents = data;
  }

  ngAfterViewInit(): void {
    this.detectScreenSize();
  }

  updateSearchTerm(event: any): void {
    this.showHint = event.target.value ? true : false;
    if(event.target.value.length > 3){
      this.search["searchTerm"] = event.target.value;
    } else {
      this.search["searchTerm"] = "";
    } 
  }

  applyFilter(category: string): void {
    this.search["category"] = category;
    this.selectedCategory = category;
  }

  detectScreenSize(): void {
    this.innerWidth = window.innerWidth;
  }
}
