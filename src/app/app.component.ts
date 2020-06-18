
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('snav') sideNav: any;

  title = 'user-managment-app';
  //Stores information on a media query applied to a document, 
  //and handles sending notifications to listeners when the media query state change
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher

  ) {

    //The matchMedia method can be used to get a native MediaQueryList
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  onToggle(): void {
    this.sideNav.toggle();
  }
}
