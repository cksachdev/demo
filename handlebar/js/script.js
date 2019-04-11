
        //4a.function creation
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var context ={
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
              }]};
        var output = template(context);
        $("body").append(output);