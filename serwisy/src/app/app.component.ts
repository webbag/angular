import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooService } from './foo.service';
import { FooComponent } from "./foo/foo.component";
import { BarService } from './bar.service';
import { BarComponent } from './bar/bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooComponent, BarComponent],
  providers: [FooService, BarService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'  
})

export class AppComponent {
  value!: number;
  valueBar!: number;
  constructor(private fooService: FooService, private barService: BarService) {
    this.value = this.fooService.getValue();
    this.valueBar = this.barService.getValue();
  }
}
