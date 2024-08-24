// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=.ts"
// @generated from file protobuf/message/v1/message.proto (package protobuf.message.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Message as Message$1 } from "../../model/message/v1/message_pb.ts";

/**
 * @generated from message protobuf.message.v1.FetchMessagesRequest
 */
export class FetchMessagesRequest extends Message<FetchMessagesRequest> {
  /**
   * @generated from field: string chat_id = 1;
   */
  chatId = "";

  constructor(data?: PartialMessage<FetchMessagesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.message.v1.FetchMessagesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchMessagesRequest {
    return new FetchMessagesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchMessagesRequest {
    return new FetchMessagesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchMessagesRequest {
    return new FetchMessagesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FetchMessagesRequest | PlainMessage<FetchMessagesRequest> | undefined, b: FetchMessagesRequest | PlainMessage<FetchMessagesRequest> | undefined): boolean {
    return proto3.util.equals(FetchMessagesRequest, a, b);
  }
}

/**
 * @generated from message protobuf.message.v1.FetchMessagesResponse
 */
export class FetchMessagesResponse extends Message<FetchMessagesResponse> {
  /**
   * @generated from field: repeated protobuf.model.message.v1.Message messages = 1;
   */
  messages: Message$1[] = [];

  constructor(data?: PartialMessage<FetchMessagesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.message.v1.FetchMessagesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Message$1, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchMessagesResponse {
    return new FetchMessagesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchMessagesResponse {
    return new FetchMessagesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchMessagesResponse {
    return new FetchMessagesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchMessagesResponse | PlainMessage<FetchMessagesResponse> | undefined, b: FetchMessagesResponse | PlainMessage<FetchMessagesResponse> | undefined): boolean {
    return proto3.util.equals(FetchMessagesResponse, a, b);
  }
}

/**
 * @generated from message protobuf.message.v1.SendTextMessageRequest
 */
export class SendTextMessageRequest extends Message<SendTextMessageRequest> {
  /**
   * @generated from field: string chat_id = 1;
   */
  chatId = "";

  /**
   * @generated from field: string text = 2;
   */
  text = "";

  /**
   * @generated from field: string ack_id = 3;
   */
  ackId = "";

  constructor(data?: PartialMessage<SendTextMessageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.message.v1.SendTextMessageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ack_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendTextMessageRequest {
    return new SendTextMessageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendTextMessageRequest {
    return new SendTextMessageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendTextMessageRequest {
    return new SendTextMessageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendTextMessageRequest | PlainMessage<SendTextMessageRequest> | undefined, b: SendTextMessageRequest | PlainMessage<SendTextMessageRequest> | undefined): boolean {
    return proto3.util.equals(SendTextMessageRequest, a, b);
  }
}

/**
 * @generated from message protobuf.message.v1.SendTextMessageResponse
 */
export class SendTextMessageResponse extends Message<SendTextMessageResponse> {
  /**
   * @generated from field: protobuf.model.message.v1.Message message = 1;
   */
  message?: Message$1;

  constructor(data?: PartialMessage<SendTextMessageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.message.v1.SendTextMessageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "message", T: Message$1 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendTextMessageResponse {
    return new SendTextMessageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendTextMessageResponse {
    return new SendTextMessageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendTextMessageResponse {
    return new SendTextMessageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendTextMessageResponse | PlainMessage<SendTextMessageResponse> | undefined, b: SendTextMessageResponse | PlainMessage<SendTextMessageResponse> | undefined): boolean {
    return proto3.util.equals(SendTextMessageResponse, a, b);
  }
}

