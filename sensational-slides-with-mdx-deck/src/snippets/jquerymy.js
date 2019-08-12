
$(function() {
  $("#form").my({
    data: {
      name: "",
      list: []
    },
    ui: {
      "#name": "name",
      "#list": {
        bind: "list",
        list: '<div class="br2"></div>',
        init: function($control, data) {
          $control.sortable({
            handle: ".fi-list"
          });
        },
        manifest: function(item, index, list) {
          console.log(list); 
          return this.Forms[item.type];
        }
      },

      "#btn-user": function(data, val) {
        if (null != val) this.InsertItem("user");
      }
    },

    InsertItem: function(type) {
      this.my.insert(
        "#list",
        $.extend(
          true,
          {
            stamp: Date.now()
          },
          this.Forms[type].data
        )
      );
    },

    Forms: {
      user: {
        data: {
          type: "user",
          name: "",
          timea: "",
          timeb: "",
          repeat: ""
        },
        init: function($form) {
          $form.html(
            [
              '<div class="section">',
              '<div class="name-cls"><span class="fi-x red delete-mark"></span>',
              '<span class="fi-list green"></span> &nbsp;',
              '<span class="name-cls"><span><input id="name" class="w270" type="text" autofocus placeholder="User login"></span></div>',
              '<div class="name-cls ds_display"><span><input id="timea" type="text" placeholder="Enter Time a" class="w150 timepicker-box"></span> ',
              '<span style="margin-left: 7px;"><input id="timeb" type="text" placeholder="Enter Time b" class="w150 timepicker-box"></span></div> ',
              '<div class="ds_display"><span><input id="repeat" value="1" type="number" class="w150"></span>',
              '<span style="margin-left: 3%;"><input class="w150" id="btn-play" type="button" value="play"></span></div>'
            ].join("")
          );
        },

        ui: {
          "#name": "name",
          "#timea": "timea",
          "#timeb": "timeb",
          "#repeat": "repeat",
          ".fi-x": {
            bind: function(data, val) {
              if (null != val) this.my.remove();
            },

            events: "click"
          },
          "#name": {
            bind: function(data, value, $control) {
              if (value != null) data.name = value.toUpperCase();
              return data.name;
            },
            events: "keyup.my"
          },
          "#btn-play": function(data, val) {
            alert(JSON.stringify(data));
          }
        }
      }
    },
    style: {
      " #list>div": "width:400px; border-bottom:1px dotted #aaa;"
    },
    id: "Subform non-uniform list"
  });
});
