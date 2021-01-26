import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = 'Entrez votre texte';
  @tracked info = '';
  MAX = 100;

  get style(){

    if(this.size > 50) {
      return 'info';
    }
    if(this.size > 20) {
      return 'warning';
    }
    return 'danger';

  }

  get size(){
    return this.MAX - this.content.length;
  }

  @action save() {
    console.log('Test save ' + this.content);
  }

  @action clear() {
    this.content = '';
  }

  @action update() {
    this.info = 'Note modifiée';
  }

  @action open(){
    this.content = this.contentSave;
    this.info = 'Note sauvegardée';
  }
}
