import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WhatsappService {

    openChat(): void {

        const phoneNumber = '51951360851';
        const message = encodeURIComponent('¡Hola! Quisiera más información sobre Master Academy.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');

    }

}