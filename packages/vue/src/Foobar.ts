import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: `<div class="ac-foobar" @click="onClick">this is foobar</div>`,
})
export class Foobar extends Vue {
  message = "this is foobar";

  onClick(): void {
    console.log("this is foobar");
  }
}
