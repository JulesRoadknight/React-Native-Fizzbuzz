describe('Checking a number', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  })

  it('should display a number', async () => {
    await element(by.id('numberField')).tap();
    await element(by.id('numberField')).typeText('1\n');
    await element(by.id('submitNumber')).tap();

    await expect(element(by.id('numberField'))).toHaveText('');
    await expect(element(by.label('1'))).toBeVisible();
  })
})