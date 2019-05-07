import { Component, OnInit } from '@angular/core';
import { SendService } from 'src/app/services/send.service';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','./modal.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private send: SendService) { }

  ngOnInit() {
    this.send.getDataSend().subscribe((res) => {
      console.table(res['data'])
    })
  }

  sendData(fname:string,lname:string,email:string){
    if (fname !== '' && lname !== '' && email !== '') { 
      this.send.setDataSend(lname,fname,email).subscribe((res) => {
        console.log(res);
        this.Open_modal_change_user_password();
        this.playAudio();
      })
    }
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/notifs/iphone_ding.mp3";
    audio.load();
    audio.play();
  }
  
  Open_modal_change_user_password() {
    $('#animate_Style_User_Password').removeClass('bounceOutUp');
    $('#animate_Style_User_Password').addClass('bounceInDown');
    $('#modal_change_user_password').css('display', 'block');
    $('#fname').val('');
    $('#lname').val('');
    $('#email').val('');
    setTimeout( () => { this.Close_modal_change_user_password() }, 3000);
  }
 Close_modal_change_user_password() {
   $('#animate_Style_User_Password').removeClass('bounceInDown');
   $('#animate_Style_User_Password').addClass('bounceOutUp');
   setTimeout( () => { $('#modal_change_user_password').css('display', 'none'); }, 800);
 }
}
