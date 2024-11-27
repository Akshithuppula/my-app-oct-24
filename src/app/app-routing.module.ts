import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentidComponent } from './studentid/studentid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:'directive', component:DirectiveComponent},
    {path:'event-registration', component: EventRegistrationComponent},
    {path:'employe-registration', component: EmployeRegistrationComponent},
    {path:'employee', component: EmployeeComponent},
    {path:'flipkart', component: FlipkartComponent},
    {path: 'vehicle', component: VehicleComponent },
    {path: 'account', component: AccountComponent},
    {path: 'amazon', component: AmazonComponent},
    {path: 'create-vehicle', component: CreateVehicleComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'studentid', component: StudentidComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path: 'create-student', component: CreateStudentComponent}

  ]},
  {path: '',component:LoginComponent},
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
