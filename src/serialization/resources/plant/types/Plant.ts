/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../../core";

export const Plant: core.serialization.ObjectSchema<serializers.Plant.Raw, PlantStoreApi.Plant> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).PlantId).optional(),
        category: core.serialization.lazyObject(async () => (await import("../../..")).PlantCategory).optional(),
        name: core.serialization.string(),
        photoUrls: core.serialization.record(core.serialization.string(), core.serialization.string()),
        status: core.serialization.lazy(async () => (await import("../../..")).PlantStatus).optional(),
    });

export declare namespace Plant {
    interface Raw {
        id?: serializers.PlantId.Raw | null;
        category?: serializers.PlantCategory.Raw | null;
        name: string;
        photoUrls: Record<string, string>;
        status?: serializers.PlantStatus.Raw | null;
    }
}
