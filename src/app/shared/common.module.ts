import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NoDataDirective } from '../directives/no-data.directive';

@NgModule({
  declarations: [NoDataDirective ],
  imports: [CommonModule, NgbModule, FormsModule, HttpClientModule],
  exports: [CommonModule, NgbModule, FormsModule, HttpClientModule, NoDataDirective],
})
export class CommonModules {}
