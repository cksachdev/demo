var _data = _data || {};
_data.tableLayout = function () {
    return '  <% _.each(formData, function(val,key,index) { %> \
    <tr>\
        <td>\
        <h4>\
                <div class="content">\
                <%= val.name %> \
                   </div>\
            </h4>\
        </td>\
        <td>\
        <%= val.dob %> \
        </td>\
        <td>\
        <%= val.Limit %> \
        </td>\
        <td>\
        <button class="ui secondary basic button" onclick="citeResponse(<%= JSON.stringify(val) %>)">show</button>\
        </td>\
    </tr>\
    <% }); %> '
}
