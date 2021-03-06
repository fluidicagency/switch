import fluidicSwitch from '../../src/switch';

describe('fluidicSwitch', () => {
  describe('Init function', () => {
    beforeEach(() => {
      stub(fluidicSwitch, 'init');
      fluidicSwitch.init();
    });

    it('should have been run once', () => {
      expect(fluidicSwitch.init).to.have.been.calledOnce;
    });
  });
});
