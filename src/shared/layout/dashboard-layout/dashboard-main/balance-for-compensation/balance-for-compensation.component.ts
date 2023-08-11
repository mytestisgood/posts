import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smarti-balance-for-compensation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-for-compensation.component.html',
  styleUrls: ['./balance-for-compensation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceForCompensationComponent {

}
