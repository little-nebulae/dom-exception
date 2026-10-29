import type { DOM_EXCEPTION_NAME_ENUM } from "@/constants/names";

export interface AbortDOMException extends DOMException {
  name: typeof DOM_EXCEPTION_NAME_ENUM.ABORT_ERROR;
}

export interface TimeoutDOMException extends DOMException {
  name: typeof DOM_EXCEPTION_NAME_ENUM.TIMEOUT_ERROR;
}
