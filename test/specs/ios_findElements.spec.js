describe('iOS', ()=> {

    it('test',async()=>{

        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })
});