/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  createTemplate() {
    return `
    <footer class="footer">
      <span class="footer__copyright" role="phrase">Pokemon Copyright</span>
    </footer>`;
  }
}
