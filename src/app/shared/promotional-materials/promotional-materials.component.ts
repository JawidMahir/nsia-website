import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-promotional-materials',
  templateUrl: './promotional-materials.component.html',
  styleUrls: ['./promotional-materials.component.css']
})
export class PromotionalMaterialsComponent implements OnInit {

  orgs = [];
  brochures = [];
  posters = [];
  flyers = [];
  booklets = [];
  newsletters = [];
  promoMaterialFlag = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPromotingMaterial('Promotional_Materials');
    this.getNewsMaterial('Newsletter', 1);
  }

  getNewsMaterial(type, perPage) {
    const customParams = [];
    customParams.push('acf.library_attachment.url');
    this.dataService.getNewsData(customParams, type, perPage).subscribe((newsData) => {
      console.log('Newsletter data: ', this.newsletters);
      if (newsData[0]) {
        this.newsletters.push(newsData[0]);
        this.promoMaterialFlag = true;
      }
    });

  }


  getPromotingMaterial(type) {
    const customParams = [];
    customParams.push('acf.promotional_materials_attachment.url');
    customParams.push('acf.promotional_materials_type');
    this.dataService.getMediaData(customParams, type).subscribe((promotingMaterialData) => {
      console.log('Prmotional materials: ', promotingMaterialData);
      if (promotingMaterialData.length > 0) {
        this.promoMaterialFlag = true;

        // tslint:disable-next-line: forin
        for (let key in promotingMaterialData) {
          switch (promotingMaterialData[key].acf.promotional_materials_type) {
            case 'booklet': {
              this.booklets.push(promotingMaterialData[key]);
              break;
            }
            case 'flyer': {
              this.flyers.push(promotingMaterialData[key]);
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

      }


    });

  }

}
