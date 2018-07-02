# SRT-Library
Collection of validators for front end development.

## Getting Started
Include the css and js files to the formlayout. Like so:

```
<$link;/main/RedCarpet/FormTemplates/FormSupport/css/front_validator.css>" rel="stylesheet" type="text/css">

```

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

