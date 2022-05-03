var vm = new Vue({
  el: "#page",
  data: {
    msg: "",
    items: [],
  },
  methods: {
    addItem: function () {
      // Returng msg by Capitalize
      this.items.push(this.msg.trim().charAt(0).toUpperCase() + this.msg.trim().slice(1).replace('/\s+/g', ' '));
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
