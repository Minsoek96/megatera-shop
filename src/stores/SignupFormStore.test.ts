import exp from 'constants';
import SignupFormStore from './SignupFormStore';

const signup = jest.fn();

jest.mock('../services/ApiService', () => ({
  get apiService() {
    return {
      signup,
    };
  },
}));

const context = describe;

describe('SignupFormStore', () => {
  let store: SignupFormStore;

  beforeEach(() => {
    jest.clearAllMocks();
    store = new SignupFormStore();
  });

  describe('changeEmail', () => {
    const email = 'tester@example.com';

    it('sets state', () => {
      store.changeEmail(email);

      expect(store.email).toBe(email);
    });
  });
});
