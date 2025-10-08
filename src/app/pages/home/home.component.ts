import { Component } from "@angular/core";
import { WhatsappService } from "../../core/services/whatsapp.services";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {

    constructor(private readonly whatsappService: WhatsappService){}

    openWhatsapp(): void {

        this.whatsappService.openChat();

    }

}