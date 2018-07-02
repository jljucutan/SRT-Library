var listErrors = function(errorArr) {
    var list = $('<ul class="list-unstyled"/>');
    if (!errorArr.length) {
        return;
    }
    list.html(
        $.each(errorArr, function(k,v) {
            $('<li/>').text(v);
        });
    );
    return list;
}

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
        var hasVal = field.val().length > 0;
        var messages = [];
        var d = new Date(),
        var = fieldArr = field.val().split('/');
        var fieldDate = new Date(fieldArr[2] + "-" + fieldArr[1] + "-" + fieldArr[0]);

        // validate if required
        if (isRequired && field.val().length < 1) {
            message.push(fieldName + " is required.");
            isValid = false;
        }

        // validate if date is past or future
        if (hasVal && validations.indexOf('past-date') > -1 && fieldDate >= d) {
            message.push(fieldName + " accepts only past date."); 
            isValid =  false;
        }
        if (hasVal && validations.indexOf('future-date') > -1 && fieldDate < d) {
            messages.push(fieldName + " accepts only future date.");
            isValid =  false;
        }

        // validates and compares regex to value
        if (hasVal && validations.indexOf('regex') > -1) {
            var reg = new Regex(field.data('regex'));
            if (false == reg.test(field.val())) {
                messages.push(fieldName + " must match the constraint value");
            }
        }

        // validates field length
        if (hasVal && field.prop('minlength') && field.val() < field.prop('minlength')) {
            messages.push(fieldName + " should not be less than " + field.prop('minlength') + "characters");
        }
        if (hasVal && field.prop('maxlength') && field.val() > field.prop('maxlength')) {
            messages.push(fieldName + " should not exceed more than " + field.prop('maxlength') + "characters");
        }

        var errorContainer = $('[data-error-id="' + field.prop("name") + '"]');
        var errorContainerTemplate = $('<span class="text-error" data-error-id="' + field.prop("name") + '" />');
        var inputContainer = field.closest("div");

        if (!isValid) {
            field.addClass('input-error')
            if (!errorContainer.length) {
                inputContainer.append(errorContainerTemplate.html(listError(messages)).css({'display': 'inline-block'}));
            } 
            errorContainer.html(listError(messages)).css({'display': 'inline-block'});
            return isValid;
        } 
        field.removeClass('input-error');
        if (errorContainer.length) {
            errorContainer.css({'display': 'none'});
        } 
        return isValid;
    }
}
