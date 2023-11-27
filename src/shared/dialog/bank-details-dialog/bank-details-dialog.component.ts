import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BankDetails } from '@shared/api/models';
import { AllRegistrationSessionData, REGISTRATION_DATA, registrationConfirmPaymentLink } from '@shared/entities';
import { DestroyService } from '@shared/services';
import { ButtonComponent } from '@shared/ui';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { takeUntil } from 'rxjs';
import { SessionStorageService } from '@shared/web-api';

@Component({
  selector: 'smarti-bank-details-dialog',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './bank-details-dialog.component.html',
  styleUrls: ['./bank-details-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankDetailsDialogComponent  {
  @Input() public observer!: { complete: () => void };
  @Input() public bankDetailsSmarti!: BankDetails | undefined;
  public readonly currentStorageData: AllRegistrationSessionData =
    JSON.parse(this.sessionStorageService.getItem(REGISTRATION_DATA) as string);
  private isNeedToNavigateAfterClose: boolean = false;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private readonly destroy$: DestroyService,
    private readonly sessionStorageService: SessionStorageService,
    private readonly router: Router,
  ) {
  }


  public closeDialog(): void {
    this.observer.complete();
  }

  public sendRequest(content: PolymorpheusContent<TuiDialogContext>): void {
    this.observer.complete();
    this.isNeedToNavigateAfterClose = true;
    const dialogRef = this.dialogs.open(content, {
      closeable: false,
      size: 'm',
    }).pipe(takeUntil(this.destroy$)).subscribe();
    setTimeout(() => {
      dialogRef.closed = true;
      this.router.navigate([registrationConfirmPaymentLink]);
    }, 3000);
  }

  public closeSecondDialog(observer: { complete: () => void }): void {
    observer.complete();
  }

  public isEmptyString(str: string | undefined): boolean {
    return !str?.length;
  }
}
