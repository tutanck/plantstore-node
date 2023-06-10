/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PlantStoreApi } from "@fern-api/plantstore";

export interface AddPlantRequest {
    id?: PlantStoreApi.PlantId;
    category?: PlantStoreApi.PlantCategory;
    name: string;
    photoUrls: Record<string, string>;
    status?: PlantStoreApi.PlantStatus;
}
