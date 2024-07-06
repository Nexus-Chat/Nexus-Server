// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=.ts"
// @generated from file protobuf/chat/v1/chat.proto (package protobuf.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Chat } from "../../model/chat/v1/chat_pb.ts";

/**
 * @generated from message protobuf.chat.v1.GetChatRequest
 */
export class GetChatRequest extends Message<GetChatRequest> {
  /**
   * @generated from field: string chat_id = 1;
   */
  chatId = "";

  constructor(data?: PartialMessage<GetChatRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.GetChatRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatRequest {
    return new GetChatRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatRequest {
    return new GetChatRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatRequest {
    return new GetChatRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetChatRequest | PlainMessage<GetChatRequest> | undefined, b: GetChatRequest | PlainMessage<GetChatRequest> | undefined): boolean {
    return proto3.util.equals(GetChatRequest, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.GetChatResponse
 */
export class GetChatResponse extends Message<GetChatResponse> {
  /**
   * @generated from field: protobuf.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<GetChatResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.GetChatResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatResponse {
    return new GetChatResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatResponse {
    return new GetChatResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatResponse {
    return new GetChatResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetChatResponse | PlainMessage<GetChatResponse> | undefined, b: GetChatResponse | PlainMessage<GetChatResponse> | undefined): boolean {
    return proto3.util.equals(GetChatResponse, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.GetUserChatsRequest
 */
export class GetUserChatsRequest extends Message<GetUserChatsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  constructor(data?: PartialMessage<GetUserChatsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.GetUserChatsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserChatsRequest {
    return new GetUserChatsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserChatsRequest {
    return new GetUserChatsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserChatsRequest {
    return new GetUserChatsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserChatsRequest | PlainMessage<GetUserChatsRequest> | undefined, b: GetUserChatsRequest | PlainMessage<GetUserChatsRequest> | undefined): boolean {
    return proto3.util.equals(GetUserChatsRequest, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.GetUserChatsResponse
 */
export class GetUserChatsResponse extends Message<GetUserChatsResponse> {
  /**
   * @generated from field: repeated protobuf.model.chat.v1.Chat chats = 1;
   */
  chats: Chat[] = [];

  constructor(data?: PartialMessage<GetUserChatsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.GetUserChatsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chats", kind: "message", T: Chat, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserChatsResponse {
    return new GetUserChatsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserChatsResponse {
    return new GetUserChatsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserChatsResponse {
    return new GetUserChatsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetUserChatsResponse | PlainMessage<GetUserChatsResponse> | undefined, b: GetUserChatsResponse | PlainMessage<GetUserChatsResponse> | undefined): boolean {
    return proto3.util.equals(GetUserChatsResponse, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateDirectRequest
 */
export class CreateDirectRequest extends Message<CreateDirectRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string recipient_user_id = 2;
   */
  recipientUserId = "";

  constructor(data?: PartialMessage<CreateDirectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateDirectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "recipient_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDirectRequest {
    return new CreateDirectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDirectRequest {
    return new CreateDirectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDirectRequest {
    return new CreateDirectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDirectRequest | PlainMessage<CreateDirectRequest> | undefined, b: CreateDirectRequest | PlainMessage<CreateDirectRequest> | undefined): boolean {
    return proto3.util.equals(CreateDirectRequest, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateDirectResponse
 */
export class CreateDirectResponse extends Message<CreateDirectResponse> {
  /**
   * @generated from field: protobuf.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateDirectResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateDirectResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDirectResponse {
    return new CreateDirectResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDirectResponse {
    return new CreateDirectResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDirectResponse {
    return new CreateDirectResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDirectResponse | PlainMessage<CreateDirectResponse> | undefined, b: CreateDirectResponse | PlainMessage<CreateDirectResponse> | undefined): boolean {
    return proto3.util.equals(CreateDirectResponse, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateGroupRequest
 */
export class CreateGroupRequest extends Message<CreateGroupRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string username = 3;
   */
  username = "";

  /**
   * @generated from field: string description = 4;
   */
  description = "";

  constructor(data?: PartialMessage<CreateGroupRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateGroupRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupRequest {
    return new CreateGroupRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupRequest {
    return new CreateGroupRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupRequest {
    return new CreateGroupRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGroupRequest | PlainMessage<CreateGroupRequest> | undefined, b: CreateGroupRequest | PlainMessage<CreateGroupRequest> | undefined): boolean {
    return proto3.util.equals(CreateGroupRequest, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateGroupResponse
 */
export class CreateGroupResponse extends Message<CreateGroupResponse> {
  /**
   * @generated from field: protobuf.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateGroupResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateGroupResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupResponse {
    return new CreateGroupResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupResponse {
    return new CreateGroupResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupResponse {
    return new CreateGroupResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGroupResponse | PlainMessage<CreateGroupResponse> | undefined, b: CreateGroupResponse | PlainMessage<CreateGroupResponse> | undefined): boolean {
    return proto3.util.equals(CreateGroupResponse, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateChannelRequest
 */
export class CreateChannelRequest extends Message<CreateChannelRequest> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string username = 2;
   */
  username = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  constructor(data?: PartialMessage<CreateChannelRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateChannelRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateChannelRequest {
    return new CreateChannelRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateChannelRequest {
    return new CreateChannelRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateChannelRequest {
    return new CreateChannelRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateChannelRequest | PlainMessage<CreateChannelRequest> | undefined, b: CreateChannelRequest | PlainMessage<CreateChannelRequest> | undefined): boolean {
    return proto3.util.equals(CreateChannelRequest, a, b);
  }
}

/**
 * @generated from message protobuf.chat.v1.CreateChannelResponse
 */
export class CreateChannelResponse extends Message<CreateChannelResponse> {
  /**
   * @generated from field: protobuf.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateChannelResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.chat.v1.CreateChannelResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateChannelResponse {
    return new CreateChannelResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateChannelResponse {
    return new CreateChannelResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateChannelResponse {
    return new CreateChannelResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateChannelResponse | PlainMessage<CreateChannelResponse> | undefined, b: CreateChannelResponse | PlainMessage<CreateChannelResponse> | undefined): boolean {
    return proto3.util.equals(CreateChannelResponse, a, b);
  }
}

