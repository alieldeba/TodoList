var vm = new Vue({
  el: "#page",
  data: {
    msg: "",
    items: [],
    selected = false;
  },
  methods: {
    addItem: function () {
      this.items.push(this.msg);
      this.msg = "";
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
    },
    deleteAll: function () {
      this.items = [];
    },
    toggle: function () {
      this.selected = !this.selected;
    }
  },
});

window.onload = () => {
  document.querySelector("input").focus();
};
