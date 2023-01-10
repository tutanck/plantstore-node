/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export type Response = core.APIResponse<void, PlantStoreApi.plant.add.Error>;
export type Error = PlantStoreApi.plant.add.Error.InvalidResponseError | PlantStoreApi.plant.add.Error._Unknown;

export declare namespace Error {
  interface InvalidResponseError extends _Utils {
    statusCode: 405;
  }

  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: PlantStoreApi.plant.add.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    invalidResponseError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  invalidResponseError: (): PlantStoreApi.plant.add.Error.InvalidResponseError => {
    const valueWithoutVisit: Omit<PlantStoreApi.plant.add.Error.InvalidResponseError, "_visit"> = {
      statusCode: 405,
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: PlantStoreApi.plant.add.Error.InvalidResponseError, visitor: PlantStoreApi.plant.add.Error._Visitor<_Result>) {
      return PlantStoreApi.plant.add.Error._visit(this, visitor);
    });
  },

  _unknown: (fetcherError: core.Fetcher.Error): PlantStoreApi.plant.add.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<PlantStoreApi.plant.add.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: PlantStoreApi.plant.add.Error._Unknown, visitor: PlantStoreApi.plant.add.Error._Visitor<_Result>) {
      return PlantStoreApi.plant.add.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: PlantStoreApi.plant.add.Error,
    visitor: PlantStoreApi.plant.add.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      case 405:
        return visitor.invalidResponseError();
      default:
        return visitor._other(value as any);
    }
  },
} as const;
