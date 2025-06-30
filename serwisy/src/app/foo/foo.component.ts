import { Component, inject } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {

  private fooServce = inject(FooService);
  value = this.fooServce.getValue();

}
