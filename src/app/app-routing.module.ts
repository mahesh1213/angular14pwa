import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/signin/child/child.component';
import { SubchildComponent } from './components/signin/subchild/subchild.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/parent/child1/child1.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { FormgroupComponent } from './components/forms/formgroup/formgroup.component';
import { FormbuilderComponent } from './components/forms/formbuilder/formbuilder.component';
import { DependencyinjectionComponent } from './dependencyinjection/dependencyinjection.component';


const routes: Routes = [
  {path:'',redirectTo:'/signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'formscomponent', component: FormsComponent },
  {path:'dependencyinjection',component:DependencyinjectionComponent,
    children:[
      {path:'admin',loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)}
     ]
   },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [
  SigninComponent,
  SignupComponent,
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
  ChildComponent,
  SubchildComponent,
  ParentComponent,
  Child1Component,
  FormsComponent,
  TemplateComponent,
  FormgroupComponent,
  FormbuilderComponent,
  DependencyinjectionComponent,
  PagenotfoundComponent
]
