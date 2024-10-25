import { add } from './calculator';

describe('String Calculator with custom delimiters', () => {
    it('should handle custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    it("should handle new lines between numbers", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should support different delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    it('should throw an error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
    });
});
