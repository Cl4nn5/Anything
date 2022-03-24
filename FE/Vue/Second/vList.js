Vue.component("cmp-list", {
  template: "#tpl-v-list",
  props: ["list"],
});
Vue.component("cmp-item", {
  props: ["id", "name"],
  template: "#tpl-v-item",
  data() {
    return {
      sayHi: "hello",
    };
  },
  computed: {
    returnMsg() {
      return `${this.sayHi}, ${this.name}! You are ${this.id}th Customer`;
    },
  },
  created() {
    console.log("call v-item component : ", this.id, this.name);
  },
});

let MyVue = new Vue({
  el: "#app",
  data: {
    cnt: 0,
    name: "Clann",
    list: [],
    model: {
      id: 0,
      name: "kim",
    },
  },
  // components: {
  //   "v-item": itemComponent,
  // },
  methods: {
    initList() {
      this.list = new Array(30).fill(this.model).map((e, i) => {
        return {
          ...e,
          id: i + 1,
        };
      });
    },
  },
  created() {
    this.initList();
    console.log(this.list);
  },
});
