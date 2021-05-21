import * as $protobuf from "protobufjs";
/** Namespace merico. */
export namespace merico {

    /** Namespace analysis. */
    namespace analysis {

        /** Namespace gateway. */
        namespace gateway {

            /** Properties of a CaAnalysisModel. */
            interface ICaAnalysisModel {

                /** CaAnalysisModel id */
                id?: (string|null);

                /** CaAnalysisModel type */
                type?: (string|null);

                /** CaAnalysisModel progress */
                progress?: (number|null);

                /** CaAnalysisModel status */
                status?: (string|null);

                /** CaAnalysisModel errorMessage */
                errorMessage?: (string|null);

                /** CaAnalysisModel traceback */
                traceback?: (string|null);

                /** CaAnalysisModel notifyResultTime */
                notifyResultTime?: (number|null);

                /** CaAnalysisModel createTime */
                createTime?: (number|null);

                /** CaAnalysisModel updateTime */
                updateTime?: (number|null);

                /** CaAnalysisModel projectId */
                projectId?: (string|null);

                /** CaAnalysisModel reportId */
                reportId?: (string|null);

                /** CaAnalysisModel readiness */
                readiness?: (merico.analysis.gateway.AnalysisMessage.Readiness|null);

                /** CaAnalysisModel errorType */
                errorType?: (string|null);

                /** CaAnalysisModel tasks */
                tasks?: (merico.analysis.gateway.ICaTaskModel[]|null);

                /** CaAnalysisModel reportObjectName */
                reportObjectName?: (string|null);

                /** CaAnalysisModel version */
                version?: (string|null);

                /** CaAnalysisModel semver */
                semver?: (string|null);
            }

            /** Represents a CaAnalysisModel. */
            class CaAnalysisModel implements ICaAnalysisModel {

                /**
                 * Constructs a new CaAnalysisModel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ICaAnalysisModel);

                /** CaAnalysisModel id. */
                public id: string;

                /** CaAnalysisModel type. */
                public type: string;

                /** CaAnalysisModel progress. */
                public progress: number;

                /** CaAnalysisModel status. */
                public status: string;

                /** CaAnalysisModel errorMessage. */
                public errorMessage: string;

                /** CaAnalysisModel traceback. */
                public traceback: string;

                /** CaAnalysisModel notifyResultTime. */
                public notifyResultTime: number;

                /** CaAnalysisModel createTime. */
                public createTime: number;

                /** CaAnalysisModel updateTime. */
                public updateTime: number;

                /** CaAnalysisModel projectId. */
                public projectId: string;

                /** CaAnalysisModel reportId. */
                public reportId: string;

                /** CaAnalysisModel readiness. */
                public readiness: merico.analysis.gateway.AnalysisMessage.Readiness;

                /** CaAnalysisModel errorType. */
                public errorType: string;

                /** CaAnalysisModel tasks. */
                public tasks: merico.analysis.gateway.ICaTaskModel[];

                /** CaAnalysisModel reportObjectName. */
                public reportObjectName: string;

                /** CaAnalysisModel version. */
                public version: string;

                /** CaAnalysisModel semver. */
                public semver: string;

                /**
                 * Creates a new CaAnalysisModel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CaAnalysisModel instance
                 */
                public static create(properties?: merico.analysis.gateway.ICaAnalysisModel): merico.analysis.gateway.CaAnalysisModel;

                /**
                 * Encodes the specified CaAnalysisModel message. Does not implicitly {@link merico.analysis.gateway.CaAnalysisModel.verify|verify} messages.
                 * @param message CaAnalysisModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ICaAnalysisModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CaAnalysisModel message, length delimited. Does not implicitly {@link merico.analysis.gateway.CaAnalysisModel.verify|verify} messages.
                 * @param message CaAnalysisModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ICaAnalysisModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CaAnalysisModel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CaAnalysisModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.CaAnalysisModel;

                /**
                 * Decodes a CaAnalysisModel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CaAnalysisModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.CaAnalysisModel;

                /**
                 * Verifies a CaAnalysisModel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CaAnalysisModel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CaAnalysisModel
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.CaAnalysisModel;

                /**
                 * Creates a plain object from a CaAnalysisModel message. Also converts values to other types if specified.
                 * @param message CaAnalysisModel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.CaAnalysisModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CaAnalysisModel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CaTaskModel. */
            interface ICaTaskModel {

                /** CaTaskModel id */
                id?: (number|Long|null);

                /** CaTaskModel analysisId */
                analysisId?: (string|null);

                /** CaTaskModel name */
                name?: (string|null);

                /** CaTaskModel seq */
                seq?: (number|null);

                /** CaTaskModel analyzedWorkload */
                analyzedWorkload?: (number|null);

                /** CaTaskModel totalWorkload */
                totalWorkload?: (number|null);

                /** CaTaskModel status */
                status?: (string|null);

                /** CaTaskModel triedCount */
                triedCount?: (number|null);

                /** CaTaskModel workerHostname */
                workerHostname?: (string|null);

                /** CaTaskModel heartbeatTime */
                heartbeatTime?: (number|null);

                /** CaTaskModel createTime */
                createTime?: (number|null);

                /** CaTaskModel updateTime */
                updateTime?: (number|null);

                /** CaTaskModel startedAt */
                startedAt?: (number|null);

                /** CaTaskModel completedAt */
                completedAt?: (number|null);

                /** CaTaskModel celeryTaskId */
                celeryTaskId?: (string|null);
            }

            /** Represents a CaTaskModel. */
            class CaTaskModel implements ICaTaskModel {

                /**
                 * Constructs a new CaTaskModel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ICaTaskModel);

                /** CaTaskModel id. */
                public id: (number|Long);

                /** CaTaskModel analysisId. */
                public analysisId: string;

                /** CaTaskModel name. */
                public name: string;

                /** CaTaskModel seq. */
                public seq: number;

                /** CaTaskModel analyzedWorkload. */
                public analyzedWorkload: number;

                /** CaTaskModel totalWorkload. */
                public totalWorkload: number;

                /** CaTaskModel status. */
                public status: string;

                /** CaTaskModel triedCount. */
                public triedCount: number;

