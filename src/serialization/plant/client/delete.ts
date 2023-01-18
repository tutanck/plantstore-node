/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export const Error: core.schemas.Schema<serializers.plant.delete.Error.Raw, PlantStoreApi.plant.delete.Error> =
  core.schemas
    .union("error", {
      PlantNotFoundError: core.schemas.object({}),
      InvalidIdSuppliedError: core.schemas.object({}),
    })
    .transform<PlantStoreApi.plant.delete.Error>({
      parse: (value) => {
        switch (value.error) {
          case "PlantNotFoundError":
            return PlantStoreApi.plant.delete.Error.plantNotFoundError();
          case "InvalidIdSuppliedError":
            return PlantStoreApi.plant.delete.Error.invalidIdSuppliedError();
        }
      },
      json: (value) => value as any,
    });

export declare namespace Error {
  type Raw = Error.PlantNotFoundError | Error.InvalidIdSuppliedError;

  interface PlantNotFoundError {
    error: "PlantNotFoundError";
  }

  interface InvalidIdSuppliedError {
    error: "InvalidIdSuppliedError";
  }
}
