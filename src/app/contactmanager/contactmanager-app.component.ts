import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  templateUrl: './contactmanager-app.component.html'
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit(): void {
  }

}
