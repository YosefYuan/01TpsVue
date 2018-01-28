import Vue from "vue";
import HelloComponent from "./components/Hello.vue"

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: {
        name: "World"
    },
    components: {
        HelloComponent
    }
});


// import { Vue, Component, Prop } from "vue-property-decorator";

// @Component
// export default class HelloDecorator extends Vue {
//     @Prop() name: string;
//     @Prop() initialEnthusiasm: number;
//     enthusiasm = this.initialEnthusiasm;
//     increment() {
//         this.enthusiasm++;
//     }
//     decrement() {
//         if (this.enthusiasm > 1) {
//             this.enthusiasm--;
//         }
//     }
//     get exclamationMarks(): string {
//         return Array(this.enthusiasm + 1).join('!');
//     }
// }