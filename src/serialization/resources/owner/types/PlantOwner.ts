/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../../core";

export const PlantOwner: core.serialization.Schema<serializers.PlantOwner.Raw, PlantStoreApi.PlantOwner> =
    core.serialization
        .union("type", {
            customer: core.serialization.lazyObject(async () => (await import("../../..")).StoreCustomer),
            employee: core.serialization.lazyObject(async () => (await import("../../..")).StoreEmployee),
        })
        .transform<PlantStoreApi.PlantOwner>({
            parse: (value) => {
                switch (value.type) {
                    case "customer":
                        return PlantStoreApi.PlantOwner.customer(value);
                    case "employee":
                        return PlantStoreApi.PlantOwner.employee(value);
                    default:
                        return PlantStoreApi.PlantOwner._unknown(value);
                }
            },
            json: (value) => value as any,
        });

export declare namespace PlantOwner {
    type Raw = PlantOwner.Customer | PlantOwner.Employee;

    interface Customer extends serializers.StoreCustomer.Raw {
        type: "customer";
    }

    interface Employee extends serializers.StoreEmployee.Raw {
        type: "employee";
    }
}