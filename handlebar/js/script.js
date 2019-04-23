//4a.function creation
var _data = _data || {};
$( document ).ready(function() {
    $('#Date-picker').timepicker({
        timeFormat: "HH:mm:ss:l"
    });
    
});
Handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
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
    addSortable();
}
function addSortable(){
  $( "#appendText > table > tbody" ).sortable( {
    update: function( event, ui ) {
    $(this).children().each(function(index) {
            $(this).find('tr').last().html(index + 1)
    });
  }
});
}
function resetForm() {
  $("input[name=name]").val("");
  $("input[name=Date-picker]").val("");
  $("input[name=limit]").val("");
}
function renderTemplate(){
  var source =   $("#some-template").html();
 var template = Handlebars.compile(source);
 var html = template({
  formData: formData
})
$('#appendText').empty();
$('#appendText').append(html);
}

function showValue(val){
  alert(JSON.stringify(val));
}
function deleteRow(index){
  formData.splice(index, 1);
    renderTemplate();
}
// var context = {
//   "templateName": "defaultForm",
//   "fields": [{
//       "code": "name",
//       "dataType": "text",
//       "description": "Title of the content",
//       "editable": true,
//       "inputType": "text",
//       "label": "Title",
//       "name": "Title",
//       "placeholder": "Enter the Title ",
//       "renderingHints": {},
//       "required": true,
//       "visible": true
//     }, {
//       "code": "description",
//       "dataType": "text",
//       "description": "Brief description",
//       "editable": true,
//       "inputType": "textarea",
//       "label": "Description",
//       "name": "Description",
//       "placeholder": "Description",
//       "renderingHints": {},
//       "required": true,
//       "visible": true
//     },
//     {
//       "code": "keywords",
//       "dataType": "list",
//       "description": "Keywords for the content",
//       "editable": true,
//       "inputType": "keywordsuggestion",
//       "label": "keywords",
//       "name": "Keywords",
//       "placeholder": "Enter Keywords",
//       "required": true,
//       "visible": true
//     }
//   ]
// };
// var source = $("#entry-template").html();
// var template = Handlebars.compile(source);
// var output = template(context);
// console.log(output);
// $("body").append(output);