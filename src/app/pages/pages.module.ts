import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home/home.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { CursosComponent } from "./cursos/cursos.component";

@NgModule({
    declarations: [
        HomeComponent,
        CursosComponent,
        NosotrosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        HomeComponent,
        CursosComponent,
        NosotrosComponent
    ]
})

export class PagesModule { }