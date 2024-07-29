import { describe, expect, it } from "vitest";
import { sliceGroup } from "./sliceGroup";

describe("[TEST] sliceGroup", () => {
  it("sliceGroup: 3group", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = sliceGroup(array, 3);
    expect(result.length).toStrictEqual(3);
  });
});
