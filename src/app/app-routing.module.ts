import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  {
    path:'collections',
    loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
  },
  {
    path:'elements',
    loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule)
  },
  {
    path : '', component:HomeComponentComponent
  },
  {
    path : '**', component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