                /** CaTaskModel workerHostname. */
                public workerHostname: string;

                /** CaTaskModel heartbeatTime. */
                public heartbeatTime: number;

                /** CaTaskModel createTime. */
                public createTime: number;

                /** CaTaskModel updateTime. */
                public updateTime: number;

                /** CaTaskModel startedAt. */
                public startedAt: number;

                /** CaTaskModel completedAt. */
                public completedAt: number;

                /** CaTaskModel celeryTaskId. */
                public celeryTaskId: string;

                /**
                 * Creates a new CaTaskModel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CaTaskModel instance
                 */
                public static create(properties?: merico.analysis.gateway.ICaTaskModel): merico.analysis.gateway.CaTaskModel;

                /**
                 * Encodes the specified CaTaskModel message. Does not implicitly {@link merico.analysis.gateway.CaTaskModel.verify|verify} messages.
                 * @param message CaTaskModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ICaTaskModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CaTaskModel message, length delimited. Does not implicitly {@link merico.analysis.gateway.CaTaskModel.verify|verify} messages.
                 * @param message CaTaskModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ICaTaskModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CaTaskModel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CaTaskModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.CaTaskModel;

                /**
                 * Decodes a CaTaskModel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CaTaskModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.CaTaskModel;

                /**
                 * Verifies a CaTaskModel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CaTaskModel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CaTaskModel
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.CaTaskModel;

                /**
                 * Creates a plain object from a CaTaskModel message. Also converts values to other types if specified.
                 * @param message CaTaskModel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.CaTaskModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CaTaskModel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AnalysisMessage. */
            interface IAnalysisMessage {

                /** AnalysisMessage gitUrl */
                gitUrl?: (string|null);

                /** AnalysisMessage version */
                version?: (string|null);

                /** AnalysisMessage readiness */
                readiness?: (merico.analysis.gateway.AnalysisMessage.Readiness|null);

                /** AnalysisMessage reportId */
                reportId?: (string|null);

                /** AnalysisMessage analysisId */
                analysisId?: (string|null);

                /** AnalysisMessage reportObjectName */
                reportObjectName?: (string|null);

                /** AnalysisMessage projectId */
                projectId?: (string|null);

                /** AnalysisMessage analysisStatus */
                analysisStatus?: (string|null);

                /** AnalysisMessage errorType */
                errorType?: (string|null);

                /** AnalysisMessage reuseReport */
                reuseReport?: (boolean|null);

                /** AnalysisMessage sourceType */
                sourceType?: (string|null);

                /** AnalysisMessage sourceId */
                sourceId?: (string|null);
            }

            /** Represents an AnalysisMessage. */
            class AnalysisMessage implements IAnalysisMessage {

                /**
                 * Constructs a new AnalysisMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IAnalysisMessage);

                /** AnalysisMessage gitUrl. */
                public gitUrl: string;

                /** AnalysisMessage version. */
                public version: string;

                /** AnalysisMessage readiness. */
                public readiness: merico.analysis.gateway.AnalysisMessage.Readiness;

                /** AnalysisMessage reportId. */
                public reportId: string;

                /** AnalysisMessage analysisId. */
                public analysisId: string;

                /** AnalysisMessage reportObjectName. */
                public reportObjectName: string;

                /** AnalysisMessage projectId. */
                public projectId: string;

                /** AnalysisMessage analysisStatus. */
                public analysisStatus: string;

                /** AnalysisMessage errorType. */
                public errorType: string;

                /** AnalysisMessage reuseReport. */
                public reuseReport: boolean;

                /** AnalysisMessage sourceType. */
                public sourceType: string;

                /** AnalysisMessage sourceId. */
                public sourceId: string;

                /**
                 * Creates a new AnalysisMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AnalysisMessage instance
                 */
                public static create(properties?: merico.analysis.gateway.IAnalysisMessage): merico.analysis.gateway.AnalysisMessage;

                /**
                 * Encodes the specified AnalysisMessage message. Does not implicitly {@link merico.analysis.gateway.AnalysisMessage.verify|verify} messages.
                 * @param message AnalysisMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IAnalysisMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AnalysisMessage message, length delimited. Does not implicitly {@link merico.analysis.gateway.AnalysisMessage.verify|verify} messages.
                 * @param message AnalysisMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IAnalysisMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AnalysisMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AnalysisMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.AnalysisMessage;

                /**
                 * Decodes an AnalysisMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AnalysisMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.AnalysisMessage;

                /**
                 * Verifies an AnalysisMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AnalysisMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AnalysisMessage
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.AnalysisMessage;

                /**
                 * Creates a plain object from an AnalysisMessage message. Also converts values to other types if specified.
                 * @param message AnalysisMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.AnalysisMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AnalysisMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AnalysisMessage {

                /** Readiness enum. */
                enum Readiness {
                    UNKNOWN = 0,
                    NOT_INIT = 8,
                    WAITING = 4,
                    AUTH_REQUIRE = 5,
                    NOT_REPO = 6,
                    PRE_UNDERWAY = 9,
                    PRE_READY = 10,
                    UNDERWAY = 11,
                    READY = 1,
                    FAILURE = 2,
                    PULLING = 7,
                    UNSUPPORTED = 3,
                    DUPLICATE = 20
                }
            }

            /** Properties of a ProgressRateMessage. */
            interface IProgressRateMessage {

                /** ProgressRateMessage status */
                status?: (merico.analysis.gateway.IResponseStatus|null);

                /** ProgressRateMessage gitUrl */
                gitUrl?: (string|null);

                /** ProgressRateMessage currentPercent */
                currentPercent?: (number|null);

                /** ProgressRateMessage estimatedTotalSecond */
                estimatedTotalSecond?: (number|null);

                /** ProgressRateMessage analysisId */
                analysisId?: (string|null);

                /** ProgressRateMessage reportId */
                reportId?: (string|null);

                /** ProgressRateMessage submitType */
                submitType?: (string|null);

                /** ProgressRateMessage tasks */
                tasks?: (merico.analysis.gateway.ICaTaskModel[]|null);

                /** ProgressRateMessage analysisStatus */
                analysisStatus?: (string|null);
            }

