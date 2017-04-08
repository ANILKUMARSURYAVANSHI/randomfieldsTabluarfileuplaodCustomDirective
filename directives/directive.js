

function customField() {
  return {
    restrict: "E",
    scope: {
      alterField: "&",
      type: "=type",
      options: "=options",
      canEdit: "=canEdit",
      field: "=field",
      value: "=value"
    },
    controller: "customFieldController",
    link: function (scope, element, attr) {
      if (scope.type != "") {
        if (scope.type === "CHECKBOX") {
          scope.contentUrl = "directives/customeFields/checkbox.html";
        } else if (scope.type === "RADIO") {
          scope.contentUrl = "directives/customeFields/radio.html";
        } else if (scope.type === "TEXT" ) {
          scope.contentUrl = "directives/customeFields/text.html";
        }  else if (scope.type === "DROPDOWN") {
          scope.contentUrl = "directives/customeFields/dropdown.html";
        } else if (scope.type === "DATE") {
          scope.contentUrl = "directives/customeFields/text.html";
        } else if (scope.type === "FILE") {
          scope.contentUrl = "directives/customeFields/uploadfile.html";
        }
      } else {
        scope.contentUrl = "directives/customeFields/notype.html";
      }
    },
    template: '<div ng-include="contentUrl"></div>'
  };
}


angular
  .module('myapp')
  .directive('customField', customField)