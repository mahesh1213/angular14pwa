import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate, UnrecoverableStateEvent, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  restData: any;

  constructor(private $http:HttpClient,private updateservice:SwUpdate,
    private pushService:SwPush) { }

  ngOnInit(): void {
    this.$http.get('http://localhost:5000/posts',{responseType: 'text'}).subscribe((res:any)=>{
       this.restData = JSON.parse(res);
    });

    if(!this.updateservice.isEnabled){
        return;
    }
    this.#handleupdate();

  }

  #handleupdate(){
    // this.updateservice.versionUpdates.subscribe((event:VersionEvent)=>{
    //   alert(event.type);
    //    if(event.type === 'VERSION_READY' && confirm(`New version to load`)){
    //        console.log('VERSION_READY');
    //        window.location.reload();
    //    }
    // });

    // this.updateservice.unrecoverable.subscribe((event:UnrecoverableStateEvent)=>{
    //    console.log('Error reason:', event.reason);
    // })

    // poll for server update.
      
    const interval = setInterval(async () => {
       const shouldUpdate = await this.updateservice.checkForUpdate();
       console.log('checked for update' + shouldUpdate);
       if(shouldUpdate){
             const result = await this.updateservice.activateUpdate();
             console.log('Active update with result'+result);
             clearInterval(interval);
       }
    })

    this.updateservice.unrecoverable.subscribe((event:UnrecoverableStateEvent)=>{
       console.log('Error reason:', event.reason);
    })
  }

}
