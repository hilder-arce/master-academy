import { Component } from "@angular/core";
import { WhatsappService } from "../services/whatsapp.services";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent {

    constructor(private readonly whatsappService: WhatsappService) {}

    openWhatsapp(): void {

        this.whatsappService.openChat();

    }

}