import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class InstagramService{

    private readonly user_name = 'miltonfranco_scalper';
    private readonly linkProfile = "https://www.instagram.com/miltonfranco_scalper?igsh=MWpjaGJtcm80amxueg==";
    private readonly linkChat = "https://ig.me/m/";

    constructor(){}

    openInstagramProfile(){
        const link = `${this.linkProfile}${this.user_name}`;
        window.open(link, '_blank');
    }

    openInstagramChat(){
        const link = `${this.linkChat}${this.user_name}`;
        window.open(link, '_blank');
    }

}