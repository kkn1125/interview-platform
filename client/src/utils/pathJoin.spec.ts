import { describe, expect, it } from "vitest";
import { pathJoin } from "./pathJoin";
import { MODE } from "@common/mode";

console.log("mode", MODE);

describe("[TEST] 경로 합치기", () => {
  it("[pathJoin] 경로 1개 일 때", () => {
    const url = pathJoin("/");
    expect(url).toStrictEqual("/");
  });
  it("[pathJoin] 경로 2개 일 때", () => {
    const url = pathJoin("/", "/test");
    expect(url).toStrictEqual("/test");
  });
  it("[pathJoin] 슬래시 없이 경로 2개 일 때", () => {
    const url = pathJoin("interview", "detail");
    expect(url).toStrictEqual("/interview/detail");
  });
});