            /** Represents a ProgressRateMessage. */
            class ProgressRateMessage implements IProgressRateMessage {

                /**
                 * Constructs a new ProgressRateMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IProgressRateMessage);

                /** ProgressRateMessage status. */
                public status?: (merico.analysis.gateway.IResponseStatus|null);

                /** ProgressRateMessage gitUrl. */
                public gitUrl: string;

                /** ProgressRateMessage currentPercent. */
                public currentPercent: number;

                /** ProgressRateMessage estimatedTotalSecond. */
                public estimatedTotalSecond: number;

                /** ProgressRateMessage analysisId. */
                public analysisId: string;

                /** ProgressRateMessage reportId. */
                public reportId: string;

                /** ProgressRateMessage submitType. */
                public submitType: string;

                /** ProgressRateMessage tasks. */
                public tasks: merico.analysis.gateway.ICaTaskModel[];

                /** ProgressRateMessage analysisStatus. */
                public analysisStatus: string;

                /**
                 * Creates a new ProgressRateMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProgressRateMessage instance
                 */
                public static create(properties?: merico.analysis.gateway.IProgressRateMessage): merico.analysis.gateway.ProgressRateMessage;

                /**
                 * Encodes the specified ProgressRateMessage message. Does not implicitly {@link merico.analysis.gateway.ProgressRateMessage.verify|verify} messages.
                 * @param message ProgressRateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IProgressRateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProgressRateMessage message, length delimited. Does not implicitly {@link merico.analysis.gateway.ProgressRateMessage.verify|verify} messages.
                 * @param message ProgressRateMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IProgressRateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProgressRateMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProgressRateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.ProgressRateMessage;

                /**
                 * Decodes a ProgressRateMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProgressRateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.ProgressRateMessage;

                /**
                 * Verifies a ProgressRateMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProgressRateMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProgressRateMessage
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.ProgressRateMessage;

                /**
                 * Creates a plain object from a ProgressRateMessage message. Also converts values to other types if specified.
                 * @param message ProgressRateMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.ProgressRateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProgressRateMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResponseStatus. */
            interface IResponseStatus {

                /** ResponseStatus code */
                code?: (merico.analysis.gateway.ResponseStatus.StatusCode|null);

                /** ResponseStatus message */
                message?: (string|null);
            }

            /** Represents a ResponseStatus. */
            class ResponseStatus implements IResponseStatus {

                /**
                 * Constructs a new ResponseStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IResponseStatus);

                /** ResponseStatus code. */
                public code: merico.analysis.gateway.ResponseStatus.StatusCode;

                /** ResponseStatus message. */
                public message: string;

                /**
                 * Creates a new ResponseStatus instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResponseStatus instance
                 */
                public static create(properties?: merico.analysis.gateway.IResponseStatus): merico.analysis.gateway.ResponseStatus;

                /**
                 * Encodes the specified ResponseStatus message. Does not implicitly {@link merico.analysis.gateway.ResponseStatus.verify|verify} messages.
                 * @param message ResponseStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IResponseStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResponseStatus message, length delimited. Does not implicitly {@link merico.analysis.gateway.ResponseStatus.verify|verify} messages.
                 * @param message ResponseStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IResponseStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResponseStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResponseStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.ResponseStatus;

                /**
                 * Decodes a ResponseStatus message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResponseStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.ResponseStatus;

                /**
                 * Verifies a ResponseStatus message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResponseStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResponseStatus
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.ResponseStatus;

                /**
                 * Creates a plain object from a ResponseStatus message. Also converts values to other types if specified.
                 * @param message ResponseStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.ResponseStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResponseStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ResponseStatus {

                /** StatusCode enum. */
                enum StatusCode {
                    SUCCESS = 0,
                    UNAUTHORIZED = 401,
                    INTERNAL_SERVER_ERROR = 500,
                    UNKNOWN = 1400,
                    OBJECT_NOT_FOUND = 1401,
                    VALUE_NOT_FOUND = 1402,
                    VALUE_ALREADY_EXISTS = 1403,
                    VALUE_OUT_OF_RANGE = 1404,
                    INVALID_VALUE = 1405,
                    FAILED_DEPENDENCY = 1406,
                    FORBIDDEN = 1407,
                    USERNAME_TAKEN = 1408,
                    EMAIL_TAKEN = 1409
                }
            }

            /** Properties of a SubmitRepoRequest. */
            interface ISubmitRepoRequest {

                /** SubmitRepoRequest gitUrl */
                gitUrl?: (string|null);

                /** SubmitRepoRequest batchTime */
                batchTime?: (number|Long|null);

                /** SubmitRepoRequest authType */
                authType?: (merico.analysis.gateway.SubmitRepoRequest.AuthType|null);

                /** SubmitRepoRequest username */
                username?: (string|null);

                /** SubmitRepoRequest password */
                password?: (string|null);

                /** SubmitRepoRequest privateKey */
                privateKey?: (string|null);

                /** SubmitRepoRequest callbackAddress */
                callbackAddress?: (string|null);

                /** SubmitRepoRequest pathBlacklist */
                pathBlacklist?: (string[]|null);

                /** SubmitRepoRequest commitBlacklist */
                commitBlacklist?: (string[]|null);

                /** SubmitRepoRequest projectId */
                projectId?: (string|null);

                /** SubmitRepoRequest forceAnalyze */
                forceAnalyze?: (boolean|null);

                /** SubmitRepoRequest defaultRef */
                defaultRef?: (string|null);

                /** SubmitRepoRequest commitBefore */
                commitBefore?: (number|Long|null);

                /** SubmitRepoRequest reportId */
                reportId?: (string|null);

                /** SubmitRepoRequest analysisConf */
                analysisConf?: (string|null);

                /** SubmitRepoRequest publicKey */
                publicKey?: (string|null);

                /** SubmitRepoRequest commitAfter */
                commitAfter?: (number|Long|null);

                /** SubmitRepoRequest singleBranch */
                singleBranch?: (boolean|null);

                /** SubmitRepoRequest sourceType */
                sourceType?: (string|null);

