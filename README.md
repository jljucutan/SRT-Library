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

You can call the validator by selected the individual fields you want to be required.
Using jQuery:
```
validateField($('input#myRequiredField.required'));
```
Using vanilla js:
```
validateField(document.getElementById('myRequiredField'));
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

