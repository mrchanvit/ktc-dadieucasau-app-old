import { NgModule } from '@angular/core';
import { ThitPipe } from './thit';
import { GiaviPipe } from './giavi';
@NgModule({
	declarations: [ThitPipe,
    GiaviPipe],
	imports: [],
	exports: [ThitPipe,
    GiaviPipe]
})
export class PipesModule {}
