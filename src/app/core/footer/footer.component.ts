import { Component } from "@angular/core";
import { InstagramService } from "../services/instagram.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})

export class FooterComponent{

    email: string = 'info@masteracademy.com';

    currentYear: number = new Date().getFullYear();

    constructor(private readonly instagramService: InstagramService){}

    openInstagramProfile(){
        this.instagramService.openInstagramProfile();
    }

}