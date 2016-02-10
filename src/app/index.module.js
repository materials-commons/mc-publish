/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';
import { LoginController } from './login/login.controller';
import { ReleaseController } from './release/release-controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HomeTabDirective } from '../app/home/home-tab-directive';
import { loginService } from './login/login.service';
import { releaseService } from './release/release-service';

angular.module('mcPublicData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr',  'ct.ui.router.extras'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('loginService', loginService)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('ReleaseController', ReleaseController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('homeTabDirective', HomeTabDirective)
  .service('releaseService', releaseService);
