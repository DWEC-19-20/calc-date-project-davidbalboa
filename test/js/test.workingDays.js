var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcWorkingDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),14)).to.equal("1/11/2019");
    });
});

suite("Testing getWorkingDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13),new Date(2019, 10, 31))).to.equal(13);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 31),new Date(2019, 9, 13))).to.equal(-49);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 30), new Date(2019, 10, 30))).to.equal(0);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 30), new Date(2019, 10, 31))).to.equal(1);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 30), new Date(2019, 11, 30))).to.equal(21);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 29), new Date(2019, 10, 28))).to.equal(-1);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 13), new Date(2021, 10, 28))).to.equal(526);
    });
    test("Test pasado", function () {
        expect(getWorkingDays(new Date(2019, 10, 13), new Date(2030, 10, 28))).to.equal(2847);
    });
});
