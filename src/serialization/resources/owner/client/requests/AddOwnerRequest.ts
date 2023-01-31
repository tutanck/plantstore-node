/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../../../core";

export const AddOwnerRequest: core.serialization.Schema<
    serializers.AddOwnerRequest.Raw,
    PlantStoreApi.AddOwnerRequest
> = core.serialization.object({
    name: core.serialization.string(),
    age: core.serialization.lazy(async () => (await import("../../../..")).OwnerAge),
    plants: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../..")).Plant)),
});

export declare namespace AddOwnerRequest {
    interface Raw {
        name: string;
        age: serializers.OwnerAge.Raw;
        plants: serializers.Plant.Raw[];
    }
}
