import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blog = [
    {
      date: 'Tuesday 04/06',
      mission: ['Mission1'],
      description: 'Oui voil aquoi tu uyfguycytdfuig rdtyfu dtyfu drtyfugi drtyfugi drtyfg udytfugi ',
    },
    {
      date: 'Wednesday 05/06',
      mission: ['Mission1'],
      description: 'tyguij trcyugjio dtrguy trdfyguydrt ydrtyiug drtyuit dfygug hdgtfygu tydtfuioutdytfui',
    },
    {
      date: 'Thursday 06/06',
      mission: ['Mission1','Mission2'],
      description: 'tyguij trcyugjio dtrguy trdfyguydrt ydrtyiug drtyuit dfygug hdgtfygu tydtfuioutdytfui',
    },

  ];
}