                /** SubmitRepoRequest sourceId */
                sourceId?: (string|null);
            }

            /** Represents a SubmitRepoRequest. */
            class SubmitRepoRequest implements ISubmitRepoRequest {

                /**
                 * Constructs a new SubmitRepoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ISubmitRepoRequest);

                /** SubmitRepoRequest gitUrl. */
                public gitUrl: string;

                /** SubmitRepoRequest batchTime. */
                public batchTime: (number|Long);

                /** SubmitRepoRequest authType. */
                public authType: merico.analysis.gateway.SubmitRepoRequest.AuthType;

                /** SubmitRepoRequest username. */
                public username: string;

                /** SubmitRepoRequest password. */
                public password: string;

                /** SubmitRepoRequest privateKey. */
                public privateKey: string;

                /** SubmitRepoRequest callbackAddress. */
                public callbackAddress: string;

                /** SubmitRepoRequest pathBlacklist. */
                public pathBlacklist: string[];

                /** SubmitRepoRequest commitBlacklist. */
                public commitBlacklist: string[];

                /** SubmitRepoRequest projectId. */
                public projectId: string;

                /** SubmitRepoRequest forceAnalyze. */
                public forceAnalyze: boolean;

                /** SubmitRepoRequest defaultRef. */
                public defaultRef: string;

                /** SubmitRepoRequest commitBefore. */
                public commitBefore: (number|Long);

                /** SubmitRepoRequest reportId. */
                public reportId: string;

                /** SubmitRepoRequest analysisConf. */
                public analysisConf: string;

                /** SubmitRepoRequest publicKey. */
                public publicKey: string;

                /** SubmitRepoRequest commitAfter. */
                public commitAfter: (number|Long);

                /** SubmitRepoRequest singleBranch. */
                public singleBranch: boolean;

                /** SubmitRepoRequest sourceType. */
                public sourceType: string;

                /** SubmitRepoRequest sourceId. */
                public sourceId: string;

                /**
                 * Creates a new SubmitRepoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubmitRepoRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.ISubmitRepoRequest): merico.analysis.gateway.SubmitRepoRequest;

                /**
                 * Encodes the specified SubmitRepoRequest message. Does not implicitly {@link merico.analysis.gateway.SubmitRepoRequest.verify|verify} messages.
                 * @param message SubmitRepoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ISubmitRepoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubmitRepoRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.SubmitRepoRequest.verify|verify} messages.
                 * @param message SubmitRepoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ISubmitRepoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubmitRepoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubmitRepoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.SubmitRepoRequest;

                /**
                 * Decodes a SubmitRepoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubmitRepoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.SubmitRepoRequest;

                /**
                 * Verifies a SubmitRepoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubmitRepoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubmitRepoRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.SubmitRepoRequest;

                /**
                 * Creates a plain object from a SubmitRepoRequest message. Also converts values to other types if specified.
                 * @param message SubmitRepoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.SubmitRepoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubmitRepoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SubmitRepoRequest {

                /** AuthType enum. */
                enum AuthType {
                    UNKNOWN = 0,
                    SSH_KEY = 1,
                    HTTP_BASE = 2
                }
            }

            /** Properties of a SubmitRepoResponse. */
            interface ISubmitRepoResponse {

                /** SubmitRepoResponse error */
                error?: (merico.analysis.gateway.SubmitRepoResponse.ErrorMessage|null);

                /** SubmitRepoResponse analysisId */
                analysisId?: (string|null);

                /** SubmitRepoResponse reportId */
                reportId?: (string|null);
            }

            /** Represents a SubmitRepoResponse. */
            class SubmitRepoResponse implements ISubmitRepoResponse {

                /**
                 * Constructs a new SubmitRepoResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ISubmitRepoResponse);

                /** SubmitRepoResponse error. */
                public error: merico.analysis.gateway.SubmitRepoResponse.ErrorMessage;

                /** SubmitRepoResponse analysisId. */
                public analysisId: string;

                /** SubmitRepoResponse reportId. */
                public reportId: string;

                /**
                 * Creates a new SubmitRepoResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubmitRepoResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.ISubmitRepoResponse): merico.analysis.gateway.SubmitRepoResponse;

                /**
                 * Encodes the specified SubmitRepoResponse message. Does not implicitly {@link merico.analysis.gateway.SubmitRepoResponse.verify|verify} messages.
                 * @param message SubmitRepoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ISubmitRepoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubmitRepoResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.SubmitRepoResponse.verify|verify} messages.
                 * @param message SubmitRepoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ISubmitRepoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubmitRepoResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubmitRepoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.SubmitRepoResponse;

                /**
                 * Decodes a SubmitRepoResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubmitRepoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.SubmitRepoResponse;

                /**
                 * Verifies a SubmitRepoResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubmitRepoResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubmitRepoResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.SubmitRepoResponse;

                /**
                 * Creates a plain object from a SubmitRepoResponse message. Also converts values to other types if specified.
                 * @param message SubmitRepoResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.SubmitRepoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubmitRepoResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SubmitRepoResponse {

                /** ErrorMessage enum. */
                enum ErrorMessage {
                    EMPTY = 0,
                    OBJECT_NOT_FOUND = 1,
                    VALUE_NOT_FOUND = 2,
                    VALUE_ALREADY_EXISTS = 3,
                    VALUE_OUT_OF_RANGE = 4,
                    INVALID_VALUE = 5,
                    FAILED_DEPENDENCY = 6,
                    FORBIDDEN = 7,
                    USERNAME_TAKEN = 8,
                    EMAIL_TAKEN = 9
                }
            }

            /** Properties of a GetVersionRequest. */
            interface IGetVersionRequest {
            }

            /** Represents a GetVersionRequest. */
            class GetVersionRequest implements IGetVersionRequest {

