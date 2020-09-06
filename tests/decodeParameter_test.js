import { testing } from "../deps.js";
import Abi from "../mod.js";

var tests = [{
  params: [
    "uint256",
    "0x0000000000000000000000000000000000000000000000000000000000000010",
  ],
  result: "16",
}, {
  params: [
    "string",
    "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000",
  ],
  result: "Hello!%!",
}];

Deno.test("decodeParameter should convert correctly", function () {
  tests.forEach(function ({ params, result }) {
    testing.assertEquals(Abi.decodeParameter.apply(Abi, params), result);
  });
});
