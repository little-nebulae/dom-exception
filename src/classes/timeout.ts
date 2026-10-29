import { BaseError } from "@little-nebulae/error";

import type { TimeoutDOMException } from "@/type/declarations";

import { DOM_ERROR_CODE_ENUM } from "@/constants/codes";

export class TimeoutDOMError extends BaseError<
  typeof DOM_ERROR_CODE_ENUM.TIMEOUT,
  TimeoutDOMException
> {
  readonly name = "TimeoutDOMError";
  readonly code = DOM_ERROR_CODE_ENUM.TIMEOUT;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: TimeoutDOMException;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
