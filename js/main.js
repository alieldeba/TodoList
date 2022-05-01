var vm = new Vue({
  el: "#page",
  data: {
    msg: "",
    items: [],
  },
  methods: {
    addItem: function () {
      this.items.push(this.msg.trim().capitalize());
      this.msg = "";
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
