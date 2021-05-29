import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  
  @ViewChild('containerRef') 
  containerRef: ElementRef<any> | undefined;
  
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
  }

  
  @HostListener("window:scroll", ['$event'])
  scrolling($event : any){
     console.log(this.containerRef?.nativeElement.getBoundingClientRect().top < 0)
     this.containerRef?.nativeElement.getBoundingClientRect().top < 0 ? this.commonService.setHeaderSticky(true) :
     this.commonService.setHeaderSticky(false)
    }

}
