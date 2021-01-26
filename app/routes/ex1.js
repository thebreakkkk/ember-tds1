import Route from '@ember/routing/route';
import { action, set } from "@ember/object";

export default class Ex1Route extends Route {
  model(){
    return {items :[]};
  }

  @action save(content){
    let model = this.modelFor('exo1');
    set(model, 'items', content.split('\n'));
    this.transitionTo('exo1b');
  }
}
