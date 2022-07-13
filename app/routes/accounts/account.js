import Route from '@ember/routing/route';

export default class AccountsAccountRoute extends Route {
  beforeModel({ to }) {
    to.find(function (item, index, array) {
      console.log('accounts.account#beforeModel:', {
        item,
        index,
        array,
        parent: item?.parent,
      });
    });
  }
}
