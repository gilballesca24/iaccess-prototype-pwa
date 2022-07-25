import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.scss'],
})
export class MenuSelectionComponent implements OnInit {

  constructor(private data: DataService,private router: Router) {}
  items;
  
  ngOnInit() {
    this.items=[
      {
        name:'Summary',
        icon:'analytics',
        to:'/timesheet',
        color:'#166aa2',
        theme:'light'
      },
      {
        name:'Expense Sheet',
        icon:'basket',
        to:'/expense',
        color:'#cc0000',
        theme:'dark'

      },
      {
        name:'Milege Sheet',
        icon:'car',
        color:'#e6e600',
        theme:'darken'

      },
      {
        name:'Purchase Order',
        icon:'cart',
        color:'#lighten',
        theme:'light'

      },
      {
        name:'Approvals',
        icon:'thumbs-up',
        color:'#3399ff',
        theme:'dark'

      }
      // {
      //   name:'Rejections',
      //   icon:'thumbs-down',
      //   color:'#ff6600'
      // }
    ]
  }
  goToItem(e){
    this.router.navigate([e.to]);
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}

