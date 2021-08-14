import { NgModule } from "@angular/core";
import { Routes , RouterModule  } from "@angular/router";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent  } from "./register/register.component";

const routes:Routes=[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"changepassword",component:ChangePasswordComponent},
    {path:"forgot",component:ForgotPasswordComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule{};