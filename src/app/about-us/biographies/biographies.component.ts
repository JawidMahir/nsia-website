import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent implements OnInit {
  p = 1;
  total = 1;
  bios = [];
  contents = [];
  loading = true;
  constructor(private aboutUs: AboutUsService) {}

  ngOnInit() {
    this.getBios(this.p);
  }

  getBios(page) {
    this.loading = true;
    const customParams = [];
    customParams.push('title');
    customParams.push('content');
    customParams.push('better_featured_image.source_url');
    if (
      this.bios.length < 1 ||
      this.bios.filter(d => d.page === this.p).length < 1
    ) {
      this.aboutUs.getBios(customParams, page).subscribe(biosData => {
        // console.log(biosData.body);
        this.loading = false;
        this.total = Number(biosData.headers.get('X-WP-Total'));

        const newData = {
          page,
          data: this.refineData(biosData.body)
        };

        if (newData.data.length > 0) {
          this.bios.push(newData);
        }
        // console.log('New data: ',  newData.data);
        // console.log('Bios: ', this.bios.length);
        this.contents = newData.data;
      });
    } else {
      this.contents = this.bios.filter(d => d.page === this.p)[0].data;
    }
  }
  refineData(data) {
    for (const el of data) {
      el.content.rendered = this.aboutUs.htmlToPlaintext(el.content.rendered);
    }
    return data;
  }
  imageError(el) {
    el.onerror = '';
    el.src = '../../../assets/images/noimage.svg';
    // console.log(el);
    return true;
  }
  pageChanged(page: number) {
    this.p = page;
    this.getBios(page);
  }
}
