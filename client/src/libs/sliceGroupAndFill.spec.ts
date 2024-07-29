import { describe, expect, it } from "vitest";
import { sliceGroupAndFill } from "./sliceGroupAndFill";

describe("[TEST] sliceGroupAndFill", () => {
  it("sliceGroupAndFill: 3group", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = sliceGroupAndFill(array, 3, null);
    expect(result.length).toStrictEqual(3);
    expect(result.at(-1)?.length).toStrictEqual(3);
  });
});