                /**
                 * Constructs a new GetVersionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IGetVersionRequest);

                /**
                 * Creates a new GetVersionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetVersionRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.IGetVersionRequest): merico.analysis.gateway.GetVersionRequest;

                /**
                 * Encodes the specified GetVersionRequest message. Does not implicitly {@link merico.analysis.gateway.GetVersionRequest.verify|verify} messages.
                 * @param message GetVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetVersionRequest.verify|verify} messages.
                 * @param message GetVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.GetVersionRequest;

                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.GetVersionRequest;

                /**
                 * Verifies a GetVersionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetVersionRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.GetVersionRequest;

                /**
                 * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
                 * @param message GetVersionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.GetVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetVersionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetVersionResponse. */
            interface IGetVersionResponse {

                /** GetVersionResponse status */
                status?: (merico.analysis.gateway.IResponseStatus|null);

                /** GetVersionResponse version */
                version?: (string|null);

                /** GetVersionResponse semver */
                semver?: (string|null);
            }

            /** Represents a GetVersionResponse. */
            class GetVersionResponse implements IGetVersionResponse {

                /**
                 * Constructs a new GetVersionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IGetVersionResponse);

                /** GetVersionResponse status. */
                public status?: (merico.analysis.gateway.IResponseStatus|null);

                /** GetVersionResponse version. */
                public version: string;

                /** GetVersionResponse semver. */
                public semver: string;

                /**
                 * Creates a new GetVersionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetVersionResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.IGetVersionResponse): merico.analysis.gateway.GetVersionResponse;

                /**
                 * Encodes the specified GetVersionResponse message. Does not implicitly {@link merico.analysis.gateway.GetVersionResponse.verify|verify} messages.
                 * @param message GetVersionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IGetVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetVersionResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetVersionResponse.verify|verify} messages.
                 * @param message GetVersionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IGetVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetVersionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.GetVersionResponse;

                /**
                 * Decodes a GetVersionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.GetVersionResponse;

                /**
                 * Verifies a GetVersionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetVersionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetVersionResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.GetVersionResponse;

                /**
                 * Creates a plain object from a GetVersionResponse message. Also converts values to other types if specified.
                 * @param message GetVersionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.GetVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetVersionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TerminateAnalysisRequest. */
            interface ITerminateAnalysisRequest {

                /** TerminateAnalysisRequest gitUrl */
                gitUrl?: (string|null);

                /** TerminateAnalysisRequest analysisId */
                analysisId?: (string|null);

                /** TerminateAnalysisRequest projectId */
                projectId?: (string|null);

                /** TerminateAnalysisRequest reportId */
                reportId?: (string|null);
            }

            /** Represents a TerminateAnalysisRequest. */
            class TerminateAnalysisRequest implements ITerminateAnalysisRequest {

                /**
                 * Constructs a new TerminateAnalysisRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ITerminateAnalysisRequest);

                /** TerminateAnalysisRequest gitUrl. */
                public gitUrl: string;

                /** TerminateAnalysisRequest analysisId. */
                public analysisId: string;

                /** TerminateAnalysisRequest projectId. */
                public projectId: string;

                /** TerminateAnalysisRequest reportId. */
                public reportId: string;

                /**
                 * Creates a new TerminateAnalysisRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminateAnalysisRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.ITerminateAnalysisRequest): merico.analysis.gateway.TerminateAnalysisRequest;

                /**
                 * Encodes the specified TerminateAnalysisRequest message. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisRequest.verify|verify} messages.
                 * @param message TerminateAnalysisRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ITerminateAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminateAnalysisRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisRequest.verify|verify} messages.
                 * @param message TerminateAnalysisRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ITerminateAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminateAnalysisRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminateAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.TerminateAnalysisRequest;

                /**
                 * Decodes a TerminateAnalysisRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminateAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.TerminateAnalysisRequest;

                /**
                 * Verifies a TerminateAnalysisRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminateAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminateAnalysisRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.TerminateAnalysisRequest;

                /**
                 * Creates a plain object from a TerminateAnalysisRequest message. Also converts values to other types if specified.
                 * @param message TerminateAnalysisRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.TerminateAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminateAnalysisRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TerminateAnalysisResponse. */
            interface ITerminateAnalysisResponse {

                /** TerminateAnalysisResponse analysisIds */
                analysisIds?: (string[]|null);

                /** TerminateAnalysisResponse reportIds */
                reportIds?: (string[]|null);

                /** TerminateAnalysisResponse status */
                status?: (merico.analysis.gateway.IResponseStatus|null);
            }

            /** Represents a TerminateAnalysisResponse. */
            class TerminateAnalysisResponse implements ITerminateAnalysisResponse {

                /**
                 * Constructs a new TerminateAnalysisResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ITerminateAnalysisResponse);

                /** TerminateAnalysisResponse analysisIds. */
                public analysisIds: string[];

                /** TerminateAnalysisResponse reportIds. */
                public reportIds: string[];

                /** TerminateAnalysisResponse status. */
                public status?: (merico.analysis.gateway.IResponseStatus|null);

                /**
                 * Creates a new TerminateAnalysisResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminateAnalysisResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.ITerminateAnalysisResponse): merico.analysis.gateway.TerminateAnalysisResponse;

                /**
                 * Encodes the specified TerminateAnalysisResponse message. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisResponse.verify|verify} messages.
                 * @param message TerminateAnalysisResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ITerminateAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminateAnalysisResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisResponse.verify|verify} messages.
                 * @param message TerminateAnalysisResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ITerminateAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminateAnalysisResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminateAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.TerminateAnalysisResponse;

                /**
                 * Decodes a TerminateAnalysisResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminateAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.TerminateAnalysisResponse;

                /**
                 * Verifies a TerminateAnalysisResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminateAnalysisResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminateAnalysisResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.TerminateAnalysisResponse;

                /**
                 * Creates a plain object from a TerminateAnalysisResponse message. Also converts values to other types if specified.
                 * @param message TerminateAnalysisResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.TerminateAnalysisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminateAnalysisResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LookupAnalysisRequest. */
            interface ILookupAnalysisRequest {

                /** LookupAnalysisRequest analysisId */
                analysisId?: (string|null);

                /** LookupAnalysisRequest reportId */
                reportId?: (string|null);
            }

            /** Represents a LookupAnalysisRequest. */
            class LookupAnalysisRequest implements ILookupAnalysisRequest {

