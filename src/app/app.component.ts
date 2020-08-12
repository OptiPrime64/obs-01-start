import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activateSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activateSub = this.userService.activatedEmitter.subscribe(
      (activatedStatus: boolean) => {
        this.userActivated = activatedStatus;
      });
  }

  ngOnDestroy() {
    this.activateSub.unsubscribe();
  };
}
