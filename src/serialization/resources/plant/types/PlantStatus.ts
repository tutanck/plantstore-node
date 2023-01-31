/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../../core";

export const PlantStatus: core.serialization.Schema<serializers.PlantStatus.Raw, PlantStoreApi.PlantStatus> =
    core.serialization.enum_(["available", "pending", "sold"]);

export declare namespace PlantStatus {
    type Raw = "available" | "pending" | "sold";
}