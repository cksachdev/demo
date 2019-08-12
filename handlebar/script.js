//4a.function creation
var _data = _data || {};
$( document ).ready(function() {
    $('#Date-picker').timepicker({
        timeFormat: "HH:mm:ss:l"
    });
    $( "table tbody" ).sortable( {
        update: function( event, ui ) {
        $(this).children().each(function(index) {
                $(this).find('tr').last().html(index + 1)
        });
      }
    });
});

var formData=[];
function submitform(){
   var formValue={
        "name":"",
        "dob":"",
        "Limit":""
    };
    formValue.name=$("input[name=name]").val();
    formValue.dob=$("input[name=Date-picker]").val();
    formValue.Limit=$("input[name=limit]").val();
    formData.push(formValue);
    renderTemplate();
    resetForm();
}
function resetForm() {
  $("input[name=name]").val("");
  $("input[name=Date-picker]").val("");
  $("input[name=limit]").val("");
}
function renderTemplate(){
  var source = $("#form-data-template").html(); 
var template = Handlebars.compile(source);
//$('body').append(template(data));
}
var context = {
  "templateName": "defaultForm",
  "fields": [{
      "code": "name",
      "dataType": "text",
      "description": "Title of the content",
      "editable": true,
      "inputType": "text",
      "label": "Title",
      "name": "Title",
      "placeholder": "Enter the Title ",
      "renderingHints": {},
      "required": true,
      "visible": true
    }, {
      "code": "description",
      "dataType": "text",
      "description": "Brief description",
      "editable": true,
      "inputType": "textarea",
      "label": "Description",
      "name": "Description",
      "placeholder": "Description",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "keywords",
      "dataType": "list",
      "description": "Keywords for the content",
      "editable": true,
      "inputType": "keywordsuggestion",
      "label": "keywords",
      "name": "Keywords",
      "placeholder": "Enter Keywords",
      "required": true,
      "visible": true
    }
  ]
};
var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var output = template(context);
console.log(output);
$("body").append(output);