                /**
                 * Constructs a new LookupAnalysisRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ILookupAnalysisRequest);

                /** LookupAnalysisRequest analysisId. */
                public analysisId: string;

                /** LookupAnalysisRequest reportId. */
                public reportId: string;

                /**
                 * Creates a new LookupAnalysisRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LookupAnalysisRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.ILookupAnalysisRequest): merico.analysis.gateway.LookupAnalysisRequest;

                /**
                 * Encodes the specified LookupAnalysisRequest message. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisRequest.verify|verify} messages.
                 * @param message LookupAnalysisRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ILookupAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LookupAnalysisRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisRequest.verify|verify} messages.
                 * @param message LookupAnalysisRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ILookupAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LookupAnalysisRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LookupAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.LookupAnalysisRequest;

                /**
                 * Decodes a LookupAnalysisRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LookupAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.LookupAnalysisRequest;

                /**
                 * Verifies a LookupAnalysisRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LookupAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LookupAnalysisRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.LookupAnalysisRequest;

                /**
                 * Creates a plain object from a LookupAnalysisRequest message. Also converts values to other types if specified.
                 * @param message LookupAnalysisRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.LookupAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LookupAnalysisRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LookupAnalysisResponse. */
            interface ILookupAnalysisResponse {

                /** LookupAnalysisResponse status */
                status?: (merico.analysis.gateway.IResponseStatus|null);

                /** LookupAnalysisResponse analysis */
                analysis?: (merico.analysis.gateway.ICaAnalysisModel|null);
            }

            /** Represents a LookupAnalysisResponse. */
            class LookupAnalysisResponse implements ILookupAnalysisResponse {

                /**
                 * Constructs a new LookupAnalysisResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.ILookupAnalysisResponse);

                /** LookupAnalysisResponse status. */
                public status?: (merico.analysis.gateway.IResponseStatus|null);

                /** LookupAnalysisResponse analysis. */
                public analysis?: (merico.analysis.gateway.ICaAnalysisModel|null);

                /**
                 * Creates a new LookupAnalysisResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LookupAnalysisResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.ILookupAnalysisResponse): merico.analysis.gateway.LookupAnalysisResponse;

                /**
                 * Encodes the specified LookupAnalysisResponse message. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisResponse.verify|verify} messages.
                 * @param message LookupAnalysisResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.ILookupAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LookupAnalysisResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisResponse.verify|verify} messages.
                 * @param message LookupAnalysisResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.ILookupAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LookupAnalysisResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LookupAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.LookupAnalysisResponse;

                /**
                 * Decodes a LookupAnalysisResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LookupAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.LookupAnalysisResponse;

                /**
                 * Verifies a LookupAnalysisResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LookupAnalysisResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LookupAnalysisResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.LookupAnalysisResponse;

                /**
                 * Creates a plain object from a LookupAnalysisResponse message. Also converts values to other types if specified.
                 * @param message LookupAnalysisResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.LookupAnalysisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LookupAnalysisResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ClearCacheRequest. */
            interface IClearCacheRequest {

                /** ClearCacheRequest gitUrl */
                gitUrl?: (string|null);
            }

            /** Represents a ClearCacheRequest. */
            class ClearCacheRequest implements IClearCacheRequest {

                /**
                 * Constructs a new ClearCacheRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IClearCacheRequest);

                /** ClearCacheRequest gitUrl. */
                public gitUrl: string;

                /**
                 * Creates a new ClearCacheRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClearCacheRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.IClearCacheRequest): merico.analysis.gateway.ClearCacheRequest;

                /**
                 * Encodes the specified ClearCacheRequest message. Does not implicitly {@link merico.analysis.gateway.ClearCacheRequest.verify|verify} messages.
                 * @param message ClearCacheRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IClearCacheRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClearCacheRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.ClearCacheRequest.verify|verify} messages.
                 * @param message ClearCacheRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IClearCacheRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClearCacheRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClearCacheRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.ClearCacheRequest;

                /**
                 * Decodes a ClearCacheRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClearCacheRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.ClearCacheRequest;

                /**
                 * Verifies a ClearCacheRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClearCacheRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClearCacheRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.ClearCacheRequest;

                /**
                 * Creates a plain object from a ClearCacheRequest message. Also converts values to other types if specified.
                 * @param message ClearCacheRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.ClearCacheRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClearCacheRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ClearCacheResponse. */
            interface IClearCacheResponse {

                /** ClearCacheResponse status */
                status?: (merico.analysis.gateway.ClearCacheResponse.StatusCode|null);
            }

            /** Represents a ClearCacheResponse. */
            class ClearCacheResponse implements IClearCacheResponse {

                /**
                 * Constructs a new ClearCacheResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IClearCacheResponse);

                /** ClearCacheResponse status. */
                public status: merico.analysis.gateway.ClearCacheResponse.StatusCode;

                /**
                 * Creates a new ClearCacheResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClearCacheResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.IClearCacheResponse): merico.analysis.gateway.ClearCacheResponse;

                /**
                 * Encodes the specified ClearCacheResponse message. Does not implicitly {@link merico.analysis.gateway.ClearCacheResponse.verify|verify} messages.
                 * @param message ClearCacheResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IClearCacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClearCacheResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.ClearCacheResponse.verify|verify} messages.
                 * @param message ClearCacheResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IClearCacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClearCacheResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClearCacheResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.ClearCacheResponse;

                /**
                 * Decodes a ClearCacheResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClearCacheResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.ClearCacheResponse;

                /**
                 * Verifies a ClearCacheResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClearCacheResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClearCacheResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.ClearCacheResponse;

                /**
                 * Creates a plain object from a ClearCacheResponse message. Also converts values to other types if specified.
                 * @param message ClearCacheResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.ClearCacheResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClearCacheResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ClearCacheResponse {

                /** StatusCode enum. */
                enum StatusCode {
                    SUCCESS = 0,
                    SYSTEM_ERROR = 1,
                    ANALYSIS_RUNNING = 2
                }
            }

