import { Component, OnInit } from '@angular/core';
import { cards } from 'src/app/interfaces/interface';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listOfCards:cards[]=[];
  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.getCardsList().subscribe((data:cards[])=>{
      this.listOfCards = [...data]
    })
  }

}
