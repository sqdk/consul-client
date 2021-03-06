export const enum RequestType {
    GetRequest = 'GetRequest',
    UpdateRequest = 'UpdateRequest',
    DeleteRequest = 'DeleteRequest',
}

export interface IKey {
    path: string
    dc?: string
}

export interface IKVRequest {
    type: RequestType
    apiVersion: 'v1'
    key: IKey
    token?: string
    index?: number
    subsection?: string
    section?: string
}

export interface IConsulGetRequest extends IKVRequest {
    type: RequestType.GetRequest
    section: 'kv'
}

export interface IConsulUpdateRequest<T = any> extends IKVRequest {
    type: RequestType.UpdateRequest
    section: 'kv'
    value: T
}

export interface IConsulDeleteRequest extends IKVRequest {
    type: RequestType.DeleteRequest
    section: 'kv'
}

export type KVRequest<T = any> =
    IConsulGetRequest |
    IConsulUpdateRequest<T> |
    IConsulDeleteRequest

export interface IConsulMetadata {
    CreateIndex: number
    ModifyIndex: number
    LockIndex: number
    Key: string
    Flags: number
    Value: string // base-64 encoded
    Session: string
}
