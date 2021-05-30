import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('nav') 
  nav: ElementRef<any> | undefined;
  constructor(private cs: CommonServiceService) { }

  ngOnInit(): void {
    this.cs.getStickyHeaderFlag().subscribe((data)=>{
      if(data) this.nav?.nativeElement.classList.add('sticky-header') 
      else this.nav?.nativeElement.classList.remove('sticky-header')
    })
  }

}
