import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main.controller.js';
import {HomeController} from './home/home.controller';
import {SignController} from '../app/components/sign/sign-controller';
import {LoginDirective} from '../app/components/sign/login/login.directive';
import {RegisterDirective} from '../app/components/sign/register/register-directive';
import {SearchController} from './search/search-controller';
import {RecentDatasetsController} from './home/datasets/recent-datasets-controller';
import {TopDatasetsController} from './home/datasets/top-datasets-controller';
import {PopUpController} from './details/pop-up-controller';
import {DetailsController} from './details/details-controller';
import {BrowseController} from './browse/browse-controller';
import {TagController} from './tags/tags-controller';
import {BrowseDatasetsController} from './browse/datasets/browse-datasets-controller';
import {BrowseTagsController} from './browse/tags/browse-tags-controller';
import {BrowseAuthorsController} from './browse/authors/browse-author-controller';
import {CommentDirective} from './details/comment-directive';
import {DatasetDetailsOutlineController, mcpubDatasetDetailsOutlineDirDirective} from './details/mcpub-dataset-details-outline.component';
import {MCPubDatasetDetailsFilesListComponentController} from './details/mcpub-dataset-details-files-list.component';
import {MCPubProcessDetailsComponentController} from './details/mcpub-process-details.component';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {HomeTabDirective} from '../app/home/home-tab-directive';
import {SearchBarDirective} from '../app/directives/search-bar-directive';
import {PropertyValueDirective} from '../app/directives/property-value-directive';
import {DisplayImageDirective} from '../app/directives/display-image-directive';
import {releaseService} from './services/release-service';
import {searchService} from './search/search-service';
import {userService} from './services/user-service';
import {actionsService} from './services/actions-service';
import {browseService} from '../app/browse/browse-service';
import {bytesFilter} from '../app/filters/bytes-filter';
import {toDateStringFilter} from '../app/filters/to-date-string-filter';
import {pubAPIService} from './services/pub-api.service';
import {mcapiService} from './services/mc-api.service';
import {AccountsService} from './services/accounts-service.service';
import {ValidateController} from './components/sign/validate/validate.controller';

angular.module('mcpub', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
    'restangular', 'ui.router', 'ui.bootstrap', 'toastr', 'ct.ui.router.extras',
    'angularUtils.directives.dirPagination', 'RecursionHelper',
    'ngTagsInput', 'ngFileUpload'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('HomeController', HomeController)
    .controller('SignController', SignController)
    .controller('SearchController', SearchController)
    .controller('RecentDatasetsController', RecentDatasetsController)
    .controller('TopDatasetsController', TopDatasetsController)
    .controller('PopUpController', PopUpController)
    .controller('DetailsController', DetailsController)
    .controller('BrowseController', BrowseController)
    .controller('TagController', TagController)
    .controller('BrowseDatasetsController', BrowseDatasetsController)
    .controller('BrowseTagsController', BrowseTagsController)
    .controller('BrowseAuthorsController', BrowseAuthorsController)
    .controller('ValidateController', ValidateController)
    .directive('mcpubNavbar', NavbarDirective)
    .directive('homeTabDirective', HomeTabDirective)
    .directive('searchBarDirective', SearchBarDirective)
    .directive('propertyValue', PropertyValueDirective)
    .directive('displayImage', DisplayImageDirective)
    .directive('loginDirective', LoginDirective)
    .directive('registerDirective', RegisterDirective)
    .directive('commentDirective', CommentDirective)
    .service('pubAPI', pubAPIService)
    .service('mcapi', mcapiService)
    .service('accountsService', AccountsService)
    .service('releaseService', releaseService)
    .service('searchService', searchService)
    .service('userService', userService)
    .service('actionsService', actionsService)
    .service('browseService', browseService)
    .filter('bytesFilter', bytesFilter)
    .filter('toDateStringFilter', toDateStringFilter);

angular.module('mcpub').component('mcpubDatasetDetailsOutline', {
    templateUrl: 'app/details/mcpub-dataset-details-outline.html',
    controller: DatasetDetailsOutlineController,
    bindings: {
        dataset: '<'
    }
});

angular.module('mcpub').component('mcpubDatasetDetailsFilesList', {
    templateUrl: 'app/details/mcpub-dataset-details-files-list.html',
    controller: MCPubDatasetDetailsFilesListComponentController,
    bindings: {
        dataset: '<'
    }
});

angular.module('mcpub').component('mcpubProcessDetails', {
    templateUrl: 'app/details/mcpub-process-details.html',
    controller: MCPubProcessDetailsComponentController,
    bindings: {
        process: '<'
    }
});

angular.module('mcpub').directive('mcpubDatasetDetailsOutlineDir', mcpubDatasetDetailsOutlineDirDirective);
