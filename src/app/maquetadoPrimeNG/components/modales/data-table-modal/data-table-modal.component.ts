import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'data-table-modal',
  templateUrl: './data-table-modal.component.html',
  styles: [
  ]
})
export class DataTableModalComponent {
  @Input()
  visible: boolean = false;

  @Output()
  public visibleChild:EventEmitter<boolean> = new EventEmitter();

  onHideModal():void{
    this.visible = false;
    this.visibleChild.emit(this.visible);
  }
}
