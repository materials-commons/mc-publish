export class SignController {
  constructor(userService, $state, $uibModalInstance, toastr) {
    'ngInject';

    this.user = {
      email: "",
      password: ""
    };
    this.tab = "login";
    this.userService = userService;
    this.$state = $state;
    this.$uibModalInstance = $uibModalInstance;
    this.toastr = toastr;
  }

  setTab(tab) {
    this.tab = tab;
  }

  isSet(tabId) {
    return this.tab === tabId;
  }

  login() {
    this.userService.getUser(this.user.email).then((result)=> {
      this.user = result;
      this.userService.setAuthentication(this.user);
      this.$uibModalInstance.close();
      this.$state.go("main.home");
      toastr.options = {"closeButton": true};
      toastr.success('Logged in Successfully', this.user.email)
    }, (err) => {
      toastr.options = {"closeButton": true};
      toastr.error(err.data, this.user.email);
    });
  }

  register() {
    this.user.apikey = "abc123";
    this.userService.create(this.user).then((res) => {
      this.setTab('login');
      toastr.options = {"closeButton": true};
      toastr.success('Please login', 'Registered successfully');
    }, (err) => {
      toastr.options = {"closeButton": true};
      toastr.error(err.data, this.user.email);
    });
  }
}



