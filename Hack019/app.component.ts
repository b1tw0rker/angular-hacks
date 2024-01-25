import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(langChangeEvent => {
      console.log('Language changed to:', langChangeEvent.lang);
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
