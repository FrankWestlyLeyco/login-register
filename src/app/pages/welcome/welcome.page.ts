import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private actionSheetController: ActionSheetController, private toastCtrl: ToastController, private alertController: AlertController) {}
  

  ngOnInit() {
  }

    //console.log("Action Sheet")
    async _actionSheet() {
      const actionSheetConst = await this.actionSheetController.create({
        header: 'Albums',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheetConst.present();

    }
  

    async _toast(){
      await this.toastCtrl.create({
        message:"This is Toast!",
        position:'middle',
        duration:2000,
        buttons:[{
          text:"OK",
          handler: () =>(
            console.log("ok clicked")
          )
        }]
      }).then(res => res.present());
    }

    async _alert(){
      await this.alertController.create({
        header:"This is Alert",
        subHeader:"Promocode",
        message:"Please enter promo code!",
        inputs: [
          {type:'text', name: 'promo', placeholder: "Promo code"}
        ],
        buttons:[{
          text:"Apply",
          handler: (res) =>{
            console.log("res.promo")
          }
        },
      {
        text:"Cancel"
      }]
      }).then(res => res.present());
    }
  }



