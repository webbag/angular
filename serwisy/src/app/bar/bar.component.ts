import { Component, inject } from '@angular/core';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})

export class BarComponent {

  private barService = inject(BarService);
  value = this.barService.getValue();

}

