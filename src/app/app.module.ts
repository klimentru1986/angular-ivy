import { NgModule, ɵrenderComponent as renderComponent } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent]
})
export class AppModule {}

renderComponent(AppComponent);
