/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { PlantStoreApi } from "@fern-api/plantstore";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.PlantStoreApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Add a new owner as a customer of the store.
     * @throws {PlantStoreApi.OwnerNotFoundError}
     */
    public async add(request: PlantStoreApi.AddOwnerRequest): Promise<PlantStoreApi.PlantOwner> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PlantStoreApiEnvironment.Production, "/owner"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.AddOwnerRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.PlantOwner.parse(_response.body as serializers.PlantOwner.Raw);
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "OwnerNotFoundError":
                    throw new PlantStoreApi.OwnerNotFoundError();
                default:
                    throw new errors.PlantStoreApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PlantStoreApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PlantStoreApiTimeoutError();
            case "unknown":
                throw new errors.PlantStoreApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async delete(ownerId: PlantStoreApi.OwnerId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PlantStoreApiEnvironment.Production,
                `/owner/${ownerId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PlantStoreApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PlantStoreApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PlantStoreApiTimeoutError();
            case "unknown":
                throw new errors.PlantStoreApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}