var vm = new Vue({
  el: "#page",
  data: {
    msg: "",
    items: [],
  },
  methods: {
    addItem: function () {
      if (this.items.contains(this.msg)) {
        this.msg = '';
      } else {
        this.items.push(this.msg);
        this.msg = "";
      }
      
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
