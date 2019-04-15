var _data = _data || {};
$( document ).ready(function() {
    $('#Date-picker').timepicker({
        timeFormat: "HH:mm:ss:l"
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
    var template = _.template(_data.tableLayout());
  $("#form-data-template").html(template({
    formData
  }));
}
function showValue(index){
    debugger;
}