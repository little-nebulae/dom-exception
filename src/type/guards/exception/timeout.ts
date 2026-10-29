import type { TimeoutDOMException } from "@/type/declarations";

import { DOM_EXCEPTION_NAME_ENUM } from "@/constants/names";

export function isTimeoutDOMException(
  exception: DOMException,
): exception is TimeoutDOMException {
  if (exception.name === DOM_EXCEPTION_NAME_ENUM.TIMEOUT_ERROR) {
    return true;
  }
  if (exception.code === DOMException.TIMEOUT_ERR) {
    return true;
  }
  return false;
}
