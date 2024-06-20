// @generated by protoc-gen-es v1.10.0
// @generated from file proto/chat/v1/chat.proto (package proto.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Chat } from "../../model/chat/v1/chat_pb.js";

/**
 * @generated from message proto.chat.v1.GetChatRequest
 */
export declare class GetChatRequest extends Message<GetChatRequest> {
  /**
   * @generated from field: string chat_id = 1;
   */
  chatId: string;

  constructor(data?: PartialMessage<GetChatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.GetChatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatRequest;

  static equals(a: GetChatRequest | PlainMessage<GetChatRequest> | undefined, b: GetChatRequest | PlainMessage<GetChatRequest> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.GetChatResponse
 */
export declare class GetChatResponse extends Message<GetChatResponse> {
  /**
   * @generated from field: proto.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<GetChatResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.GetChatResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatResponse;

  static equals(a: GetChatResponse | PlainMessage<GetChatResponse> | undefined, b: GetChatResponse | PlainMessage<GetChatResponse> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.GetUserChatsRequest
 */
export declare class GetUserChatsRequest extends Message<GetUserChatsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<GetUserChatsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.GetUserChatsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserChatsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserChatsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserChatsRequest;

  static equals(a: GetUserChatsRequest | PlainMessage<GetUserChatsRequest> | undefined, b: GetUserChatsRequest | PlainMessage<GetUserChatsRequest> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.GetUserChatsResponse
 */
export declare class GetUserChatsResponse extends Message<GetUserChatsResponse> {
  /**
   * @generated from field: repeated proto.model.chat.v1.Chat chats = 1;
   */
  chats: Chat[];

  constructor(data?: PartialMessage<GetUserChatsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.GetUserChatsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserChatsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserChatsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserChatsResponse;

  static equals(a: GetUserChatsResponse | PlainMessage<GetUserChatsResponse> | undefined, b: GetUserChatsResponse | PlainMessage<GetUserChatsResponse> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateDirectRequest
 */
export declare class CreateDirectRequest extends Message<CreateDirectRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string recipient_user_id = 2;
   */
  recipientUserId: string;

  constructor(data?: PartialMessage<CreateDirectRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateDirectRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDirectRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDirectRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDirectRequest;

  static equals(a: CreateDirectRequest | PlainMessage<CreateDirectRequest> | undefined, b: CreateDirectRequest | PlainMessage<CreateDirectRequest> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateDirectResponse
 */
export declare class CreateDirectResponse extends Message<CreateDirectResponse> {
  /**
   * @generated from field: proto.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateDirectResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateDirectResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDirectResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDirectResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDirectResponse;

  static equals(a: CreateDirectResponse | PlainMessage<CreateDirectResponse> | undefined, b: CreateDirectResponse | PlainMessage<CreateDirectResponse> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateGroupRequest
 */
export declare class CreateGroupRequest extends Message<CreateGroupRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: string username = 3;
   */
  username: string;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  constructor(data?: PartialMessage<CreateGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupRequest;

  static equals(a: CreateGroupRequest | PlainMessage<CreateGroupRequest> | undefined, b: CreateGroupRequest | PlainMessage<CreateGroupRequest> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateGroupResponse
 */
export declare class CreateGroupResponse extends Message<CreateGroupResponse> {
  /**
   * @generated from field: proto.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupResponse;

  static equals(a: CreateGroupResponse | PlainMessage<CreateGroupResponse> | undefined, b: CreateGroupResponse | PlainMessage<CreateGroupResponse> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateChannelRequest
 */
export declare class CreateChannelRequest extends Message<CreateChannelRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: string username = 3;
   */
  username: string;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  constructor(data?: PartialMessage<CreateChannelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateChannelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateChannelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateChannelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateChannelRequest;

  static equals(a: CreateChannelRequest | PlainMessage<CreateChannelRequest> | undefined, b: CreateChannelRequest | PlainMessage<CreateChannelRequest> | undefined): boolean;
}

/**
 * @generated from message proto.chat.v1.CreateChannelResponse
 */
export declare class CreateChannelResponse extends Message<CreateChannelResponse> {
  /**
   * @generated from field: proto.model.chat.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateChannelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.chat.v1.CreateChannelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateChannelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateChannelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateChannelResponse;

  static equals(a: CreateChannelResponse | PlainMessage<CreateChannelResponse> | undefined, b: CreateChannelResponse | PlainMessage<CreateChannelResponse> | undefined): boolean;
}
