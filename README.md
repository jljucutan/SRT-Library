# SRT-Library
Collection of validators for front end development.

## Getting Started
Include the css and js files to the formlayout. Like so:

```
<$link;/main/RedCarpet/FormTemplates/FormSupport/css/front_validator.css>" rel="stylesheet" type="text/css">
```

Right before your custom scripts on Main QF Area
```
<script type="text/javascript" src="<$link;/main/RedCarpet/FormTemplates/FormSupport/js/front_validator.js>"></script>
```

### Usage
Input fields requires configuration to work. ceForm fields should have the data-validation attribute.
```
data-validation='required'
```

Acceptable options are
* required
* past-date
* future-date
* regex

data-validation attribute can have multiple options.
```
data-validation='required,past-date'
```

You can call the validator by selected the individual fields you want to be required.
Using jQuery:
```
$('#form-input-button').on('change blur', function() {
    validateField($(this));
});
```

### Notes
The validator will detect the field name title and use it on error labeling. You should therefore set the data-title attibute from FormOptions on ceForm:
```
data-title='Signature'
```
Radio and checkbox fields should have data-label attibutes the points to the id of your desired label. Add on formOptions
```
data-label='#id-of-label'
```

### Todo
* Regex validation

Feel free to contribute by creating pull request.

