/**
 * Copyright 2019 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIShellModule } from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { UiShellComponent } from './ui-shell/ui-shell.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UiShellComponent,
    DisplayFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    UIShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
