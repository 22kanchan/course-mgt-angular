import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
// import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from './_helpers/auth.gaurd';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';



const accountModule = () => import('./account/account.module').then(x =>x.AccountModule);
const usersModule = () => import ('./users/users.module').then(x => x.UsersModule);
const faqModule = () => import ('./faq/faq.module').then(x => x.FaqModule);

const routes: Routes = [
 
{  path:'', component: HomeComponent },
{  path:'profile', component: ProfileComponent },
{  path:'course',  component: CourseComponent },
{  path:'login', component: LoginComponent },
{  path:'register', component: RegisterComponent },
{  path:'faq', loadChildren:faqModule },
{  path:'users', loadChildren:usersModule, canActivate:[AuthGuard]},
{  path:'account', loadChildren:accountModule },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
