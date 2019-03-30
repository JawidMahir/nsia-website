import { Component, OnInit } from '@angular/core';
import { MediaServicesService } from '../media-services.service';

@Component({
  selector: 'app-media-room-home',
  templateUrl: './media-room-home.component.html',
  styleUrls: ['./media-room-home.component.css']
})
export class MediaRoomHomeComponent implements OnInit {

  orgs = [];
  brochures = [];
  posters = [];
  flyers = [];
  booklets = [];
  newsletters = [] ;

  constructor(private mediaService: MediaServicesService) { }

  ngOnInit() {
    this.getPromotingMaterial('Promotional_Materials');
    this.getNewsMaterial('Newsletter',1);
  }

  getNewsMaterial(type,perPage){
    const customParams = [];
    customParams.push('acf.library_attachment.url');
    this.mediaService.getNewsData(customParams, type, perPage).subscribe((newsData) => {
      this.newsletters.push(newsData);
      console.log(this.newsletters);
    });

  }

  getPromotingMaterial(type){
    const customParams = [];
    customParams.push('acf.promotional_materials_attachment.url');
    customParams.push('acf.promotional_materials_type');
    this.mediaService.getMediaData(customParams, type).subscribe((promotingMaterialData) => {
     for (let key in promotingMaterialData) {
        switch(promotingMaterialData[key].acf.promotional_materials_type) { 
          case 'booklet': { 
            this.booklets.push(promotingMaterialData[key]);
            break; 
          } 
          case 'flyer': { 
            this.flyers.push(promotingMaterialData[key]) ;
            break; 
          } 
          case 'poster': { 
            this.posters.push(promotingMaterialData[key]);
            break; 
          } 
          case 'brochure': { 
            this.brochures.push(promotingMaterialData[key]);
            break; 
          } 
          case 'org_proﬁle': { 
            this.orgs.push(promotingMaterialData[key]);
            break; 
          }       
        } 
     }

    });

  }
  
}
