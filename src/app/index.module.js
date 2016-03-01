
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main.controller.js';
import { HomeController } from './home/home.controller';
import { LoginController } from '../app/components/login/login.controller';
import { RegisterController } from '../app/components/register/register-controller';
import { SearchController } from './search/search-controller';
import { RecentDatasetsController } from './home/datasets/recent-datasets-controller';
import { TopDatasetsController } from './home/datasets/top-datasets-controller';
import { PopUpController } from './search/pop-up-controller';
import { DetailsController } from './details/details-controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HomeTabDirective } from '../app/home/home-tab-directive';
import { SearchBarDirective } from '../app/directives/search-bar-directive';
import { PropertyValueDirective } from '../app/directives/property-value-directive';
import { DisplayImageDirective } from '../app/directives/display-image-directive';
import { releaseService } from './services/release-service';
import { searchService } from './search/search-service';
import { userService } from './services/user-service';


angular.module('mcPublicData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr',  'ct.ui.router.extras', 'angularUtils.directives.dirPagination'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('SearchController', SearchController)
  .controller('RecentDatasetsController', RecentDatasetsController)
  .controller('TopDatasetsController', TopDatasetsController)
  .controller('PopUpController', PopUpController)
  .controller('DetailsController', DetailsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('homeTabDirective', HomeTabDirective)
  .directive('searchBarDirective', SearchBarDirective)
  .directive('propertyValue', PropertyValueDirective)
  .directive('displayImage', DisplayImageDirective)
  .service('releaseService', releaseService)
  .service('searchService', searchService)
  .service('userService', userService)

