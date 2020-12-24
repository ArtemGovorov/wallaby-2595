import { deepCloneJSON, deepClone } from "./utilities";

describe("Clone", () => {
  it("Clone", async () => {
    let times = 10000;
    const object = {};
    while (times--) {
      deepClone(object); /*?.*/
    }
    times = 10000;
    while (times--) {
      deepCloneJSON(object); /*?.*/
    }
  });
});