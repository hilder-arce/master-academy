import { Component } from "@angular/core";
import { WhatsappService } from "../services/whatsapp.services";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})

export class FooterComponent{

    constructor(private readonly whatsappService: WhatsappService){}

    email: string = 'info@masteracademy.com';

    telefono: string = '+51 987 654 321';

    currentYear: number = new Date().getFullYear();

    openWhatsapp(){
        this.whatsappService.openChat();
    }

}