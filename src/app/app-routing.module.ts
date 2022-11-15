import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from './_helpers/auth.gaurd';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'signup',
  component: SignupComponent
},
{
path:'profile',
component: ProfileComponent
},
{
path:'course',
component: CourseComponent
},
{
path:'subject',
component: SubjectComponent
},
{
path:'coursedetails',
component: CourseDetailsComponent
},
{
path:'faq',
component: FaqComponent
},
{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
