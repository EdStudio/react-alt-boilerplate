import alt from '../alt';

class AppActions {

  constructor() {
    this.generateActions('login', 'logout');
  }

}

export default alt.createActions(AppActions);
