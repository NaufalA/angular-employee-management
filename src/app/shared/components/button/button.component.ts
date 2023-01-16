import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-button',
  template: `
    <button
      class="p-2 rounded-md text-background font-bold uppercase"
      [ngClass]="[typeClass, extraClass]"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  imports: [
    NgClass
  ],
  styles: []
})
export class ButtonComponent {
  @Input() variant: "default" | "success" | "danger" | "warning" | "info" = "default";
  @Input() outline: boolean = false;
  @Input() extraClass = "";

  @Input() disabled: boolean = false;
  typeClass: string = "";

  ngOnChanges() {
    let bgClass: string;
    let textClass: string;
    switch (this.variant) {
      case "success":
        bgClass = "bg-success";
        textClass = "text-background";
        break;
      case "danger":
        bgClass = "bg-danger";
        textClass = "text-background";
        break;
      case "warning":
        bgClass = "bg-warning";
        textClass = "text-background";
        break;
      case "info":
        bgClass = "bg-info";
        textClass = "text-background";
        break;
      default:
        bgClass = "bg-accent";
        textClass = "text-foreground";
        break;
    }

    const outlineClass = "border-".concat(bgClass.split("-")[1]);
    if (this.outline) {
      textClass = "text-".concat(bgClass.split("-")[1]);
      this.typeClass = `${textClass} ${outlineClass} border-2`;
    } else {
      this.typeClass = `${textClass} ${outlineClass} ${bgClass}`;
    }
    console.log(this.typeClass)
  }
}
