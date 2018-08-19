// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// ---------------------------------------------------------------------------
// API Client Interfaces
//----------------------------------------------------------------------------

import Serialization = require('../../Serialization');
export {IRequestHandler,IRequestOptions ,IHttpClientResponse,IHeaders,IProxyConfiguration,ICertConfiguration} from 'typed-rest-client/Interfaces';

/**
 * Information about the location of a REST API resource
 */
export interface ApiResourceLocation {
    /**
     * Area name for this resource
     */
    area: string;
    /**
     * Unique Identifier for this location
     */
    id: string;
    /**
     * Maximum api version that this resource supports (current server version for this resource)
     */
    maxVersion: string;
    /**
     * Minimum api version that this resource supports
     */
    minVersion: string;
    /**
     * The latest version of this resource location that is in "Release" (non-preview) mode
     */
    releasedVersion: string;
    /**
     * Resource name
     */
    resourceName: string;
    /**
     * The current resource version supported by this resource location
     */
    resourceVersion: number;
    /**
     * This location's route template (templated relative path)
     */
    routeTemplate: string;
}


