import { BaseError } from "@little-nebulae/error";

import type { AbortDOMException } from "@/type/declarations";

import { DOM_ERROR_CODE_ENUM } from "@/constants/codes";

export class AbortDOMError extends BaseError<
  typeof DOM_ERROR_CODE_ENUM.ABORT,
  AbortDOMException
> {
  readonly name = "AbortDOMError";
  readonly code = DOM_ERROR_CODE_ENUM.ABORT;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: AbortDOMException;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
