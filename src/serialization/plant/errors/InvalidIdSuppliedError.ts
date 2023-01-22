/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export const InvalidIdSuppliedError: core.schemas.Schema<
  serializers.InvalidIdSuppliedError.Raw,
  PlantStoreApi.InvalidIdSuppliedError
> = core.schemas.lazyObject(async () => (await import("../..")).InvalidId);

export declare namespace InvalidIdSuppliedError {
  type Raw = serializers.InvalidId.Raw;
}
