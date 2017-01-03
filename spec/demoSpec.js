describe("demoTest", function() {
    it("demo getName", function() {
        expect(testTarget.name).toEqual("jasmine-test");
    });
    
    it("demo テスト失敗", function() {
        expect(testTarget.name).toEqual("");
    });
});
