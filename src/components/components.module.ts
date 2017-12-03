import { NgModule } from '@angular/core';
import { MonanFullBoxComponent } from './monan-full-box/monan-full-box';
import { MonanListBoxComponent } from './monan-list-box/monan-list-box';
@NgModule({
	declarations: [MonanFullBoxComponent,
    MonanListBoxComponent],
	imports: [],
	exports: [MonanFullBoxComponent,
    MonanListBoxComponent]
})
export class ComponentsModule {}
