import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TempvarComponent } from './tempvar/tempvar.component';
import { CompvalComponent } from './compval/compval.component';
import { ValformComponent } from './valform/valform.component';
import { ModelformComponent } from './modelform/modelform.component';
import { CustomvalComponent } from './customval/customval.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'template-variable',
    component: TempvarComponent
  },
  {
    path: 'validation-component',
    component: CompvalComponent
  },
  {
    path: 'validation-summary',
    component: ValformComponent
  },
  {
    path: 'model-form',
    component: ModelformComponent
  },
  {
    path: 'customval-model',
    component: CustomvalComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TempvarComponent,
    CompvalComponent,
    ValformComponent,
    ModelformComponent,
    CustomvalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule


  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