            /** Properties of a GetAnalysisStatsRequest. */
            interface IGetAnalysisStatsRequest {

                /** GetAnalysisStatsRequest sourceType */
                sourceType?: (string|null);
            }

            /** Represents a GetAnalysisStatsRequest. */
            class GetAnalysisStatsRequest implements IGetAnalysisStatsRequest {

                /**
                 * Constructs a new GetAnalysisStatsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IGetAnalysisStatsRequest);

                /** GetAnalysisStatsRequest sourceType. */
                public sourceType: string;

                /**
                 * Creates a new GetAnalysisStatsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAnalysisStatsRequest instance
                 */
                public static create(properties?: merico.analysis.gateway.IGetAnalysisStatsRequest): merico.analysis.gateway.GetAnalysisStatsRequest;

                /**
                 * Encodes the specified GetAnalysisStatsRequest message. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsRequest.verify|verify} messages.
                 * @param message GetAnalysisStatsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IGetAnalysisStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAnalysisStatsRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsRequest.verify|verify} messages.
                 * @param message GetAnalysisStatsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IGetAnalysisStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAnalysisStatsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAnalysisStatsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.GetAnalysisStatsRequest;

                /**
                 * Decodes a GetAnalysisStatsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAnalysisStatsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.GetAnalysisStatsRequest;

                /**
                 * Verifies a GetAnalysisStatsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAnalysisStatsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAnalysisStatsRequest
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.GetAnalysisStatsRequest;

                /**
                 * Creates a plain object from a GetAnalysisStatsRequest message. Also converts values to other types if specified.
                 * @param message GetAnalysisStatsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.GetAnalysisStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAnalysisStatsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAnalysisStatsResponse. */
            interface IGetAnalysisStatsResponse {

                /** GetAnalysisStatsResponse status */
                status?: (merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode|null);

                /** GetAnalysisStatsResponse startedAnalyses */
                startedAnalyses?: (number|null);

                /** GetAnalysisStatsResponse waitingAnalyses */
                waitingAnalyses?: (number|null);

                /** GetAnalysisStatsResponse startedTasks */
                startedTasks?: (number|null);

                /** GetAnalysisStatsResponse waitingTasks */
                waitingTasks?: (number|null);

                /** GetAnalysisStatsResponse totalWorkers */
                totalWorkers?: (number|null);

                /** GetAnalysisStatsResponse load */
                load?: (number|null);
            }

            /** Represents a GetAnalysisStatsResponse. */
            class GetAnalysisStatsResponse implements IGetAnalysisStatsResponse {

                /**
                 * Constructs a new GetAnalysisStatsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: merico.analysis.gateway.IGetAnalysisStatsResponse);

                /** GetAnalysisStatsResponse status. */
                public status: merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode;

                /** GetAnalysisStatsResponse startedAnalyses. */
                public startedAnalyses: number;

                /** GetAnalysisStatsResponse waitingAnalyses. */
                public waitingAnalyses: number;

                /** GetAnalysisStatsResponse startedTasks. */
                public startedTasks: number;

                /** GetAnalysisStatsResponse waitingTasks. */
                public waitingTasks: number;

                /** GetAnalysisStatsResponse totalWorkers. */
                public totalWorkers: number;

                /** GetAnalysisStatsResponse load. */
                public load: number;

                /**
                 * Creates a new GetAnalysisStatsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAnalysisStatsResponse instance
                 */
                public static create(properties?: merico.analysis.gateway.IGetAnalysisStatsResponse): merico.analysis.gateway.GetAnalysisStatsResponse;

                /**
                 * Encodes the specified GetAnalysisStatsResponse message. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsResponse.verify|verify} messages.
                 * @param message GetAnalysisStatsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: merico.analysis.gateway.IGetAnalysisStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAnalysisStatsResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsResponse.verify|verify} messages.
                 * @param message GetAnalysisStatsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: merico.analysis.gateway.IGetAnalysisStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAnalysisStatsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAnalysisStatsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.analysis.gateway.GetAnalysisStatsResponse;

                /**
                 * Decodes a GetAnalysisStatsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAnalysisStatsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merico.analysis.gateway.GetAnalysisStatsResponse;

                /**
                 * Verifies a GetAnalysisStatsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAnalysisStatsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAnalysisStatsResponse
                 */
                public static fromObject(object: { [k: string]: any }): merico.analysis.gateway.GetAnalysisStatsResponse;

                /**
                 * Creates a plain object from a GetAnalysisStatsResponse message. Also converts values to other types if specified.
                 * @param message GetAnalysisStatsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: merico.analysis.gateway.GetAnalysisStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAnalysisStatsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace GetAnalysisStatsResponse {

                /** StatusCode enum. */
                enum StatusCode {
                    SUCCESS = 0,
                    SYSTEM_ERROR = 1
                }
            }

            /** Represents a CodeAnalytics */
            class CodeAnalytics extends $protobuf.rpc.Service {

                /**
                 * Constructs a new CodeAnalytics service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new CodeAnalytics service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CodeAnalytics;

                /**
                 * Calls SubmitRepo.
                 * @param request SubmitRepoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 */
                public submitRepo(request: merico.analysis.gateway.ISubmitRepoRequest, callback: merico.analysis.gateway.CodeAnalytics.SubmitRepoCallback): void;

                /**
                 * Calls SubmitRepo.
                 * @param request SubmitRepoRequest message or plain object
                 * @returns Promise
                 */
                public submitRepo(request: merico.analysis.gateway.ISubmitRepoRequest): Promise<merico.analysis.gateway.SubmitRepoResponse>;

                /**
                 * Calls GetVersion.
                 * @param request GetVersionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetVersionResponse
                 */
                public getVersion(request: merico.analysis.gateway.IGetVersionRequest, callback: merico.analysis.gateway.CodeAnalytics.GetVersionCallback): void;

                /**
                 * Calls GetVersion.
                 * @param request GetVersionRequest message or plain object
                 * @returns Promise
                 */
                public getVersion(request: merico.analysis.gateway.IGetVersionRequest): Promise<merico.analysis.gateway.GetVersionResponse>;

