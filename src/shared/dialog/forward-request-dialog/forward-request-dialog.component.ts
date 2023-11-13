import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '@shared/api/services';
import {emailValidatorPattern, israelMobilePhoneValidatorPattern, loginAfterRegistrationLink} from '@shared/entities';
import {AlertsService, DestroyService} from '@shared/services';
import {ButtonComponent, InputFieldComponent, InputNumberComponent} from '@shared/ui';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, takeUntil, tap, withLatestFrom, concatMap, map, of, switchMap, Subscription} from 'rxjs';
import {SessionStorageService} from "@shared/web-api";
import {Router} from "@angular/router";

interface ForwardRequestForm {
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  userName: FormControl<string | null>;
}

@Component({
  selector: 'smarti-forward-request-dialog',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    ButtonComponent,
    ReactiveFormsModule,
    InputNumberComponent,
  ],
  templateUrl: './forward-request-dialog.component.html',
  styleUrls: ['./forward-request-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForwardRequestDialogComponent {
  @Input() public haveCloseIcon: boolean = false;
  @Input() public observer!: { complete: () => void };
  @Input() public identifier!: string;
  @Input() public departmentId!: number;
  @Output() public requestSend: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public forwardRequestForm: FormGroup<ForwardRequestForm> = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(emailValidatorPattern),
    ]),
    phone: new FormControl('', [Validators.required, Validators.pattern(israelMobilePhoneValidatorPattern)]),
    userName: new FormControl(''),
  });

  constructor(
    private readonly router: Router,
    private readonly sessionStorageService: SessionStorageService,
    private readonly destroy$: DestroyService,
    private readonly userService: UserService,
    private readonly alertsService: AlertsService,

    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
  ) {
  }

  public closeDialog(): void {
    this.observer.complete();
  }

  public sendRequest(content: PolymorpheusContent<TuiDialogContext>): void {
    this.userService.apiEmployersCreateUserOutPost({
      email: this.forwardRequestForm.controls.email.value as string,
      phone: this.forwardRequestForm.controls.phone.value as string,
      user_name: this.forwardRequestForm.controls.userName.value as string,
      identifier: this.identifier,
      departmentId: this.departmentId,
    }).pipe(
      tap(() => {
        this.observer.complete();
      }),
      withLatestFrom(this.dialogs.open(content, {
        closeable: false,
        size: 'm',
      })),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  public closeSecondDialog(observer: { complete: () => void }): void {
    observer.complete();
  }
}
