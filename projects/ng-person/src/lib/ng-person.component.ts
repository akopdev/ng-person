import { Component, OnInit, Input } from '@angular/core';
import { NgPersonService } from './ng-person.service';
import { AvatarStyle } from './avatar-style.interface';


@Component({
  selector: 'ng-person',
  template: `
    <div class="person {{ size }}">
      <div class="avatar" [ngClass]="{'rounded': round}" [ngStyle]="styles">
        <div class="picture" *ngIf="picture" [style.background-image]="'url('+picture+')'"></div>
        {{ initials }}
      </div>
      <div class="name" *ngIf="showName == true">{{ name }} <p *ngIf="title">{{ title }}</p></div>
    </div>
  `,
  styleUrls: ['./ng-person.component.scss']
})
export class NgPersonComponent implements OnInit {

  /** Absolute path to a picture image. */
  @Input() picture: string;

  /** Specifies a name to be shown on the right of a user picture. */
  @Input() name: string;

  /** Specifies a title to be shown under the name. */
  @Input() title: string;

  /** Whether to show a user name or not. */
  @Input() showName: boolean = true;

  /** Round corners of the picture box. */
  @Input() round: boolean = false;

  /** Size of the component. Possible values: small, medium (default), large, giant. */
  @Input() size: 'small' | 'medium' | 'large' | 'giant' = 'medium';

  public initials: string;

  public styles: AvatarStyle;


  constructor(private person: NgPersonService) { }

  ngOnInit(): void {
    const name = this.name.trim();
    if (name) {
      this.initials = this.person.getInitials(name);
      this.styles = this.person.getColorMap(name);
    }
  }

}
