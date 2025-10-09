import { Component } from "@angular/core";
import { InstagramService } from "../services/instagram.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent {

    constructor(private readonly instagramService: InstagramService){}

    openInstagram(){
        this.instagramService.openInstagramProfile();
    }

}