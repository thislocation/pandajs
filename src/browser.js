import PandaDevice from './impl/browser';
import PandaAPI from './panda';

export const SAFETY_NOOUTPUT = 0;
export const SAFETY_HONDA = 1;
export const SAFETY_TOYOTA = 2;
export const SAFETY_HONDA_BOSCH = 4;
export const SAFETY_TOYOTA_NOLIMITS = 0x1336;
export const SAFETY_ALLOUTPUT = 0x1337;
export const SAFETY_ELM327 = 0xE327;

export default function Panda (options) {
  options = options || {};

  var device = new PandaDevice(options, navigator.usb);
  options.device = device;
  return new PandaAPI(options);
}
