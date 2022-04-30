var vm = new Vue({
  el: "#page",
  data: {
    msg: "",
    items: [],
  },
  methods: {
    addItem: function () {
      this.items.push(this.msg);
      this.msg = "";
    },
    completeItem: function (index) {
      document.querySelector(".text").style.cssText = 'text-decoration: line-through;';
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
    },
    deleteAll: function () {
      this.items = [];
    },
  },
});

window.onload = () => {
  document.querySelector("input").focus();
};
