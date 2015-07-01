import alt from '../alt';
import appActions from '../actions/AppActions';

class AppStore {

  constructor() {
    this.bindActions(appActions);
    this.state = { logined: false };
  }

  onLogin() {
    this.setState({ logined: true });
  }

  onLogout() {
    this.setState({ logined: false });
  }

}

export default alt.createStore(AppStore, 'AppStore');
