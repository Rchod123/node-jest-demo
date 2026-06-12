const sum = require("./sum");

test('add 1+2 equals 3', () => {
    expect(sum(1,2)).toBe(3);
});
test('add 1+2 not equals 4', () => {
    expect(sum(1,2)).not.toBe(4);
});
test('add 0+2 not equals 1', () => {
    expect(sum(0,2)).not.toBe(1);
});