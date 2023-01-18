/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.owner.add.Request.Raw, PlantStoreApi.AddOwnerRequest> =
  core.schemas.object({
    name: core.schemas.string(),
    age: core.schemas.lazy(async () => (await import("../..")).OwnerAge),
    plants: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Plant)),
  });

export declare namespace Request {
  interface Raw {
    name: string;
    age: serializers.OwnerAge.Raw;
    plants: serializers.Plant.Raw[];
  }
}

export const Response: core.schemas.Schema<serializers.owner.add.Response.Raw, PlantStoreApi.PlantOwner> =
  core.schemas.lazy(async () => (await import("../..")).PlantOwner);

export declare namespace Response {
  type Raw = serializers.PlantOwner.Raw;
}

export const Error: core.schemas.Schema<serializers.owner.add.Error.Raw, PlantStoreApi.owner.add.Error> = core.schemas
  .union("error", {
    OwnerNotFoundError: core.schemas.object({}),
  })
  .transform<PlantStoreApi.owner.add.Error>({
    parse: (value) => {
      switch (value.error) {
        case "OwnerNotFoundError":
          return PlantStoreApi.owner.add.Error.ownerNotFoundError();
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.OwnerNotFoundError;

  interface OwnerNotFoundError {
    error: "OwnerNotFoundError";
  }
}
