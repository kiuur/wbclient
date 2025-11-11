//=======================================================//
import { proto } from "../../WAProto/index.js";
import { platform, release } from "os";
//=======================================================//
const PLATFORM_MAP = {
  "safari": "Safari"
};
//=======================================================//
export const Browsers = {
  iOS: (browser) => ["ios", browser, "18.2"]
};
//=======================================================//
export const getPlatformId = (browser) => {
  const platformType = proto.DeviceProps.PlatformType[browser.toUpperCase()];
  return platformType ? platformType.toString() : "1";
};
//=======================================================//