                /**
                 * Calls TerminateAnalysis.
                 * @param request TerminateAnalysisRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TerminateAnalysisResponse
                 */
                public terminateAnalysis(request: merico.analysis.gateway.ITerminateAnalysisRequest, callback: merico.analysis.gateway.CodeAnalytics.TerminateAnalysisCallback): void;

                /**
                 * Calls TerminateAnalysis.
                 * @param request TerminateAnalysisRequest message or plain object
                 * @returns Promise
                 */
                public terminateAnalysis(request: merico.analysis.gateway.ITerminateAnalysisRequest): Promise<merico.analysis.gateway.TerminateAnalysisResponse>;

                /**
                 * Calls SubmitAspectAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 */
                public submitAspectAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest, callback: merico.analysis.gateway.CodeAnalytics.SubmitAspectAnalysisCallback): void;

                /**
                 * Calls SubmitAspectAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @returns Promise
                 */
                public submitAspectAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest): Promise<merico.analysis.gateway.SubmitRepoResponse>;

                /**
                 * Calls SubmitCodeQualityAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 */
                public submitCodeQualityAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest, callback: merico.analysis.gateway.CodeAnalytics.SubmitCodeQualityAnalysisCallback): void;

                /**
                 * Calls SubmitCodeQualityAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @returns Promise
                 */
                public submitCodeQualityAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest): Promise<merico.analysis.gateway.SubmitRepoResponse>;

                /**
                 * Calls SubmitCEAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 */
                public submitCEAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest, callback: merico.analysis.gateway.CodeAnalytics.SubmitCEAnalysisCallback): void;

                /**
                 * Calls SubmitCEAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @returns Promise
                 */
                public submitCEAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest): Promise<merico.analysis.gateway.SubmitRepoResponse>;

                /**
                 * Calls SubmitEfficiencyAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 */
                public submitEfficiencyAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest, callback: merico.analysis.gateway.CodeAnalytics.SubmitEfficiencyAnalysisCallback): void;

                /**
                 * Calls SubmitEfficiencyAnalysis.
                 * @param request SubmitRepoRequest message or plain object
                 * @returns Promise
                 */
                public submitEfficiencyAnalysis(request: merico.analysis.gateway.ISubmitRepoRequest): Promise<merico.analysis.gateway.SubmitRepoResponse>;

                /**
                 * Calls LookupAnalysis.
                 * @param request LookupAnalysisRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LookupAnalysisResponse
                 */
                public lookupAnalysis(request: merico.analysis.gateway.ILookupAnalysisRequest, callback: merico.analysis.gateway.CodeAnalytics.LookupAnalysisCallback): void;

                /**
                 * Calls LookupAnalysis.
                 * @param request LookupAnalysisRequest message or plain object
                 * @returns Promise
                 */
                public lookupAnalysis(request: merico.analysis.gateway.ILookupAnalysisRequest): Promise<merico.analysis.gateway.LookupAnalysisResponse>;

                /**
                 * Calls ClearCache.
                 * @param request ClearCacheRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ClearCacheResponse
                 */
                public clearCache(request: merico.analysis.gateway.IClearCacheRequest, callback: merico.analysis.gateway.CodeAnalytics.ClearCacheCallback): void;

                /**
                 * Calls ClearCache.
                 * @param request ClearCacheRequest message or plain object
                 * @returns Promise
                 */
                public clearCache(request: merico.analysis.gateway.IClearCacheRequest): Promise<merico.analysis.gateway.ClearCacheResponse>;

                /**
                 * Calls GetAnalysisStats.
                 * @param request GetAnalysisStatsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetAnalysisStatsResponse
                 */
                public getAnalysisStats(request: merico.analysis.gateway.IGetAnalysisStatsRequest, callback: merico.analysis.gateway.CodeAnalytics.GetAnalysisStatsCallback): void;

                /**
                 * Calls GetAnalysisStats.
                 * @param request GetAnalysisStatsRequest message or plain object
                 * @returns Promise
                 */
                public getAnalysisStats(request: merico.analysis.gateway.IGetAnalysisStatsRequest): Promise<merico.analysis.gateway.GetAnalysisStatsResponse>;
            }

            namespace CodeAnalytics {

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitRepo}.
                 * @param error Error, if any
                 * @param [response] SubmitRepoResponse
                 */
                type SubmitRepoCallback = (error: (Error|null), response?: merico.analysis.gateway.SubmitRepoResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#getVersion}.
                 * @param error Error, if any
                 * @param [response] GetVersionResponse
                 */
                type GetVersionCallback = (error: (Error|null), response?: merico.analysis.gateway.GetVersionResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#terminateAnalysis}.
                 * @param error Error, if any
                 * @param [response] TerminateAnalysisResponse
                 */
                type TerminateAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.TerminateAnalysisResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitAspectAnalysis}.
                 * @param error Error, if any
                 * @param [response] SubmitRepoResponse
                 */
                type SubmitAspectAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.SubmitRepoResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitCodeQualityAnalysis}.
                 * @param error Error, if any
                 * @param [response] SubmitRepoResponse
                 */
                type SubmitCodeQualityAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.SubmitRepoResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitCEAnalysis}.
                 * @param error Error, if any
                 * @param [response] SubmitRepoResponse
                 */
                type SubmitCEAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.SubmitRepoResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitEfficiencyAnalysis}.
                 * @param error Error, if any
                 * @param [response] SubmitRepoResponse
                 */
                type SubmitEfficiencyAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.SubmitRepoResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#lookupAnalysis}.
                 * @param error Error, if any
                 * @param [response] LookupAnalysisResponse
                 */
                type LookupAnalysisCallback = (error: (Error|null), response?: merico.analysis.gateway.LookupAnalysisResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#clearCache}.
                 * @param error Error, if any
                 * @param [response] ClearCacheResponse
                 */
                type ClearCacheCallback = (error: (Error|null), response?: merico.analysis.gateway.ClearCacheResponse) => void;

                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#getAnalysisStats}.
                 * @param error Error, if any
                 * @param [response] GetAnalysisStatsResponse
                 */
                type GetAnalysisStatsCallback = (error: (Error|null), response?: merico.analysis.gateway.GetAnalysisStatsResponse) => void;
            }
        }
    }
}
