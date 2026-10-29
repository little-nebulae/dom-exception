import type { DOM_EXCEPTION_NAME_ENUM } from "@/constants/names";

export interface AbortDOMException extends DOMException {
  name: typeof DOM_EXCEPTION_NAME_ENUM.ABORT_ERROR;
  code: DOMException["ABORT_ERR"];
}

export interface TimeoutDOMException extends DOMException {
  name: typeof DOM_EXCEPTION_NAME_ENUM.TIMEOUT_ERROR;
  code: DOMException["TIMEOUT_ERR"];
}
