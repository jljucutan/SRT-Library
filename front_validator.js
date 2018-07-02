var validateField = function(field) {
    // please add data-title="field name" on form field
    var fieldName = field.data("title") ? field.data("title") : field.prop("title");
    // validate checkbox or radio 
    // this field request data-label attribute that
    // targets id of label
    if (field.is(':checkbox') || field.is(':radio')) {
        var checkboxGroup = $('[name="' + field.prop('name') + '"]'),
            checked = false;
        $.each(checkboxGroup, function(key, val) {
            if ($(val).is(':checked')) {
              checked = true;
            }
        });
        // require if checked or not
        if (!checked) {
            $(field.data("label")).addClass('label-has-error')
            return false;
        } 
        $(field.data("label")).removeClass('label-has-error')
        return true;
    }
    // validate input fields
    else {
        var isValid = true, message = "";

        // validate if required
        if (field.val().length < 1) {
            message = fieldName + " is required.";
            isValid = false;
        }

        // validate if date is past or future
        if (field.val().length > 1 && field.data('accepts-date')) {
          var d = new Date(),
            fieldArr = field.val().split('/'),
            fieldDate = new Date(fieldArr[2] + "-" + fieldArr[1] + "-" + fieldArr[0]);
          switch(field.data('accepts-date')) {
            case 'future':
              if (fieldDate < d) {
                message = fieldName + " accepts only future date.";
                isValid =  false;
              }
            break;
            case 'past':
              if (fieldDate >= d) {
                message = fieldName + " accepts only past date.";
                isValid =  false;
              }
            break;
            default:
              isValid =  true;
          }
        }

        var errorContainer = $('[data-error-id="' + field.prop("name") + '"]'),
            errorContainerTemplate = $('<span class="text-error" data-error-id="' + field.prop("name") + '" />'),
            inputContainer = field.closest("div");

        if (!isValid) {
            field.addClass('input-error')
            if (!errorContainer.length) {
                inputContainer.append(errorContainerTemplate.html(message).css({'display': 'inline-block'}));
            } 
            errorContainer.html(fieldName + " is required.").css({'display': 'inline-block'});
            return isValid;
        } 
        field.removeClass('input-error');
        if (errorContainer.length) {
            errorContainer.css({'display': 'none'});
        } 
        return isValid;
    }

}
