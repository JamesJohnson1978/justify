const justify = require("./justify");

const testString = "the quick brown fox jumps over the lazy dog";
const testResult1 = "the\nquick\nbrown\nfox\njumps\nover\nthe\nlazy\ndog";
const testResult2 = "the  quick\nbrown  fox\njumps\nover   the\nlazy dog";
const testResult3 = "the       quick\nbrown       fox\njumps   over  the\nlazy dog";
const testResult4 = "the   quick  brown  fox\njumps   over  the  lazy\ndog";
const testResult5 = "the   quick   brown   fox\njumps over the lazy dog";
const testResult6 = "the    quick   brown   fox   jumps\nover the lazy dog";
const testResult7 = "the   quick  brown  fox  jumps  over  the\nlazy dog";
const testResult8 = "the   quick  brown  fox  jumps  over  the  lazy\ndog";

test('justify 1 length', () => {
    expect(justify(testString,1)).toEqual(testResult1);
});

test('justify 5 length', () => {
    expect(justify(testString,5)).toEqual(testResult1);
});

test('justify 10 length', () => {
    expect(justify(testString,10)).toEqual(testResult2);
});

test('justify 15 length', () => {
    expect(justify(testString,15)).toEqual(testResult3);
});

test('justify 20 length', () => {
    expect(justify(testString,20)).toEqual(testResult4);
});

test('justify 25 length', () => {
    expect(justify(testString,25)).toEqual(testResult5);
});

test('justify 30 length', () => {
    expect(justify(testString,30)).toEqual(testResult6);
});

test('justify 35 length', () => {
    expect(justify(testString,35)).toEqual(testResult7);
});

test('justify 40 length', () => {
    expect(justify(testString,40)).toEqual(testResult8);
});

test('justify 45 length', () => {
    expect(justify(testString,45)).toEqual(testString);
});
