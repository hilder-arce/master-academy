import { Component } from "@angular/core";
import { InstagramService } from "../services/instagram.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {

    constructor(private readonly instagramService: InstagramService){}

    openInstagramChat(){

        this.instagramService.openInstagramChat();
        
    }

}