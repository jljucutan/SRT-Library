var validateField = function(field) {
    // please add data-title="field name" on form field
    var fieldName = field.data("title") ? field.data("title") : field.prop("title");
    var validations = [];
    var isRequired = false;

    if (field.data('validation')) {
        validations = field.data('validation').split(',');
    }

    if (validations.indexOf('required') > -1) {
        isRequired = true;
    }


    // validate checkbox or radio 
    // this field request data-label attribute that
    // targets id of label
    if (isRequired && (field.is(':checkbox') || field.is(':radio'))) {
        var checkboxGroup = $('[name="' + field.prop('name') + '"]'),
            checked = false;
        $.each(checkboxGroup, function(key, val) {
            if ($(val).is(':checked')) {
              checked = true;
            }
        });
        // require if checked or not
        if (!checked) {
            $(field.data("label")).addClass('label-has-error');
            return false;
        } 
        $(field.data("label")).removeClass('label-has-error');
        return true;
    }
    // validate input fields
    else {
        var isValid = true; 
        var messages = [];
        var d = new Date(),
        var = fieldArr = field.val().split('/');
        var fieldDate = new Date(fieldArr[2] + "-" + fieldArr[1] + "-" + fieldArr[0]);

        // validate if required
        if (isRequired && field.val().length < 1) {
            message = fieldName + " is required.";
            isValid = false;
        }

        // validate if date is past or future
        if (field.val().length > 0 && validations.indexOf('past-date') > -1 && fieldDate >= d) {
            message = fieldName + " accepts only past date.";
            isValid =  false;
        }
        if (field.val().length > 0 && validations.indexOf('future-date') > -1 && fieldDate < d) {
            message = fieldName + " accepts only future date.";
            isValid =  false;
        }

        if (field.val().length > 0 && validations.indexOf('regex') > -1) {
        }

        var errorContainer = $('[data-error-id="' + field.prop("name") + '"]');
        var errorContainerTemplate = $('<span class="text-error" data-error-id="' + field.prop("name") + '" />');
        var inputContainer = field.closest("div");

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
