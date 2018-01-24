import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './main/body/about/about.component';
import { ContactComponent } from './main/body/contact/contact.component';
import { TodoComponent } from './main/body/todo/todo.component';
import { HomeComponent } from './main/body/home/home.component';
import { BodyComponent } from './main/body/body.component';



// domain slash nothing... So we add a default path
// Only redirect if the full path isn't empty
    // order in routes matter.
    // todo routing is just a test for getting data from database and displaying it
    // For routing we want to make the default show our home component on default, any invalid urls will show home too
// { path: '***', redirectTo: '', pathMatch: 'full' }
const appRoutes: Routes = [
    { path: '***', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'todo', component: TodoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

// Bundles all the routing functionality
export class AppRoutingModule {

}



