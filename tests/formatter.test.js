import { formatFileSize } from "../formatter.js";
import { describe, it, test } from "node:test";
import assert from "node:assert";

// describe("formatFileSize function", () => {
//   it('should return "1.00 GB" for sizeBytes = 1073741824', () => {
//     assert.strictEqual(formatFileSize(1073741824), "1.00 GB");
//   });
// });

// test('formatFileSize function', (t) => {
//   t.test('should return "1.00 GB" for sizeBytes = 1073741824', () => {
//     assert.strictEqual(formatFileSize(1073741824), '1.00 GB');
//   });
// });

describe('formatFileSize function', () => {
  // skip
  it.skip("should return '0B' for sizeBytes = 0", () => {
    assert.strictEqual(formatFileSize(0), '0B');
  });

  // another skip
  it("should return '1.00 MB' for sizeBytes = 1048576", { skip: true }, () => {
    assert.strictEqual(formatFileSize(1048576), '1.00 MB');
  });

  it("should return '1.00 GB' for sizeBytes = 1073741824 @large", () => {
    assert.strictEqual(formatFileSize(1073741824), '1.00 GB');
  });

  it("should return '5.00 GB' for sizeBytes = 5368709120 @large", () => {
    assert.strictEqual(formatFileSize(5368709120), '5.00 GB');
  });
});