export function PropertyValueDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/property-value.html',
    scope:{
      property: "@",
      value: "=",
      apply: "@"
    },
    controller: PropertyValueController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return directive;
}

class PropertyValueController {

  constructor () {
    'ngInject';
  }
}
