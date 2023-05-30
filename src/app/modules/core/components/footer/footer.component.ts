import { Component } from '@angular/core';

import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faGithub: IconDefinition = faGithub;
  faLinkedin: IconDefinition = faLinkedin;
  faInstagramSquare: IconDefinition = faInstagramSquare;
}
