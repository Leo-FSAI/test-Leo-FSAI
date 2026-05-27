import { sanitizeForURL } from '../src/utils/textUtils';

describe('sanitizeForURL', () => {
    it("should transform 'My First Post!' to 'my-first-post'", () => {
        expect(sanitizeForURL('My First Post!')).toBe('my-first-post');
    });

    it("should remove special characters resulting in 'special'", () => {
        expect(sanitizeForURL('@#Special!')).toBe('special');
    });

    // Additional test cases can be added as needed
});
