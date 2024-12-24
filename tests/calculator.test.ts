import {add} from "../src/calculator";

describe("String Calculator - add", () => {
    // Base cases
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the number itself for a single number", () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    // Basic addition
    it("should return the sum of two numbers separated by a comma", () => {
        expect(add("1,2")).toBe(3);
        expect(add("3,4")).toBe(7);
    });

    it("should return the sum of multiple numbers separated by commas", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("4,5,6,7")).toBe(22);
    });

    // Handling different delimiters
    it("should handle new lines as delimiters in addition to commas", () => {
        expect(add("1\n2,3")).toBe(6); // Mix of new lines and commas
        expect(add("4\n5\n6")).toBe(15); // Only new lines
    });

    it("should handle custom single-character delimiters", () => {
        expect(add("//;\n1;2")).toBe(3); // Delimiter is ";"
        expect(add("//|\n1|2|3")).toBe(6); // Delimiter is "|"
    });

    it("should handle custom multi-character delimiters", () => {
        expect(add("//***\n1***2***3")).toBe(6); // Delimiter is "***"
    });

    // Validation cases
    it("should throw an exception for negative numbers", () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
    });

    // Edge cases
    it("should ignore non-numeric values in the input", () => {
        expect(add("1,a,2")).toBe(3); // "a" is ignored
        expect(add("4,b,5")).toBe(9); // "b" is ignored
    });

    it("should ignore numbers greater than 1000", () => {
        expect(add("2,1001")).toBe(2); // 1001 is ignored
        expect(add("1000,1001,2")).toBe(1002); // Only 1000 and 2 are summed
    });
});