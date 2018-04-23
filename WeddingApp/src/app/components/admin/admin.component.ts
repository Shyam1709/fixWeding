import { Component, OnInit } from '@angular/core';
import { WeddingApiService } from '../../services/wedding-api.service';
import { AppConfig }from '../../config/config.constant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert';



@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	providers:[WeddingApiService]
})
export class AdminComponent implements OnInit {
	public updateData : any={};
  public updateCatering: any={};
  public hidden=true;
  public  venue_image:string="";
  public errorMsg="";
  public showerror : boolean = false;
  selectedFile=null;

  constructor(private weddingApiService: WeddingApiService, private http:Http) { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile=event.target.files[0];
  }


//to update current venue details in the database
onSubmit(updateData) {
     const fd = new FormData();
   fd.append('file', this.selectedFile)
   this.http.post(AppConfig.postimageUrl,fd).subscribe((res)=>{
   }); 
  updateData.venue_image=this.selectedFile.name;
  this.weddingApiService.updateDetails(this.updateData).subscribe(data=>{
  },(error:any)=>{
  })
}

//
onClick(updateCatering) {
  updateCatering.venue_image=this.selectedFile.name;
  this.weddingApiService.updateCatering(this.updateCatering).subscribe(data=>{
  swal("Good job!", "You clicked the button!", "success");
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showerror = true;
  })
}
}
