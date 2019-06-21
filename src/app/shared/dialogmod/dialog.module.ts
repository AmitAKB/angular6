import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dialogComponent } from './dialog.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule.forRoot(),
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        dialogComponent
    ],
    exports: [dialogComponent]
})
export class dialogModule {}
