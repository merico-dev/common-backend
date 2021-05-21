/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
var $protobuf = require("protobufjs/minimal");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.merico = (function () {
    /**
     * Namespace merico.
     * @exports merico
     * @namespace
     */
    var merico = {};
    merico.analysis = (function () {
        /**
         * Namespace analysis.
         * @memberof merico
         * @namespace
         */
        var analysis = {};
        analysis.gateway = (function () {
            /**
             * Namespace gateway.
             * @memberof merico.analysis
             * @namespace
             */
            var gateway = {};
            gateway.CaAnalysisModel = (function () {
                /**
                 * Properties of a CaAnalysisModel.
                 * @memberof merico.analysis.gateway
                 * @interface ICaAnalysisModel
                 * @property {string|null} [id] CaAnalysisModel id
                 * @property {string|null} [type] CaAnalysisModel type
                 * @property {number|null} [progress] CaAnalysisModel progress
                 * @property {string|null} [status] CaAnalysisModel status
                 * @property {string|null} [errorMessage] CaAnalysisModel errorMessage
                 * @property {string|null} [traceback] CaAnalysisModel traceback
                 * @property {number|null} [notifyResultTime] CaAnalysisModel notifyResultTime
                 * @property {number|null} [createTime] CaAnalysisModel createTime
                 * @property {number|null} [updateTime] CaAnalysisModel updateTime
                 * @property {string|null} [projectId] CaAnalysisModel projectId
                 * @property {string|null} [reportId] CaAnalysisModel reportId
                 * @property {merico.analysis.gateway.AnalysisMessage.Readiness|null} [readiness] CaAnalysisModel readiness
                 * @property {string|null} [errorType] CaAnalysisModel errorType
                 * @property {Array.<merico.analysis.gateway.ICaTaskModel>|null} [tasks] CaAnalysisModel tasks
                 * @property {string|null} [reportObjectName] CaAnalysisModel reportObjectName
                 * @property {string|null} [version] CaAnalysisModel version
                 * @property {string|null} [semver] CaAnalysisModel semver
                 */
                /**
                 * Constructs a new CaAnalysisModel.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a CaAnalysisModel.
                 * @implements ICaAnalysisModel
                 * @constructor
                 * @param {merico.analysis.gateway.ICaAnalysisModel=} [properties] Properties to set
                 */
                function CaAnalysisModel(properties) {
                    this.tasks = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * CaAnalysisModel id.
                 * @member {string} id
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.id = "";
                /**
                 * CaAnalysisModel type.
                 * @member {string} type
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.type = "";
                /**
                 * CaAnalysisModel progress.
                 * @member {number} progress
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.progress = 0;
                /**
                 * CaAnalysisModel status.
                 * @member {string} status
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.status = "";
                /**
                 * CaAnalysisModel errorMessage.
                 * @member {string} errorMessage
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.errorMessage = "";
                /**
                 * CaAnalysisModel traceback.
                 * @member {string} traceback
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.traceback = "";
                /**
                 * CaAnalysisModel notifyResultTime.
                 * @member {number} notifyResultTime
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.notifyResultTime = 0;
                /**
                 * CaAnalysisModel createTime.
                 * @member {number} createTime
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.createTime = 0;
                /**
                 * CaAnalysisModel updateTime.
                 * @member {number} updateTime
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.updateTime = 0;
                /**
                 * CaAnalysisModel projectId.
                 * @member {string} projectId
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.projectId = "";
                /**
                 * CaAnalysisModel reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.reportId = "";
                /**
                 * CaAnalysisModel readiness.
                 * @member {merico.analysis.gateway.AnalysisMessage.Readiness} readiness
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.readiness = 0;
                /**
                 * CaAnalysisModel errorType.
                 * @member {string} errorType
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.errorType = "";
                /**
                 * CaAnalysisModel tasks.
                 * @member {Array.<merico.analysis.gateway.ICaTaskModel>} tasks
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.tasks = $util.emptyArray;
                /**
                 * CaAnalysisModel reportObjectName.
                 * @member {string} reportObjectName
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.reportObjectName = "";
                /**
                 * CaAnalysisModel version.
                 * @member {string} version
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.version = "";
                /**
                 * CaAnalysisModel semver.
                 * @member {string} semver
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 */
                CaAnalysisModel.prototype.semver = "";
                /**
                 * Creates a new CaAnalysisModel instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {merico.analysis.gateway.ICaAnalysisModel=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.CaAnalysisModel} CaAnalysisModel instance
                 */
                CaAnalysisModel.create = function create(properties) {
                    return new CaAnalysisModel(properties);
                };
                /**
                 * Encodes the specified CaAnalysisModel message. Does not implicitly {@link merico.analysis.gateway.CaAnalysisModel.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {merico.analysis.gateway.ICaAnalysisModel} message CaAnalysisModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CaAnalysisModel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.type);
                    if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                        writer.uint32(/* id 3, wireType 5 =*/ 29).float(message.progress);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.status);
                    if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.errorMessage);
                    if (message.traceback != null && Object.hasOwnProperty.call(message, "traceback"))
                        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.traceback);
                    if (message.notifyResultTime != null && Object.hasOwnProperty.call(message, "notifyResultTime"))
                        writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.notifyResultTime);
                    if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                        writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.createTime);
                    if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                        writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.updateTime);
                    if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                        writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.projectId);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 11, wireType 2 =*/ 90).string(message.reportId);
                    if (message.readiness != null && Object.hasOwnProperty.call(message, "readiness"))
                        writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.readiness);
                    if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                        writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.errorType);
                    if (message.tasks != null && message.tasks.length)
                        for (var i = 0; i < message.tasks.length; ++i)
                            $root.merico.analysis.gateway.CaTaskModel.encode(message.tasks[i], writer.uint32(/* id 14, wireType 2 =*/ 114).fork()).ldelim();
                    if (message.reportObjectName != null && Object.hasOwnProperty.call(message, "reportObjectName"))
                        writer.uint32(/* id 15, wireType 2 =*/ 122).string(message.reportObjectName);
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.version);
                    if (message.semver != null && Object.hasOwnProperty.call(message, "semver"))
                        writer.uint32(/* id 17, wireType 2 =*/ 138).string(message.semver);
                    return writer;
                };
                /**
                 * Encodes the specified CaAnalysisModel message, length delimited. Does not implicitly {@link merico.analysis.gateway.CaAnalysisModel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {merico.analysis.gateway.ICaAnalysisModel} message CaAnalysisModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CaAnalysisModel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a CaAnalysisModel message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.CaAnalysisModel} CaAnalysisModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CaAnalysisModel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.CaAnalysisModel();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.type = reader.string();
                                break;
                            case 3:
                                message.progress = reader.float();
                                break;
                            case 4:
                                message.status = reader.string();
                                break;
                            case 5:
                                message.errorMessage = reader.string();
                                break;
                            case 6:
                                message.traceback = reader.string();
                                break;
                            case 7:
                                message.notifyResultTime = reader.int32();
                                break;
                            case 8:
                                message.createTime = reader.int32();
                                break;
                            case 9:
                                message.updateTime = reader.int32();
                                break;
                            case 10:
                                message.projectId = reader.string();
                                break;
                            case 11:
                                message.reportId = reader.string();
                                break;
                            case 12:
                                message.readiness = reader.int32();
                                break;
                            case 13:
                                message.errorType = reader.string();
                                break;
                            case 14:
                                if (!(message.tasks && message.tasks.length))
                                    message.tasks = [];
                                message.tasks.push($root.merico.analysis.gateway.CaTaskModel.decode(reader, reader.uint32()));
                                break;
                            case 15:
                                message.reportObjectName = reader.string();
                                break;
                            case 16:
                                message.version = reader.string();
                                break;
                            case 17:
                                message.semver = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a CaAnalysisModel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.CaAnalysisModel} CaAnalysisModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CaAnalysisModel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a CaAnalysisModel message.
                 * @function verify
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CaAnalysisModel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.progress != null && message.hasOwnProperty("progress"))
                        if (typeof message.progress !== "number")
                            return "progress: number expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isString(message.status))
                            return "status: string expected";
                    if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                        if (!$util.isString(message.errorMessage))
                            return "errorMessage: string expected";
                    if (message.traceback != null && message.hasOwnProperty("traceback"))
                        if (!$util.isString(message.traceback))
                            return "traceback: string expected";
                    if (message.notifyResultTime != null && message.hasOwnProperty("notifyResultTime"))
                        if (!$util.isInteger(message.notifyResultTime))
                            return "notifyResultTime: integer expected";
                    if (message.createTime != null && message.hasOwnProperty("createTime"))
                        if (!$util.isInteger(message.createTime))
                            return "createTime: integer expected";
                    if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                        if (!$util.isInteger(message.updateTime))
                            return "updateTime: integer expected";
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        if (!$util.isString(message.projectId))
                            return "projectId: string expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    if (message.readiness != null && message.hasOwnProperty("readiness"))
                        switch (message.readiness) {
                            default:
                                return "readiness: enum value expected";
                            case 0:
                            case 8:
                            case 4:
                            case 5:
                            case 6:
                            case 9:
                            case 10:
                            case 11:
                            case 1:
                            case 2:
                            case 7:
                            case 3:
                            case 20:
                                break;
                        }
                    if (message.errorType != null && message.hasOwnProperty("errorType"))
                        if (!$util.isString(message.errorType))
                            return "errorType: string expected";
                    if (message.tasks != null && message.hasOwnProperty("tasks")) {
                        if (!Array.isArray(message.tasks))
                            return "tasks: array expected";
                        for (var i = 0; i < message.tasks.length; ++i) {
                            var error = $root.merico.analysis.gateway.CaTaskModel.verify(message.tasks[i]);
                            if (error)
                                return "tasks." + error;
                        }
                    }
                    if (message.reportObjectName != null && message.hasOwnProperty("reportObjectName"))
                        if (!$util.isString(message.reportObjectName))
                            return "reportObjectName: string expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.semver != null && message.hasOwnProperty("semver"))
                        if (!$util.isString(message.semver))
                            return "semver: string expected";
                    return null;
                };
                /**
                 * Creates a CaAnalysisModel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.CaAnalysisModel} CaAnalysisModel
                 */
                CaAnalysisModel.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.CaAnalysisModel)
                        return object;
                    var message = new $root.merico.analysis.gateway.CaAnalysisModel();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.progress != null)
                        message.progress = Number(object.progress);
                    if (object.status != null)
                        message.status = String(object.status);
                    if (object.errorMessage != null)
                        message.errorMessage = String(object.errorMessage);
                    if (object.traceback != null)
                        message.traceback = String(object.traceback);
                    if (object.notifyResultTime != null)
                        message.notifyResultTime = object.notifyResultTime | 0;
                    if (object.createTime != null)
                        message.createTime = object.createTime | 0;
                    if (object.updateTime != null)
                        message.updateTime = object.updateTime | 0;
                    if (object.projectId != null)
                        message.projectId = String(object.projectId);
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    switch (object.readiness) {
                        case "UNKNOWN":
                        case 0:
                            message.readiness = 0;
                            break;
                        case "NOT_INIT":
                        case 8:
                            message.readiness = 8;
                            break;
                        case "WAITING":
                        case 4:
                            message.readiness = 4;
                            break;
                        case "AUTH_REQUIRE":
                        case 5:
                            message.readiness = 5;
                            break;
                        case "NOT_REPO":
                        case 6:
                            message.readiness = 6;
                            break;
                        case "PRE_UNDERWAY":
                        case 9:
                            message.readiness = 9;
                            break;
                        case "PRE_READY":
                        case 10:
                            message.readiness = 10;
                            break;
                        case "UNDERWAY":
                        case 11:
                            message.readiness = 11;
                            break;
                        case "READY":
                        case 1:
                            message.readiness = 1;
                            break;
                        case "FAILURE":
                        case 2:
                            message.readiness = 2;
                            break;
                        case "PULLING":
                        case 7:
                            message.readiness = 7;
                            break;
                        case "UNSUPPORTED":
                        case 3:
                            message.readiness = 3;
                            break;
                        case "DUPLICATE":
                        case 20:
                            message.readiness = 20;
                            break;
                    }
                    if (object.errorType != null)
                        message.errorType = String(object.errorType);
                    if (object.tasks) {
                        if (!Array.isArray(object.tasks))
                            throw TypeError(".merico.analysis.gateway.CaAnalysisModel.tasks: array expected");
                        message.tasks = [];
                        for (var i = 0; i < object.tasks.length; ++i) {
                            if (typeof object.tasks[i] !== "object")
                                throw TypeError(".merico.analysis.gateway.CaAnalysisModel.tasks: object expected");
                            message.tasks[i] = $root.merico.analysis.gateway.CaTaskModel.fromObject(object.tasks[i]);
                        }
                    }
                    if (object.reportObjectName != null)
                        message.reportObjectName = String(object.reportObjectName);
                    if (object.version != null)
                        message.version = String(object.version);
                    if (object.semver != null)
                        message.semver = String(object.semver);
                    return message;
                };
                /**
                 * Creates a plain object from a CaAnalysisModel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @static
                 * @param {merico.analysis.gateway.CaAnalysisModel} message CaAnalysisModel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CaAnalysisModel.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tasks = [];
                    if (options.defaults) {
                        object.id = "";
                        object.type = "";
                        object.progress = 0;
                        object.status = "";
                        object.errorMessage = "";
                        object.traceback = "";
                        object.notifyResultTime = 0;
                        object.createTime = 0;
                        object.updateTime = 0;
                        object.projectId = "";
                        object.reportId = "";
                        object.readiness = options.enums === String ? "UNKNOWN" : 0;
                        object.errorType = "";
                        object.reportObjectName = "";
                        object.version = "";
                        object.semver = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.progress != null && message.hasOwnProperty("progress"))
                        object.progress = options.json && !isFinite(message.progress) ? String(message.progress) : message.progress;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                        object.errorMessage = message.errorMessage;
                    if (message.traceback != null && message.hasOwnProperty("traceback"))
                        object.traceback = message.traceback;
                    if (message.notifyResultTime != null && message.hasOwnProperty("notifyResultTime"))
                        object.notifyResultTime = message.notifyResultTime;
                    if (message.createTime != null && message.hasOwnProperty("createTime"))
                        object.createTime = message.createTime;
                    if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                        object.updateTime = message.updateTime;
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        object.projectId = message.projectId;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    if (message.readiness != null && message.hasOwnProperty("readiness"))
                        object.readiness = options.enums === String ? $root.merico.analysis.gateway.AnalysisMessage.Readiness[message.readiness] : message.readiness;
                    if (message.errorType != null && message.hasOwnProperty("errorType"))
                        object.errorType = message.errorType;
                    if (message.tasks && message.tasks.length) {
                        object.tasks = [];
                        for (var j = 0; j < message.tasks.length; ++j)
                            object.tasks[j] = $root.merico.analysis.gateway.CaTaskModel.toObject(message.tasks[j], options);
                    }
                    if (message.reportObjectName != null && message.hasOwnProperty("reportObjectName"))
                        object.reportObjectName = message.reportObjectName;
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.semver != null && message.hasOwnProperty("semver"))
                        object.semver = message.semver;
                    return object;
                };
                /**
                 * Converts this CaAnalysisModel to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.CaAnalysisModel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CaAnalysisModel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return CaAnalysisModel;
            })();
            gateway.CaTaskModel = (function () {
                /**
                 * Properties of a CaTaskModel.
                 * @memberof merico.analysis.gateway
                 * @interface ICaTaskModel
                 * @property {number|Long|null} [id] CaTaskModel id
                 * @property {string|null} [analysisId] CaTaskModel analysisId
                 * @property {string|null} [name] CaTaskModel name
                 * @property {number|null} [seq] CaTaskModel seq
                 * @property {number|null} [analyzedWorkload] CaTaskModel analyzedWorkload
                 * @property {number|null} [totalWorkload] CaTaskModel totalWorkload
                 * @property {string|null} [status] CaTaskModel status
                 * @property {number|null} [triedCount] CaTaskModel triedCount
                 * @property {string|null} [workerHostname] CaTaskModel workerHostname
                 * @property {number|null} [heartbeatTime] CaTaskModel heartbeatTime
                 * @property {number|null} [createTime] CaTaskModel createTime
                 * @property {number|null} [updateTime] CaTaskModel updateTime
                 * @property {number|null} [startedAt] CaTaskModel startedAt
                 * @property {number|null} [completedAt] CaTaskModel completedAt
                 * @property {string|null} [celeryTaskId] CaTaskModel celeryTaskId
                 */
                /**
                 * Constructs a new CaTaskModel.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a CaTaskModel.
                 * @implements ICaTaskModel
                 * @constructor
                 * @param {merico.analysis.gateway.ICaTaskModel=} [properties] Properties to set
                 */
                function CaTaskModel(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * CaTaskModel id.
                 * @member {number|Long} id
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                /**
                 * CaTaskModel analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.analysisId = "";
                /**
                 * CaTaskModel name.
                 * @member {string} name
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.name = "";
                /**
                 * CaTaskModel seq.
                 * @member {number} seq
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.seq = 0;
                /**
                 * CaTaskModel analyzedWorkload.
                 * @member {number} analyzedWorkload
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.analyzedWorkload = 0;
                /**
                 * CaTaskModel totalWorkload.
                 * @member {number} totalWorkload
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.totalWorkload = 0;
                /**
                 * CaTaskModel status.
                 * @member {string} status
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.status = "";
                /**
                 * CaTaskModel triedCount.
                 * @member {number} triedCount
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.triedCount = 0;
                /**
                 * CaTaskModel workerHostname.
                 * @member {string} workerHostname
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.workerHostname = "";
                /**
                 * CaTaskModel heartbeatTime.
                 * @member {number} heartbeatTime
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.heartbeatTime = 0;
                /**
                 * CaTaskModel createTime.
                 * @member {number} createTime
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.createTime = 0;
                /**
                 * CaTaskModel updateTime.
                 * @member {number} updateTime
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.updateTime = 0;
                /**
                 * CaTaskModel startedAt.
                 * @member {number} startedAt
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.startedAt = 0;
                /**
                 * CaTaskModel completedAt.
                 * @member {number} completedAt
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.completedAt = 0;
                /**
                 * CaTaskModel celeryTaskId.
                 * @member {string} celeryTaskId
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 */
                CaTaskModel.prototype.celeryTaskId = "";
                /**
                 * Creates a new CaTaskModel instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {merico.analysis.gateway.ICaTaskModel=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.CaTaskModel} CaTaskModel instance
                 */
                CaTaskModel.create = function create(properties) {
                    return new CaTaskModel(properties);
                };
                /**
                 * Encodes the specified CaTaskModel message. Does not implicitly {@link merico.analysis.gateway.CaTaskModel.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {merico.analysis.gateway.ICaTaskModel} message CaTaskModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CaTaskModel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.analysisId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.name);
                    if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                        writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.seq);
                    if (message.analyzedWorkload != null && Object.hasOwnProperty.call(message, "analyzedWorkload"))
                        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.analyzedWorkload);
                    if (message.totalWorkload != null && Object.hasOwnProperty.call(message, "totalWorkload"))
                        writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.totalWorkload);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.status);
                    if (message.triedCount != null && Object.hasOwnProperty.call(message, "triedCount"))
                        writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.triedCount);
                    if (message.workerHostname != null && Object.hasOwnProperty.call(message, "workerHostname"))
                        writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.workerHostname);
                    if (message.heartbeatTime != null && Object.hasOwnProperty.call(message, "heartbeatTime"))
                        writer.uint32(/* id 10, wireType 0 =*/ 80).int32(message.heartbeatTime);
                    if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                        writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.createTime);
                    if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                        writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.updateTime);
                    if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                        writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.startedAt);
                    if (message.completedAt != null && Object.hasOwnProperty.call(message, "completedAt"))
                        writer.uint32(/* id 14, wireType 0 =*/ 112).int32(message.completedAt);
                    if (message.celeryTaskId != null && Object.hasOwnProperty.call(message, "celeryTaskId"))
                        writer.uint32(/* id 15, wireType 2 =*/ 122).string(message.celeryTaskId);
                    return writer;
                };
                /**
                 * Encodes the specified CaTaskModel message, length delimited. Does not implicitly {@link merico.analysis.gateway.CaTaskModel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {merico.analysis.gateway.ICaTaskModel} message CaTaskModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CaTaskModel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a CaTaskModel message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.CaTaskModel} CaTaskModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CaTaskModel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.CaTaskModel();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            case 2:
                                message.analysisId = reader.string();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.seq = reader.int32();
                                break;
                            case 5:
                                message.analyzedWorkload = reader.int32();
                                break;
                            case 6:
                                message.totalWorkload = reader.int32();
                                break;
                            case 7:
                                message.status = reader.string();
                                break;
                            case 8:
                                message.triedCount = reader.int32();
                                break;
                            case 9:
                                message.workerHostname = reader.string();
                                break;
                            case 10:
                                message.heartbeatTime = reader.int32();
                                break;
                            case 11:
                                message.createTime = reader.int32();
                                break;
                            case 12:
                                message.updateTime = reader.int32();
                                break;
                            case 13:
                                message.startedAt = reader.int32();
                                break;
                            case 14:
                                message.completedAt = reader.int32();
                                break;
                            case 15:
                                message.celeryTaskId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a CaTaskModel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.CaTaskModel} CaTaskModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CaTaskModel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a CaTaskModel message.
                 * @function verify
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CaTaskModel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.seq != null && message.hasOwnProperty("seq"))
                        if (!$util.isInteger(message.seq))
                            return "seq: integer expected";
                    if (message.analyzedWorkload != null && message.hasOwnProperty("analyzedWorkload"))
                        if (!$util.isInteger(message.analyzedWorkload))
                            return "analyzedWorkload: integer expected";
                    if (message.totalWorkload != null && message.hasOwnProperty("totalWorkload"))
                        if (!$util.isInteger(message.totalWorkload))
                            return "totalWorkload: integer expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isString(message.status))
                            return "status: string expected";
                    if (message.triedCount != null && message.hasOwnProperty("triedCount"))
                        if (!$util.isInteger(message.triedCount))
                            return "triedCount: integer expected";
                    if (message.workerHostname != null && message.hasOwnProperty("workerHostname"))
                        if (!$util.isString(message.workerHostname))
                            return "workerHostname: string expected";
                    if (message.heartbeatTime != null && message.hasOwnProperty("heartbeatTime"))
                        if (!$util.isInteger(message.heartbeatTime))
                            return "heartbeatTime: integer expected";
                    if (message.createTime != null && message.hasOwnProperty("createTime"))
                        if (!$util.isInteger(message.createTime))
                            return "createTime: integer expected";
                    if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                        if (!$util.isInteger(message.updateTime))
                            return "updateTime: integer expected";
                    if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                        if (!$util.isInteger(message.startedAt))
                            return "startedAt: integer expected";
                    if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                        if (!$util.isInteger(message.completedAt))
                            return "completedAt: integer expected";
                    if (message.celeryTaskId != null && message.hasOwnProperty("celeryTaskId"))
                        if (!$util.isString(message.celeryTaskId))
                            return "celeryTaskId: string expected";
                    return null;
                };
                /**
                 * Creates a CaTaskModel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.CaTaskModel} CaTaskModel
                 */
                CaTaskModel.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.CaTaskModel)
                        return object;
                    var message = new $root.merico.analysis.gateway.CaTaskModel();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.seq != null)
                        message.seq = object.seq | 0;
                    if (object.analyzedWorkload != null)
                        message.analyzedWorkload = object.analyzedWorkload | 0;
                    if (object.totalWorkload != null)
                        message.totalWorkload = object.totalWorkload | 0;
                    if (object.status != null)
                        message.status = String(object.status);
                    if (object.triedCount != null)
                        message.triedCount = object.triedCount | 0;
                    if (object.workerHostname != null)
                        message.workerHostname = String(object.workerHostname);
                    if (object.heartbeatTime != null)
                        message.heartbeatTime = object.heartbeatTime | 0;
                    if (object.createTime != null)
                        message.createTime = object.createTime | 0;
                    if (object.updateTime != null)
                        message.updateTime = object.updateTime | 0;
                    if (object.startedAt != null)
                        message.startedAt = object.startedAt | 0;
                    if (object.completedAt != null)
                        message.completedAt = object.completedAt | 0;
                    if (object.celeryTaskId != null)
                        message.celeryTaskId = String(object.celeryTaskId);
                    return message;
                };
                /**
                 * Creates a plain object from a CaTaskModel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @static
                 * @param {merico.analysis.gateway.CaTaskModel} message CaTaskModel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CaTaskModel.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        }
                        else
                            object.id = options.longs === String ? "0" : 0;
                        object.analysisId = "";
                        object.name = "";
                        object.seq = 0;
                        object.analyzedWorkload = 0;
                        object.totalWorkload = 0;
                        object.status = "";
                        object.triedCount = 0;
                        object.workerHostname = "";
                        object.heartbeatTime = 0;
                        object.createTime = 0;
                        object.updateTime = 0;
                        object.startedAt = 0;
                        object.completedAt = 0;
                        object.celeryTaskId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.seq != null && message.hasOwnProperty("seq"))
                        object.seq = message.seq;
                    if (message.analyzedWorkload != null && message.hasOwnProperty("analyzedWorkload"))
                        object.analyzedWorkload = message.analyzedWorkload;
                    if (message.totalWorkload != null && message.hasOwnProperty("totalWorkload"))
                        object.totalWorkload = message.totalWorkload;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.triedCount != null && message.hasOwnProperty("triedCount"))
                        object.triedCount = message.triedCount;
                    if (message.workerHostname != null && message.hasOwnProperty("workerHostname"))
                        object.workerHostname = message.workerHostname;
                    if (message.heartbeatTime != null && message.hasOwnProperty("heartbeatTime"))
                        object.heartbeatTime = message.heartbeatTime;
                    if (message.createTime != null && message.hasOwnProperty("createTime"))
                        object.createTime = message.createTime;
                    if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                        object.updateTime = message.updateTime;
                    if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                        object.startedAt = message.startedAt;
                    if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                        object.completedAt = message.completedAt;
                    if (message.celeryTaskId != null && message.hasOwnProperty("celeryTaskId"))
                        object.celeryTaskId = message.celeryTaskId;
                    return object;
                };
                /**
                 * Converts this CaTaskModel to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.CaTaskModel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CaTaskModel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return CaTaskModel;
            })();
            gateway.AnalysisMessage = (function () {
                /**
                 * Properties of an AnalysisMessage.
                 * @memberof merico.analysis.gateway
                 * @interface IAnalysisMessage
                 * @property {string|null} [gitUrl] AnalysisMessage gitUrl
                 * @property {string|null} [version] AnalysisMessage version
                 * @property {merico.analysis.gateway.AnalysisMessage.Readiness|null} [readiness] AnalysisMessage readiness
                 * @property {string|null} [reportId] AnalysisMessage reportId
                 * @property {string|null} [analysisId] AnalysisMessage analysisId
                 * @property {string|null} [reportObjectName] AnalysisMessage reportObjectName
                 * @property {string|null} [projectId] AnalysisMessage projectId
                 * @property {string|null} [analysisStatus] AnalysisMessage analysisStatus
                 * @property {string|null} [errorType] AnalysisMessage errorType
                 * @property {boolean|null} [reuseReport] AnalysisMessage reuseReport
                 * @property {string|null} [sourceType] AnalysisMessage sourceType
                 * @property {string|null} [sourceId] AnalysisMessage sourceId
                 */
                /**
                 * Constructs a new AnalysisMessage.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents an AnalysisMessage.
                 * @implements IAnalysisMessage
                 * @constructor
                 * @param {merico.analysis.gateway.IAnalysisMessage=} [properties] Properties to set
                 */
                function AnalysisMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * AnalysisMessage gitUrl.
                 * @member {string} gitUrl
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.gitUrl = "";
                /**
                 * AnalysisMessage version.
                 * @member {string} version
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.version = "";
                /**
                 * AnalysisMessage readiness.
                 * @member {merico.analysis.gateway.AnalysisMessage.Readiness} readiness
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.readiness = 0;
                /**
                 * AnalysisMessage reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.reportId = "";
                /**
                 * AnalysisMessage analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.analysisId = "";
                /**
                 * AnalysisMessage reportObjectName.
                 * @member {string} reportObjectName
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.reportObjectName = "";
                /**
                 * AnalysisMessage projectId.
                 * @member {string} projectId
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.projectId = "";
                /**
                 * AnalysisMessage analysisStatus.
                 * @member {string} analysisStatus
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.analysisStatus = "";
                /**
                 * AnalysisMessage errorType.
                 * @member {string} errorType
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.errorType = "";
                /**
                 * AnalysisMessage reuseReport.
                 * @member {boolean} reuseReport
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.reuseReport = false;
                /**
                 * AnalysisMessage sourceType.
                 * @member {string} sourceType
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.sourceType = "";
                /**
                 * AnalysisMessage sourceId.
                 * @member {string} sourceId
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 */
                AnalysisMessage.prototype.sourceId = "";
                /**
                 * Creates a new AnalysisMessage instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {merico.analysis.gateway.IAnalysisMessage=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.AnalysisMessage} AnalysisMessage instance
                 */
                AnalysisMessage.create = function create(properties) {
                    return new AnalysisMessage(properties);
                };
                /**
                 * Encodes the specified AnalysisMessage message. Does not implicitly {@link merico.analysis.gateway.AnalysisMessage.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {merico.analysis.gateway.IAnalysisMessage} message AnalysisMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AnalysisMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.gitUrl != null && Object.hasOwnProperty.call(message, "gitUrl"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.gitUrl);
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.version);
                    if (message.readiness != null && Object.hasOwnProperty.call(message, "readiness"))
                        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.readiness);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.reportId);
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.analysisId);
                    if (message.reportObjectName != null && Object.hasOwnProperty.call(message, "reportObjectName"))
                        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.reportObjectName);
                    if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.projectId);
                    if (message.analysisStatus != null && Object.hasOwnProperty.call(message, "analysisStatus"))
                        writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.analysisStatus);
                    if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                        writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.errorType);
                    if (message.reuseReport != null && Object.hasOwnProperty.call(message, "reuseReport"))
                        writer.uint32(/* id 11, wireType 0 =*/ 88).bool(message.reuseReport);
                    if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                        writer.uint32(/* id 12, wireType 2 =*/ 98).string(message.sourceType);
                    if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                        writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.sourceId);
                    return writer;
                };
                /**
                 * Encodes the specified AnalysisMessage message, length delimited. Does not implicitly {@link merico.analysis.gateway.AnalysisMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {merico.analysis.gateway.IAnalysisMessage} message AnalysisMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AnalysisMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes an AnalysisMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.AnalysisMessage} AnalysisMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AnalysisMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.AnalysisMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.gitUrl = reader.string();
                                break;
                            case 2:
                                message.version = reader.string();
                                break;
                            case 3:
                                message.readiness = reader.int32();
                                break;
                            case 5:
                                message.reportId = reader.string();
                                break;
                            case 6:
                                message.analysisId = reader.string();
                                break;
                            case 7:
                                message.reportObjectName = reader.string();
                                break;
                            case 8:
                                message.projectId = reader.string();
                                break;
                            case 9:
                                message.analysisStatus = reader.string();
                                break;
                            case 10:
                                message.errorType = reader.string();
                                break;
                            case 11:
                                message.reuseReport = reader.bool();
                                break;
                            case 12:
                                message.sourceType = reader.string();
                                break;
                            case 13:
                                message.sourceId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes an AnalysisMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.AnalysisMessage} AnalysisMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AnalysisMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies an AnalysisMessage message.
                 * @function verify
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AnalysisMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        if (!$util.isString(message.gitUrl))
                            return "gitUrl: string expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.readiness != null && message.hasOwnProperty("readiness"))
                        switch (message.readiness) {
                            default:
                                return "readiness: enum value expected";
                            case 0:
                            case 8:
                            case 4:
                            case 5:
                            case 6:
                            case 9:
                            case 10:
                            case 11:
                            case 1:
                            case 2:
                            case 7:
                            case 3:
                            case 20:
                                break;
                        }
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.reportObjectName != null && message.hasOwnProperty("reportObjectName"))
                        if (!$util.isString(message.reportObjectName))
                            return "reportObjectName: string expected";
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        if (!$util.isString(message.projectId))
                            return "projectId: string expected";
                    if (message.analysisStatus != null && message.hasOwnProperty("analysisStatus"))
                        if (!$util.isString(message.analysisStatus))
                            return "analysisStatus: string expected";
                    if (message.errorType != null && message.hasOwnProperty("errorType"))
                        if (!$util.isString(message.errorType))
                            return "errorType: string expected";
                    if (message.reuseReport != null && message.hasOwnProperty("reuseReport"))
                        if (typeof message.reuseReport !== "boolean")
                            return "reuseReport: boolean expected";
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        if (!$util.isString(message.sourceType))
                            return "sourceType: string expected";
                    if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                        if (!$util.isString(message.sourceId))
                            return "sourceId: string expected";
                    return null;
                };
                /**
                 * Creates an AnalysisMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.AnalysisMessage} AnalysisMessage
                 */
                AnalysisMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.AnalysisMessage)
                        return object;
                    var message = new $root.merico.analysis.gateway.AnalysisMessage();
                    if (object.gitUrl != null)
                        message.gitUrl = String(object.gitUrl);
                    if (object.version != null)
                        message.version = String(object.version);
                    switch (object.readiness) {
                        case "UNKNOWN":
                        case 0:
                            message.readiness = 0;
                            break;
                        case "NOT_INIT":
                        case 8:
                            message.readiness = 8;
                            break;
                        case "WAITING":
                        case 4:
                            message.readiness = 4;
                            break;
                        case "AUTH_REQUIRE":
                        case 5:
                            message.readiness = 5;
                            break;
                        case "NOT_REPO":
                        case 6:
                            message.readiness = 6;
                            break;
                        case "PRE_UNDERWAY":
                        case 9:
                            message.readiness = 9;
                            break;
                        case "PRE_READY":
                        case 10:
                            message.readiness = 10;
                            break;
                        case "UNDERWAY":
                        case 11:
                            message.readiness = 11;
                            break;
                        case "READY":
                        case 1:
                            message.readiness = 1;
                            break;
                        case "FAILURE":
                        case 2:
                            message.readiness = 2;
                            break;
                        case "PULLING":
                        case 7:
                            message.readiness = 7;
                            break;
                        case "UNSUPPORTED":
                        case 3:
                            message.readiness = 3;
                            break;
                        case "DUPLICATE":
                        case 20:
                            message.readiness = 20;
                            break;
                    }
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.reportObjectName != null)
                        message.reportObjectName = String(object.reportObjectName);
                    if (object.projectId != null)
                        message.projectId = String(object.projectId);
                    if (object.analysisStatus != null)
                        message.analysisStatus = String(object.analysisStatus);
                    if (object.errorType != null)
                        message.errorType = String(object.errorType);
                    if (object.reuseReport != null)
                        message.reuseReport = Boolean(object.reuseReport);
                    if (object.sourceType != null)
                        message.sourceType = String(object.sourceType);
                    if (object.sourceId != null)
                        message.sourceId = String(object.sourceId);
                    return message;
                };
                /**
                 * Creates a plain object from an AnalysisMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @static
                 * @param {merico.analysis.gateway.AnalysisMessage} message AnalysisMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AnalysisMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.gitUrl = "";
                        object.version = "";
                        object.readiness = options.enums === String ? "UNKNOWN" : 0;
                        object.reportId = "";
                        object.analysisId = "";
                        object.reportObjectName = "";
                        object.projectId = "";
                        object.analysisStatus = "";
                        object.errorType = "";
                        object.reuseReport = false;
                        object.sourceType = "";
                        object.sourceId = "";
                    }
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        object.gitUrl = message.gitUrl;
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.readiness != null && message.hasOwnProperty("readiness"))
                        object.readiness = options.enums === String ? $root.merico.analysis.gateway.AnalysisMessage.Readiness[message.readiness] : message.readiness;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.reportObjectName != null && message.hasOwnProperty("reportObjectName"))
                        object.reportObjectName = message.reportObjectName;
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        object.projectId = message.projectId;
                    if (message.analysisStatus != null && message.hasOwnProperty("analysisStatus"))
                        object.analysisStatus = message.analysisStatus;
                    if (message.errorType != null && message.hasOwnProperty("errorType"))
                        object.errorType = message.errorType;
                    if (message.reuseReport != null && message.hasOwnProperty("reuseReport"))
                        object.reuseReport = message.reuseReport;
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        object.sourceType = message.sourceType;
                    if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                        object.sourceId = message.sourceId;
                    return object;
                };
                /**
                 * Converts this AnalysisMessage to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.AnalysisMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AnalysisMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * Readiness enum.
                 * @name merico.analysis.gateway.AnalysisMessage.Readiness
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} NOT_INIT=8 NOT_INIT value
                 * @property {number} WAITING=4 WAITING value
                 * @property {number} AUTH_REQUIRE=5 AUTH_REQUIRE value
                 * @property {number} NOT_REPO=6 NOT_REPO value
                 * @property {number} PRE_UNDERWAY=9 PRE_UNDERWAY value
                 * @property {number} PRE_READY=10 PRE_READY value
                 * @property {number} UNDERWAY=11 UNDERWAY value
                 * @property {number} READY=1 READY value
                 * @property {number} FAILURE=2 FAILURE value
                 * @property {number} PULLING=7 PULLING value
                 * @property {number} UNSUPPORTED=3 UNSUPPORTED value
                 * @property {number} DUPLICATE=20 DUPLICATE value
                 */
                AnalysisMessage.Readiness = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[8] = "NOT_INIT"] = 8;
                    values[valuesById[4] = "WAITING"] = 4;
                    values[valuesById[5] = "AUTH_REQUIRE"] = 5;
                    values[valuesById[6] = "NOT_REPO"] = 6;
                    values[valuesById[9] = "PRE_UNDERWAY"] = 9;
                    values[valuesById[10] = "PRE_READY"] = 10;
                    values[valuesById[11] = "UNDERWAY"] = 11;
                    values[valuesById[1] = "READY"] = 1;
                    values[valuesById[2] = "FAILURE"] = 2;
                    values[valuesById[7] = "PULLING"] = 7;
                    values[valuesById[3] = "UNSUPPORTED"] = 3;
                    values[valuesById[20] = "DUPLICATE"] = 20;
                    return values;
                })();
                return AnalysisMessage;
            })();
            gateway.ProgressRateMessage = (function () {
                /**
                 * Properties of a ProgressRateMessage.
                 * @memberof merico.analysis.gateway
                 * @interface IProgressRateMessage
                 * @property {merico.analysis.gateway.IResponseStatus|null} [status] ProgressRateMessage status
                 * @property {string|null} [gitUrl] ProgressRateMessage gitUrl
                 * @property {number|null} [currentPercent] ProgressRateMessage currentPercent
                 * @property {number|null} [estimatedTotalSecond] ProgressRateMessage estimatedTotalSecond
                 * @property {string|null} [analysisId] ProgressRateMessage analysisId
                 * @property {string|null} [reportId] ProgressRateMessage reportId
                 * @property {string|null} [submitType] ProgressRateMessage submitType
                 * @property {Array.<merico.analysis.gateway.ICaTaskModel>|null} [tasks] ProgressRateMessage tasks
                 * @property {string|null} [analysisStatus] ProgressRateMessage analysisStatus
                 */
                /**
                 * Constructs a new ProgressRateMessage.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a ProgressRateMessage.
                 * @implements IProgressRateMessage
                 * @constructor
                 * @param {merico.analysis.gateway.IProgressRateMessage=} [properties] Properties to set
                 */
                function ProgressRateMessage(properties) {
                    this.tasks = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * ProgressRateMessage status.
                 * @member {merico.analysis.gateway.IResponseStatus|null|undefined} status
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.status = null;
                /**
                 * ProgressRateMessage gitUrl.
                 * @member {string} gitUrl
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.gitUrl = "";
                /**
                 * ProgressRateMessage currentPercent.
                 * @member {number} currentPercent
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.currentPercent = 0;
                /**
                 * ProgressRateMessage estimatedTotalSecond.
                 * @member {number} estimatedTotalSecond
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.estimatedTotalSecond = 0;
                /**
                 * ProgressRateMessage analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.analysisId = "";
                /**
                 * ProgressRateMessage reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.reportId = "";
                /**
                 * ProgressRateMessage submitType.
                 * @member {string} submitType
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.submitType = "";
                /**
                 * ProgressRateMessage tasks.
                 * @member {Array.<merico.analysis.gateway.ICaTaskModel>} tasks
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.tasks = $util.emptyArray;
                /**
                 * ProgressRateMessage analysisStatus.
                 * @member {string} analysisStatus
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 */
                ProgressRateMessage.prototype.analysisStatus = "";
                /**
                 * Creates a new ProgressRateMessage instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {merico.analysis.gateway.IProgressRateMessage=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.ProgressRateMessage} ProgressRateMessage instance
                 */
                ProgressRateMessage.create = function create(properties) {
                    return new ProgressRateMessage(properties);
                };
                /**
                 * Encodes the specified ProgressRateMessage message. Does not implicitly {@link merico.analysis.gateway.ProgressRateMessage.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {merico.analysis.gateway.IProgressRateMessage} message ProgressRateMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgressRateMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        $root.merico.analysis.gateway.ResponseStatus.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                    if (message.gitUrl != null && Object.hasOwnProperty.call(message, "gitUrl"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.gitUrl);
                    if (message.currentPercent != null && Object.hasOwnProperty.call(message, "currentPercent"))
                        writer.uint32(/* id 6, wireType 5 =*/ 53).float(message.currentPercent);
                    if (message.estimatedTotalSecond != null && Object.hasOwnProperty.call(message, "estimatedTotalSecond"))
                        writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.estimatedTotalSecond);
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.analysisId);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 11, wireType 2 =*/ 90).string(message.reportId);
                    if (message.submitType != null && Object.hasOwnProperty.call(message, "submitType"))
                        writer.uint32(/* id 12, wireType 2 =*/ 98).string(message.submitType);
                    if (message.tasks != null && message.tasks.length)
                        for (var i = 0; i < message.tasks.length; ++i)
                            $root.merico.analysis.gateway.CaTaskModel.encode(message.tasks[i], writer.uint32(/* id 13, wireType 2 =*/ 106).fork()).ldelim();
                    if (message.analysisStatus != null && Object.hasOwnProperty.call(message, "analysisStatus"))
                        writer.uint32(/* id 14, wireType 2 =*/ 114).string(message.analysisStatus);
                    return writer;
                };
                /**
                 * Encodes the specified ProgressRateMessage message, length delimited. Does not implicitly {@link merico.analysis.gateway.ProgressRateMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {merico.analysis.gateway.IProgressRateMessage} message ProgressRateMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgressRateMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a ProgressRateMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.ProgressRateMessage} ProgressRateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgressRateMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.ProgressRateMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.status = $root.merico.analysis.gateway.ResponseStatus.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.gitUrl = reader.string();
                                break;
                            case 6:
                                message.currentPercent = reader.float();
                                break;
                            case 9:
                                message.estimatedTotalSecond = reader.int32();
                                break;
                            case 10:
                                message.analysisId = reader.string();
                                break;
                            case 11:
                                message.reportId = reader.string();
                                break;
                            case 12:
                                message.submitType = reader.string();
                                break;
                            case 13:
                                if (!(message.tasks && message.tasks.length))
                                    message.tasks = [];
                                message.tasks.push($root.merico.analysis.gateway.CaTaskModel.decode(reader, reader.uint32()));
                                break;
                            case 14:
                                message.analysisStatus = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a ProgressRateMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.ProgressRateMessage} ProgressRateMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgressRateMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a ProgressRateMessage message.
                 * @function verify
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProgressRateMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status")) {
                        var error = $root.merico.analysis.gateway.ResponseStatus.verify(message.status);
                        if (error)
                            return "status." + error;
                    }
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        if (!$util.isString(message.gitUrl))
                            return "gitUrl: string expected";
                    if (message.currentPercent != null && message.hasOwnProperty("currentPercent"))
                        if (typeof message.currentPercent !== "number")
                            return "currentPercent: number expected";
                    if (message.estimatedTotalSecond != null && message.hasOwnProperty("estimatedTotalSecond"))
                        if (!$util.isInteger(message.estimatedTotalSecond))
                            return "estimatedTotalSecond: integer expected";
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    if (message.submitType != null && message.hasOwnProperty("submitType"))
                        if (!$util.isString(message.submitType))
                            return "submitType: string expected";
                    if (message.tasks != null && message.hasOwnProperty("tasks")) {
                        if (!Array.isArray(message.tasks))
                            return "tasks: array expected";
                        for (var i = 0; i < message.tasks.length; ++i) {
                            var error = $root.merico.analysis.gateway.CaTaskModel.verify(message.tasks[i]);
                            if (error)
                                return "tasks." + error;
                        }
                    }
                    if (message.analysisStatus != null && message.hasOwnProperty("analysisStatus"))
                        if (!$util.isString(message.analysisStatus))
                            return "analysisStatus: string expected";
                    return null;
                };
                /**
                 * Creates a ProgressRateMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.ProgressRateMessage} ProgressRateMessage
                 */
                ProgressRateMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.ProgressRateMessage)
                        return object;
                    var message = new $root.merico.analysis.gateway.ProgressRateMessage();
                    if (object.status != null) {
                        if (typeof object.status !== "object")
                            throw TypeError(".merico.analysis.gateway.ProgressRateMessage.status: object expected");
                        message.status = $root.merico.analysis.gateway.ResponseStatus.fromObject(object.status);
                    }
                    if (object.gitUrl != null)
                        message.gitUrl = String(object.gitUrl);
                    if (object.currentPercent != null)
                        message.currentPercent = Number(object.currentPercent);
                    if (object.estimatedTotalSecond != null)
                        message.estimatedTotalSecond = object.estimatedTotalSecond | 0;
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    if (object.submitType != null)
                        message.submitType = String(object.submitType);
                    if (object.tasks) {
                        if (!Array.isArray(object.tasks))
                            throw TypeError(".merico.analysis.gateway.ProgressRateMessage.tasks: array expected");
                        message.tasks = [];
                        for (var i = 0; i < object.tasks.length; ++i) {
                            if (typeof object.tasks[i] !== "object")
                                throw TypeError(".merico.analysis.gateway.ProgressRateMessage.tasks: object expected");
                            message.tasks[i] = $root.merico.analysis.gateway.CaTaskModel.fromObject(object.tasks[i]);
                        }
                    }
                    if (object.analysisStatus != null)
                        message.analysisStatus = String(object.analysisStatus);
                    return message;
                };
                /**
                 * Creates a plain object from a ProgressRateMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @static
                 * @param {merico.analysis.gateway.ProgressRateMessage} message ProgressRateMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProgressRateMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tasks = [];
                    if (options.defaults) {
                        object.status = null;
                        object.gitUrl = "";
                        object.currentPercent = 0;
                        object.estimatedTotalSecond = 0;
                        object.analysisId = "";
                        object.reportId = "";
                        object.submitType = "";
                        object.analysisStatus = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = $root.merico.analysis.gateway.ResponseStatus.toObject(message.status, options);
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        object.gitUrl = message.gitUrl;
                    if (message.currentPercent != null && message.hasOwnProperty("currentPercent"))
                        object.currentPercent = options.json && !isFinite(message.currentPercent) ? String(message.currentPercent) : message.currentPercent;
                    if (message.estimatedTotalSecond != null && message.hasOwnProperty("estimatedTotalSecond"))
                        object.estimatedTotalSecond = message.estimatedTotalSecond;
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    if (message.submitType != null && message.hasOwnProperty("submitType"))
                        object.submitType = message.submitType;
                    if (message.tasks && message.tasks.length) {
                        object.tasks = [];
                        for (var j = 0; j < message.tasks.length; ++j)
                            object.tasks[j] = $root.merico.analysis.gateway.CaTaskModel.toObject(message.tasks[j], options);
                    }
                    if (message.analysisStatus != null && message.hasOwnProperty("analysisStatus"))
                        object.analysisStatus = message.analysisStatus;
                    return object;
                };
                /**
                 * Converts this ProgressRateMessage to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.ProgressRateMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProgressRateMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return ProgressRateMessage;
            })();
            gateway.ResponseStatus = (function () {
                /**
                 * Properties of a ResponseStatus.
                 * @memberof merico.analysis.gateway
                 * @interface IResponseStatus
                 * @property {merico.analysis.gateway.ResponseStatus.StatusCode|null} [code] ResponseStatus code
                 * @property {string|null} [message] ResponseStatus message
                 */
                /**
                 * Constructs a new ResponseStatus.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a ResponseStatus.
                 * @implements IResponseStatus
                 * @constructor
                 * @param {merico.analysis.gateway.IResponseStatus=} [properties] Properties to set
                 */
                function ResponseStatus(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * ResponseStatus code.
                 * @member {merico.analysis.gateway.ResponseStatus.StatusCode} code
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @instance
                 */
                ResponseStatus.prototype.code = 0;
                /**
                 * ResponseStatus message.
                 * @member {string} message
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @instance
                 */
                ResponseStatus.prototype.message = "";
                /**
                 * Creates a new ResponseStatus instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {merico.analysis.gateway.IResponseStatus=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.ResponseStatus} ResponseStatus instance
                 */
                ResponseStatus.create = function create(properties) {
                    return new ResponseStatus(properties);
                };
                /**
                 * Encodes the specified ResponseStatus message. Does not implicitly {@link merico.analysis.gateway.ResponseStatus.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {merico.analysis.gateway.IResponseStatus} message ResponseStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResponseStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.code);
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.message);
                    return writer;
                };
                /**
                 * Encodes the specified ResponseStatus message, length delimited. Does not implicitly {@link merico.analysis.gateway.ResponseStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {merico.analysis.gateway.IResponseStatus} message ResponseStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResponseStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a ResponseStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.ResponseStatus} ResponseStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResponseStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.ResponseStatus();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.code = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a ResponseStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.ResponseStatus} ResponseStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResponseStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a ResponseStatus message.
                 * @function verify
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResponseStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.code != null && message.hasOwnProperty("code"))
                        switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 401:
                            case 500:
                            case 1400:
                            case 1401:
                            case 1402:
                            case 1403:
                            case 1404:
                            case 1405:
                            case 1406:
                            case 1407:
                            case 1408:
                            case 1409:
                                break;
                        }
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    return null;
                };
                /**
                 * Creates a ResponseStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.ResponseStatus} ResponseStatus
                 */
                ResponseStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.ResponseStatus)
                        return object;
                    var message = new $root.merico.analysis.gateway.ResponseStatus();
                    switch (object.code) {
                        case "SUCCESS":
                        case 0:
                            message.code = 0;
                            break;
                        case "UNAUTHORIZED":
                        case 401:
                            message.code = 401;
                            break;
                        case "INTERNAL_SERVER_ERROR":
                        case 500:
                            message.code = 500;
                            break;
                        case "UNKNOWN":
                        case 1400:
                            message.code = 1400;
                            break;
                        case "OBJECT_NOT_FOUND":
                        case 1401:
                            message.code = 1401;
                            break;
                        case "VALUE_NOT_FOUND":
                        case 1402:
                            message.code = 1402;
                            break;
                        case "VALUE_ALREADY_EXISTS":
                        case 1403:
                            message.code = 1403;
                            break;
                        case "VALUE_OUT_OF_RANGE":
                        case 1404:
                            message.code = 1404;
                            break;
                        case "INVALID_VALUE":
                        case 1405:
                            message.code = 1405;
                            break;
                        case "FAILED_DEPENDENCY":
                        case 1406:
                            message.code = 1406;
                            break;
                        case "FORBIDDEN":
                        case 1407:
                            message.code = 1407;
                            break;
                        case "USERNAME_TAKEN":
                        case 1408:
                            message.code = 1408;
                            break;
                        case "EMAIL_TAKEN":
                        case 1409:
                            message.code = 1409;
                            break;
                    }
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };
                /**
                 * Creates a plain object from a ResponseStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @static
                 * @param {merico.analysis.gateway.ResponseStatus} message ResponseStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResponseStatus.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.code = options.enums === String ? "SUCCESS" : 0;
                        object.message = "";
                    }
                    if (message.code != null && message.hasOwnProperty("code"))
                        object.code = options.enums === String ? $root.merico.analysis.gateway.ResponseStatus.StatusCode[message.code] : message.code;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    return object;
                };
                /**
                 * Converts this ResponseStatus to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.ResponseStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResponseStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * StatusCode enum.
                 * @name merico.analysis.gateway.ResponseStatus.StatusCode
                 * @enum {number}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} UNAUTHORIZED=401 UNAUTHORIZED value
                 * @property {number} INTERNAL_SERVER_ERROR=500 INTERNAL_SERVER_ERROR value
                 * @property {number} UNKNOWN=1400 UNKNOWN value
                 * @property {number} OBJECT_NOT_FOUND=1401 OBJECT_NOT_FOUND value
                 * @property {number} VALUE_NOT_FOUND=1402 VALUE_NOT_FOUND value
                 * @property {number} VALUE_ALREADY_EXISTS=1403 VALUE_ALREADY_EXISTS value
                 * @property {number} VALUE_OUT_OF_RANGE=1404 VALUE_OUT_OF_RANGE value
                 * @property {number} INVALID_VALUE=1405 INVALID_VALUE value
                 * @property {number} FAILED_DEPENDENCY=1406 FAILED_DEPENDENCY value
                 * @property {number} FORBIDDEN=1407 FORBIDDEN value
                 * @property {number} USERNAME_TAKEN=1408 USERNAME_TAKEN value
                 * @property {number} EMAIL_TAKEN=1409 EMAIL_TAKEN value
                 */
                ResponseStatus.StatusCode = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[401] = "UNAUTHORIZED"] = 401;
                    values[valuesById[500] = "INTERNAL_SERVER_ERROR"] = 500;
                    values[valuesById[1400] = "UNKNOWN"] = 1400;
                    values[valuesById[1401] = "OBJECT_NOT_FOUND"] = 1401;
                    values[valuesById[1402] = "VALUE_NOT_FOUND"] = 1402;
                    values[valuesById[1403] = "VALUE_ALREADY_EXISTS"] = 1403;
                    values[valuesById[1404] = "VALUE_OUT_OF_RANGE"] = 1404;
                    values[valuesById[1405] = "INVALID_VALUE"] = 1405;
                    values[valuesById[1406] = "FAILED_DEPENDENCY"] = 1406;
                    values[valuesById[1407] = "FORBIDDEN"] = 1407;
                    values[valuesById[1408] = "USERNAME_TAKEN"] = 1408;
                    values[valuesById[1409] = "EMAIL_TAKEN"] = 1409;
                    return values;
                })();
                return ResponseStatus;
            })();
            gateway.SubmitRepoRequest = (function () {
                /**
                 * Properties of a SubmitRepoRequest.
                 * @memberof merico.analysis.gateway
                 * @interface ISubmitRepoRequest
                 * @property {string|null} [gitUrl] SubmitRepoRequest gitUrl
                 * @property {number|Long|null} [batchTime] SubmitRepoRequest batchTime
                 * @property {merico.analysis.gateway.SubmitRepoRequest.AuthType|null} [authType] SubmitRepoRequest authType
                 * @property {string|null} [username] SubmitRepoRequest username
                 * @property {string|null} [password] SubmitRepoRequest password
                 * @property {string|null} [privateKey] SubmitRepoRequest privateKey
                 * @property {string|null} [callbackAddress] SubmitRepoRequest callbackAddress
                 * @property {Array.<string>|null} [pathBlacklist] SubmitRepoRequest pathBlacklist
                 * @property {Array.<string>|null} [commitBlacklist] SubmitRepoRequest commitBlacklist
                 * @property {string|null} [projectId] SubmitRepoRequest projectId
                 * @property {boolean|null} [forceAnalyze] SubmitRepoRequest forceAnalyze
                 * @property {string|null} [defaultRef] SubmitRepoRequest defaultRef
                 * @property {number|Long|null} [commitBefore] SubmitRepoRequest commitBefore
                 * @property {string|null} [reportId] SubmitRepoRequest reportId
                 * @property {string|null} [analysisConf] SubmitRepoRequest analysisConf
                 * @property {string|null} [publicKey] SubmitRepoRequest publicKey
                 * @property {number|Long|null} [commitAfter] SubmitRepoRequest commitAfter
                 * @property {boolean|null} [singleBranch] SubmitRepoRequest singleBranch
                 * @property {string|null} [sourceType] SubmitRepoRequest sourceType
                 * @property {string|null} [sourceId] SubmitRepoRequest sourceId
                 */
                /**
                 * Constructs a new SubmitRepoRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a SubmitRepoRequest.
                 * @implements ISubmitRepoRequest
                 * @constructor
                 * @param {merico.analysis.gateway.ISubmitRepoRequest=} [properties] Properties to set
                 */
                function SubmitRepoRequest(properties) {
                    this.pathBlacklist = [];
                    this.commitBlacklist = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * SubmitRepoRequest gitUrl.
                 * @member {string} gitUrl
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.gitUrl = "";
                /**
                 * SubmitRepoRequest batchTime.
                 * @member {number|Long} batchTime
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.batchTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                /**
                 * SubmitRepoRequest authType.
                 * @member {merico.analysis.gateway.SubmitRepoRequest.AuthType} authType
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.authType = 0;
                /**
                 * SubmitRepoRequest username.
                 * @member {string} username
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.username = "";
                /**
                 * SubmitRepoRequest password.
                 * @member {string} password
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.password = "";
                /**
                 * SubmitRepoRequest privateKey.
                 * @member {string} privateKey
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.privateKey = "";
                /**
                 * SubmitRepoRequest callbackAddress.
                 * @member {string} callbackAddress
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.callbackAddress = "";
                /**
                 * SubmitRepoRequest pathBlacklist.
                 * @member {Array.<string>} pathBlacklist
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.pathBlacklist = $util.emptyArray;
                /**
                 * SubmitRepoRequest commitBlacklist.
                 * @member {Array.<string>} commitBlacklist
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.commitBlacklist = $util.emptyArray;
                /**
                 * SubmitRepoRequest projectId.
                 * @member {string} projectId
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.projectId = "";
                /**
                 * SubmitRepoRequest forceAnalyze.
                 * @member {boolean} forceAnalyze
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.forceAnalyze = false;
                /**
                 * SubmitRepoRequest defaultRef.
                 * @member {string} defaultRef
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.defaultRef = "";
                /**
                 * SubmitRepoRequest commitBefore.
                 * @member {number|Long} commitBefore
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.commitBefore = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                /**
                 * SubmitRepoRequest reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.reportId = "";
                /**
                 * SubmitRepoRequest analysisConf.
                 * @member {string} analysisConf
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.analysisConf = "";
                /**
                 * SubmitRepoRequest publicKey.
                 * @member {string} publicKey
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.publicKey = "";
                /**
                 * SubmitRepoRequest commitAfter.
                 * @member {number|Long} commitAfter
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.commitAfter = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                /**
                 * SubmitRepoRequest singleBranch.
                 * @member {boolean} singleBranch
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.singleBranch = false;
                /**
                 * SubmitRepoRequest sourceType.
                 * @member {string} sourceType
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.sourceType = "";
                /**
                 * SubmitRepoRequest sourceId.
                 * @member {string} sourceId
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 */
                SubmitRepoRequest.prototype.sourceId = "";
                /**
                 * Creates a new SubmitRepoRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.SubmitRepoRequest} SubmitRepoRequest instance
                 */
                SubmitRepoRequest.create = function create(properties) {
                    return new SubmitRepoRequest(properties);
                };
                /**
                 * Encodes the specified SubmitRepoRequest message. Does not implicitly {@link merico.analysis.gateway.SubmitRepoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} message SubmitRepoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubmitRepoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.gitUrl != null && Object.hasOwnProperty.call(message, "gitUrl"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.gitUrl);
                    if (message.batchTime != null && Object.hasOwnProperty.call(message, "batchTime"))
                        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.batchTime);
                    if (message.authType != null && Object.hasOwnProperty.call(message, "authType"))
                        writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.authType);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.username);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.password);
                    if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.privateKey);
                    if (message.callbackAddress != null && Object.hasOwnProperty.call(message, "callbackAddress"))
                        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.callbackAddress);
                    if (message.pathBlacklist != null && message.pathBlacklist.length)
                        for (var i = 0; i < message.pathBlacklist.length; ++i)
                            writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.pathBlacklist[i]);
                    if (message.commitBlacklist != null && message.commitBlacklist.length)
                        for (var i = 0; i < message.commitBlacklist.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.commitBlacklist[i]);
                    if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                        writer.uint32(/* id 11, wireType 2 =*/ 90).string(message.projectId);
                    if (message.forceAnalyze != null && Object.hasOwnProperty.call(message, "forceAnalyze"))
                        writer.uint32(/* id 12, wireType 0 =*/ 96).bool(message.forceAnalyze);
                    if (message.defaultRef != null && Object.hasOwnProperty.call(message, "defaultRef"))
                        writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.defaultRef);
                    if (message.commitBefore != null && Object.hasOwnProperty.call(message, "commitBefore"))
                        writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.commitBefore);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 15, wireType 2 =*/ 122).string(message.reportId);
                    if (message.analysisConf != null && Object.hasOwnProperty.call(message, "analysisConf"))
                        writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.analysisConf);
                    if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                        writer.uint32(/* id 17, wireType 2 =*/ 138).string(message.publicKey);
                    if (message.commitAfter != null && Object.hasOwnProperty.call(message, "commitAfter"))
                        writer.uint32(/* id 18, wireType 0 =*/ 144).int64(message.commitAfter);
                    if (message.singleBranch != null && Object.hasOwnProperty.call(message, "singleBranch"))
                        writer.uint32(/* id 19, wireType 0 =*/ 152).bool(message.singleBranch);
                    if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                        writer.uint32(/* id 20, wireType 2 =*/ 162).string(message.sourceType);
                    if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                        writer.uint32(/* id 21, wireType 2 =*/ 170).string(message.sourceId);
                    return writer;
                };
                /**
                 * Encodes the specified SubmitRepoRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.SubmitRepoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} message SubmitRepoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubmitRepoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a SubmitRepoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.SubmitRepoRequest} SubmitRepoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubmitRepoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.SubmitRepoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.gitUrl = reader.string();
                                break;
                            case 3:
                                message.batchTime = reader.int64();
                                break;
                            case 4:
                                message.authType = reader.int32();
                                break;
                            case 5:
                                message.username = reader.string();
                                break;
                            case 6:
                                message.password = reader.string();
                                break;
                            case 7:
                                message.privateKey = reader.string();
                                break;
                            case 8:
                                message.callbackAddress = reader.string();
                                break;
                            case 9:
                                if (!(message.pathBlacklist && message.pathBlacklist.length))
                                    message.pathBlacklist = [];
                                message.pathBlacklist.push(reader.string());
                                break;
                            case 10:
                                if (!(message.commitBlacklist && message.commitBlacklist.length))
                                    message.commitBlacklist = [];
                                message.commitBlacklist.push(reader.string());
                                break;
                            case 11:
                                message.projectId = reader.string();
                                break;
                            case 12:
                                message.forceAnalyze = reader.bool();
                                break;
                            case 13:
                                message.defaultRef = reader.string();
                                break;
                            case 14:
                                message.commitBefore = reader.int64();
                                break;
                            case 15:
                                message.reportId = reader.string();
                                break;
                            case 16:
                                message.analysisConf = reader.string();
                                break;
                            case 17:
                                message.publicKey = reader.string();
                                break;
                            case 18:
                                message.commitAfter = reader.int64();
                                break;
                            case 19:
                                message.singleBranch = reader.bool();
                                break;
                            case 20:
                                message.sourceType = reader.string();
                                break;
                            case 21:
                                message.sourceId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a SubmitRepoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.SubmitRepoRequest} SubmitRepoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubmitRepoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a SubmitRepoRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SubmitRepoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        if (!$util.isString(message.gitUrl))
                            return "gitUrl: string expected";
                    if (message.batchTime != null && message.hasOwnProperty("batchTime"))
                        if (!$util.isInteger(message.batchTime) && !(message.batchTime && $util.isInteger(message.batchTime.low) && $util.isInteger(message.batchTime.high)))
                            return "batchTime: integer|Long expected";
                    if (message.authType != null && message.hasOwnProperty("authType"))
                        switch (message.authType) {
                            default:
                                return "authType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                        }
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                        if (!$util.isString(message.privateKey))
                            return "privateKey: string expected";
                    if (message.callbackAddress != null && message.hasOwnProperty("callbackAddress"))
                        if (!$util.isString(message.callbackAddress))
                            return "callbackAddress: string expected";
                    if (message.pathBlacklist != null && message.hasOwnProperty("pathBlacklist")) {
                        if (!Array.isArray(message.pathBlacklist))
                            return "pathBlacklist: array expected";
                        for (var i = 0; i < message.pathBlacklist.length; ++i)
                            if (!$util.isString(message.pathBlacklist[i]))
                                return "pathBlacklist: string[] expected";
                    }
                    if (message.commitBlacklist != null && message.hasOwnProperty("commitBlacklist")) {
                        if (!Array.isArray(message.commitBlacklist))
                            return "commitBlacklist: array expected";
                        for (var i = 0; i < message.commitBlacklist.length; ++i)
                            if (!$util.isString(message.commitBlacklist[i]))
                                return "commitBlacklist: string[] expected";
                    }
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        if (!$util.isString(message.projectId))
                            return "projectId: string expected";
                    if (message.forceAnalyze != null && message.hasOwnProperty("forceAnalyze"))
                        if (typeof message.forceAnalyze !== "boolean")
                            return "forceAnalyze: boolean expected";
                    if (message.defaultRef != null && message.hasOwnProperty("defaultRef"))
                        if (!$util.isString(message.defaultRef))
                            return "defaultRef: string expected";
                    if (message.commitBefore != null && message.hasOwnProperty("commitBefore"))
                        if (!$util.isInteger(message.commitBefore) && !(message.commitBefore && $util.isInteger(message.commitBefore.low) && $util.isInteger(message.commitBefore.high)))
                            return "commitBefore: integer|Long expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    if (message.analysisConf != null && message.hasOwnProperty("analysisConf"))
                        if (!$util.isString(message.analysisConf))
                            return "analysisConf: string expected";
                    if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                        if (!$util.isString(message.publicKey))
                            return "publicKey: string expected";
                    if (message.commitAfter != null && message.hasOwnProperty("commitAfter"))
                        if (!$util.isInteger(message.commitAfter) && !(message.commitAfter && $util.isInteger(message.commitAfter.low) && $util.isInteger(message.commitAfter.high)))
                            return "commitAfter: integer|Long expected";
                    if (message.singleBranch != null && message.hasOwnProperty("singleBranch"))
                        if (typeof message.singleBranch !== "boolean")
                            return "singleBranch: boolean expected";
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        if (!$util.isString(message.sourceType))
                            return "sourceType: string expected";
                    if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                        if (!$util.isString(message.sourceId))
                            return "sourceId: string expected";
                    return null;
                };
                /**
                 * Creates a SubmitRepoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.SubmitRepoRequest} SubmitRepoRequest
                 */
                SubmitRepoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.SubmitRepoRequest)
                        return object;
                    var message = new $root.merico.analysis.gateway.SubmitRepoRequest();
                    if (object.gitUrl != null)
                        message.gitUrl = String(object.gitUrl);
                    if (object.batchTime != null)
                        if ($util.Long)
                            (message.batchTime = $util.Long.fromValue(object.batchTime)).unsigned = false;
                        else if (typeof object.batchTime === "string")
                            message.batchTime = parseInt(object.batchTime, 10);
                        else if (typeof object.batchTime === "number")
                            message.batchTime = object.batchTime;
                        else if (typeof object.batchTime === "object")
                            message.batchTime = new $util.LongBits(object.batchTime.low >>> 0, object.batchTime.high >>> 0).toNumber();
                    switch (object.authType) {
                        case "UNKNOWN":
                        case 0:
                            message.authType = 0;
                            break;
                        case "SSH_KEY":
                        case 1:
                            message.authType = 1;
                            break;
                        case "HTTP_BASE":
                        case 2:
                            message.authType = 2;
                            break;
                    }
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    if (object.privateKey != null)
                        message.privateKey = String(object.privateKey);
                    if (object.callbackAddress != null)
                        message.callbackAddress = String(object.callbackAddress);
                    if (object.pathBlacklist) {
                        if (!Array.isArray(object.pathBlacklist))
                            throw TypeError(".merico.analysis.gateway.SubmitRepoRequest.pathBlacklist: array expected");
                        message.pathBlacklist = [];
                        for (var i = 0; i < object.pathBlacklist.length; ++i)
                            message.pathBlacklist[i] = String(object.pathBlacklist[i]);
                    }
                    if (object.commitBlacklist) {
                        if (!Array.isArray(object.commitBlacklist))
                            throw TypeError(".merico.analysis.gateway.SubmitRepoRequest.commitBlacklist: array expected");
                        message.commitBlacklist = [];
                        for (var i = 0; i < object.commitBlacklist.length; ++i)
                            message.commitBlacklist[i] = String(object.commitBlacklist[i]);
                    }
                    if (object.projectId != null)
                        message.projectId = String(object.projectId);
                    if (object.forceAnalyze != null)
                        message.forceAnalyze = Boolean(object.forceAnalyze);
                    if (object.defaultRef != null)
                        message.defaultRef = String(object.defaultRef);
                    if (object.commitBefore != null)
                        if ($util.Long)
                            (message.commitBefore = $util.Long.fromValue(object.commitBefore)).unsigned = false;
                        else if (typeof object.commitBefore === "string")
                            message.commitBefore = parseInt(object.commitBefore, 10);
                        else if (typeof object.commitBefore === "number")
                            message.commitBefore = object.commitBefore;
                        else if (typeof object.commitBefore === "object")
                            message.commitBefore = new $util.LongBits(object.commitBefore.low >>> 0, object.commitBefore.high >>> 0).toNumber();
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    if (object.analysisConf != null)
                        message.analysisConf = String(object.analysisConf);
                    if (object.publicKey != null)
                        message.publicKey = String(object.publicKey);
                    if (object.commitAfter != null)
                        if ($util.Long)
                            (message.commitAfter = $util.Long.fromValue(object.commitAfter)).unsigned = false;
                        else if (typeof object.commitAfter === "string")
                            message.commitAfter = parseInt(object.commitAfter, 10);
                        else if (typeof object.commitAfter === "number")
                            message.commitAfter = object.commitAfter;
                        else if (typeof object.commitAfter === "object")
                            message.commitAfter = new $util.LongBits(object.commitAfter.low >>> 0, object.commitAfter.high >>> 0).toNumber();
                    if (object.singleBranch != null)
                        message.singleBranch = Boolean(object.singleBranch);
                    if (object.sourceType != null)
                        message.sourceType = String(object.sourceType);
                    if (object.sourceId != null)
                        message.sourceId = String(object.sourceId);
                    return message;
                };
                /**
                 * Creates a plain object from a SubmitRepoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @static
                 * @param {merico.analysis.gateway.SubmitRepoRequest} message SubmitRepoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SubmitRepoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.pathBlacklist = [];
                        object.commitBlacklist = [];
                    }
                    if (options.defaults) {
                        object.gitUrl = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.batchTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        }
                        else
                            object.batchTime = options.longs === String ? "0" : 0;
                        object.authType = options.enums === String ? "UNKNOWN" : 0;
                        object.username = "";
                        object.password = "";
                        object.privateKey = "";
                        object.callbackAddress = "";
                        object.projectId = "";
                        object.forceAnalyze = false;
                        object.defaultRef = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.commitBefore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        }
                        else
                            object.commitBefore = options.longs === String ? "0" : 0;
                        object.reportId = "";
                        object.analysisConf = "";
                        object.publicKey = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.commitAfter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        }
                        else
                            object.commitAfter = options.longs === String ? "0" : 0;
                        object.singleBranch = false;
                        object.sourceType = "";
                        object.sourceId = "";
                    }
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        object.gitUrl = message.gitUrl;
                    if (message.batchTime != null && message.hasOwnProperty("batchTime"))
                        if (typeof message.batchTime === "number")
                            object.batchTime = options.longs === String ? String(message.batchTime) : message.batchTime;
                        else
                            object.batchTime = options.longs === String ? $util.Long.prototype.toString.call(message.batchTime) : options.longs === Number ? new $util.LongBits(message.batchTime.low >>> 0, message.batchTime.high >>> 0).toNumber() : message.batchTime;
                    if (message.authType != null && message.hasOwnProperty("authType"))
                        object.authType = options.enums === String ? $root.merico.analysis.gateway.SubmitRepoRequest.AuthType[message.authType] : message.authType;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                        object.privateKey = message.privateKey;
                    if (message.callbackAddress != null && message.hasOwnProperty("callbackAddress"))
                        object.callbackAddress = message.callbackAddress;
                    if (message.pathBlacklist && message.pathBlacklist.length) {
                        object.pathBlacklist = [];
                        for (var j = 0; j < message.pathBlacklist.length; ++j)
                            object.pathBlacklist[j] = message.pathBlacklist[j];
                    }
                    if (message.commitBlacklist && message.commitBlacklist.length) {
                        object.commitBlacklist = [];
                        for (var j = 0; j < message.commitBlacklist.length; ++j)
                            object.commitBlacklist[j] = message.commitBlacklist[j];
                    }
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        object.projectId = message.projectId;
                    if (message.forceAnalyze != null && message.hasOwnProperty("forceAnalyze"))
                        object.forceAnalyze = message.forceAnalyze;
                    if (message.defaultRef != null && message.hasOwnProperty("defaultRef"))
                        object.defaultRef = message.defaultRef;
                    if (message.commitBefore != null && message.hasOwnProperty("commitBefore"))
                        if (typeof message.commitBefore === "number")
                            object.commitBefore = options.longs === String ? String(message.commitBefore) : message.commitBefore;
                        else
                            object.commitBefore = options.longs === String ? $util.Long.prototype.toString.call(message.commitBefore) : options.longs === Number ? new $util.LongBits(message.commitBefore.low >>> 0, message.commitBefore.high >>> 0).toNumber() : message.commitBefore;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    if (message.analysisConf != null && message.hasOwnProperty("analysisConf"))
                        object.analysisConf = message.analysisConf;
                    if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                        object.publicKey = message.publicKey;
                    if (message.commitAfter != null && message.hasOwnProperty("commitAfter"))
                        if (typeof message.commitAfter === "number")
                            object.commitAfter = options.longs === String ? String(message.commitAfter) : message.commitAfter;
                        else
                            object.commitAfter = options.longs === String ? $util.Long.prototype.toString.call(message.commitAfter) : options.longs === Number ? new $util.LongBits(message.commitAfter.low >>> 0, message.commitAfter.high >>> 0).toNumber() : message.commitAfter;
                    if (message.singleBranch != null && message.hasOwnProperty("singleBranch"))
                        object.singleBranch = message.singleBranch;
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        object.sourceType = message.sourceType;
                    if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                        object.sourceId = message.sourceId;
                    return object;
                };
                /**
                 * Converts this SubmitRepoRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.SubmitRepoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SubmitRepoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * AuthType enum.
                 * @name merico.analysis.gateway.SubmitRepoRequest.AuthType
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} SSH_KEY=1 SSH_KEY value
                 * @property {number} HTTP_BASE=2 HTTP_BASE value
                 */
                SubmitRepoRequest.AuthType = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "SSH_KEY"] = 1;
                    values[valuesById[2] = "HTTP_BASE"] = 2;
                    return values;
                })();
                return SubmitRepoRequest;
            })();
            gateway.SubmitRepoResponse = (function () {
                /**
                 * Properties of a SubmitRepoResponse.
                 * @memberof merico.analysis.gateway
                 * @interface ISubmitRepoResponse
                 * @property {merico.analysis.gateway.SubmitRepoResponse.ErrorMessage|null} [error] SubmitRepoResponse error
                 * @property {string|null} [analysisId] SubmitRepoResponse analysisId
                 * @property {string|null} [reportId] SubmitRepoResponse reportId
                 */
                /**
                 * Constructs a new SubmitRepoResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a SubmitRepoResponse.
                 * @implements ISubmitRepoResponse
                 * @constructor
                 * @param {merico.analysis.gateway.ISubmitRepoResponse=} [properties] Properties to set
                 */
                function SubmitRepoResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * SubmitRepoResponse error.
                 * @member {merico.analysis.gateway.SubmitRepoResponse.ErrorMessage} error
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @instance
                 */
                SubmitRepoResponse.prototype.error = 0;
                /**
                 * SubmitRepoResponse analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @instance
                 */
                SubmitRepoResponse.prototype.analysisId = "";
                /**
                 * SubmitRepoResponse reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @instance
                 */
                SubmitRepoResponse.prototype.reportId = "";
                /**
                 * Creates a new SubmitRepoResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.SubmitRepoResponse} SubmitRepoResponse instance
                 */
                SubmitRepoResponse.create = function create(properties) {
                    return new SubmitRepoResponse(properties);
                };
                /**
                 * Encodes the specified SubmitRepoResponse message. Does not implicitly {@link merico.analysis.gateway.SubmitRepoResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoResponse} message SubmitRepoResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubmitRepoResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.error);
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.analysisId);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.reportId);
                    return writer;
                };
                /**
                 * Encodes the specified SubmitRepoResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.SubmitRepoResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {merico.analysis.gateway.ISubmitRepoResponse} message SubmitRepoResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubmitRepoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a SubmitRepoResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.SubmitRepoResponse} SubmitRepoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubmitRepoResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.SubmitRepoResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 3:
                                message.error = reader.int32();
                                break;
                            case 4:
                                message.analysisId = reader.string();
                                break;
                            case 5:
                                message.reportId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a SubmitRepoResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.SubmitRepoResponse} SubmitRepoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubmitRepoResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a SubmitRepoResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SubmitRepoResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.error != null && message.hasOwnProperty("error"))
                        switch (message.error) {
                            default:
                                return "error: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                                break;
                        }
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    return null;
                };
                /**
                 * Creates a SubmitRepoResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.SubmitRepoResponse} SubmitRepoResponse
                 */
                SubmitRepoResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.SubmitRepoResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.SubmitRepoResponse();
                    switch (object.error) {
                        case "EMPTY":
                        case 0:
                            message.error = 0;
                            break;
                        case "OBJECT_NOT_FOUND":
                        case 1:
                            message.error = 1;
                            break;
                        case "VALUE_NOT_FOUND":
                        case 2:
                            message.error = 2;
                            break;
                        case "VALUE_ALREADY_EXISTS":
                        case 3:
                            message.error = 3;
                            break;
                        case "VALUE_OUT_OF_RANGE":
                        case 4:
                            message.error = 4;
                            break;
                        case "INVALID_VALUE":
                        case 5:
                            message.error = 5;
                            break;
                        case "FAILED_DEPENDENCY":
                        case 6:
                            message.error = 6;
                            break;
                        case "FORBIDDEN":
                        case 7:
                            message.error = 7;
                            break;
                        case "USERNAME_TAKEN":
                        case 8:
                            message.error = 8;
                            break;
                        case "EMAIL_TAKEN":
                        case 9:
                            message.error = 9;
                            break;
                    }
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    return message;
                };
                /**
                 * Creates a plain object from a SubmitRepoResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @static
                 * @param {merico.analysis.gateway.SubmitRepoResponse} message SubmitRepoResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SubmitRepoResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.error = options.enums === String ? "EMPTY" : 0;
                        object.analysisId = "";
                        object.reportId = "";
                    }
                    if (message.error != null && message.hasOwnProperty("error"))
                        object.error = options.enums === String ? $root.merico.analysis.gateway.SubmitRepoResponse.ErrorMessage[message.error] : message.error;
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    return object;
                };
                /**
                 * Converts this SubmitRepoResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.SubmitRepoResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SubmitRepoResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * ErrorMessage enum.
                 * @name merico.analysis.gateway.SubmitRepoResponse.ErrorMessage
                 * @enum {number}
                 * @property {number} EMPTY=0 EMPTY value
                 * @property {number} OBJECT_NOT_FOUND=1 OBJECT_NOT_FOUND value
                 * @property {number} VALUE_NOT_FOUND=2 VALUE_NOT_FOUND value
                 * @property {number} VALUE_ALREADY_EXISTS=3 VALUE_ALREADY_EXISTS value
                 * @property {number} VALUE_OUT_OF_RANGE=4 VALUE_OUT_OF_RANGE value
                 * @property {number} INVALID_VALUE=5 INVALID_VALUE value
                 * @property {number} FAILED_DEPENDENCY=6 FAILED_DEPENDENCY value
                 * @property {number} FORBIDDEN=7 FORBIDDEN value
                 * @property {number} USERNAME_TAKEN=8 USERNAME_TAKEN value
                 * @property {number} EMAIL_TAKEN=9 EMAIL_TAKEN value
                 */
                SubmitRepoResponse.ErrorMessage = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "EMPTY"] = 0;
                    values[valuesById[1] = "OBJECT_NOT_FOUND"] = 1;
                    values[valuesById[2] = "VALUE_NOT_FOUND"] = 2;
                    values[valuesById[3] = "VALUE_ALREADY_EXISTS"] = 3;
                    values[valuesById[4] = "VALUE_OUT_OF_RANGE"] = 4;
                    values[valuesById[5] = "INVALID_VALUE"] = 5;
                    values[valuesById[6] = "FAILED_DEPENDENCY"] = 6;
                    values[valuesById[7] = "FORBIDDEN"] = 7;
                    values[valuesById[8] = "USERNAME_TAKEN"] = 8;
                    values[valuesById[9] = "EMAIL_TAKEN"] = 9;
                    return values;
                })();
                return SubmitRepoResponse;
            })();
            gateway.GetVersionRequest = (function () {
                /**
                 * Properties of a GetVersionRequest.
                 * @memberof merico.analysis.gateway
                 * @interface IGetVersionRequest
                 */
                /**
                 * Constructs a new GetVersionRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a GetVersionRequest.
                 * @implements IGetVersionRequest
                 * @constructor
                 * @param {merico.analysis.gateway.IGetVersionRequest=} [properties] Properties to set
                 */
                function GetVersionRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * Creates a new GetVersionRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.GetVersionRequest} GetVersionRequest instance
                 */
                GetVersionRequest.create = function create(properties) {
                    return new GetVersionRequest(properties);
                };
                /**
                 * Encodes the specified GetVersionRequest message. Does not implicitly {@link merico.analysis.gateway.GetVersionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionRequest} message GetVersionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetVersionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
                /**
                 * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetVersionRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionRequest} message GetVersionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetVersionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.GetVersionRequest} GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetVersionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.GetVersionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.GetVersionRequest} GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetVersionRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a GetVersionRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetVersionRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
                /**
                 * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.GetVersionRequest} GetVersionRequest
                 */
                GetVersionRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.GetVersionRequest)
                        return object;
                    return new $root.merico.analysis.gateway.GetVersionRequest();
                };
                /**
                 * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @static
                 * @param {merico.analysis.gateway.GetVersionRequest} message GetVersionRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetVersionRequest.toObject = function toObject() {
                    return {};
                };
                /**
                 * Converts this GetVersionRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.GetVersionRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetVersionRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return GetVersionRequest;
            })();
            gateway.GetVersionResponse = (function () {
                /**
                 * Properties of a GetVersionResponse.
                 * @memberof merico.analysis.gateway
                 * @interface IGetVersionResponse
                 * @property {merico.analysis.gateway.IResponseStatus|null} [status] GetVersionResponse status
                 * @property {string|null} [version] GetVersionResponse version
                 * @property {string|null} [semver] GetVersionResponse semver
                 */
                /**
                 * Constructs a new GetVersionResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a GetVersionResponse.
                 * @implements IGetVersionResponse
                 * @constructor
                 * @param {merico.analysis.gateway.IGetVersionResponse=} [properties] Properties to set
                 */
                function GetVersionResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * GetVersionResponse status.
                 * @member {merico.analysis.gateway.IResponseStatus|null|undefined} status
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @instance
                 */
                GetVersionResponse.prototype.status = null;
                /**
                 * GetVersionResponse version.
                 * @member {string} version
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @instance
                 */
                GetVersionResponse.prototype.version = "";
                /**
                 * GetVersionResponse semver.
                 * @member {string} semver
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @instance
                 */
                GetVersionResponse.prototype.semver = "";
                /**
                 * Creates a new GetVersionResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.GetVersionResponse} GetVersionResponse instance
                 */
                GetVersionResponse.create = function create(properties) {
                    return new GetVersionResponse(properties);
                };
                /**
                 * Encodes the specified GetVersionResponse message. Does not implicitly {@link merico.analysis.gateway.GetVersionResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionResponse} message GetVersionResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetVersionResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        $root.merico.analysis.gateway.ResponseStatus.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.version);
                    if (message.semver != null && Object.hasOwnProperty.call(message, "semver"))
                        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.semver);
                    return writer;
                };
                /**
                 * Encodes the specified GetVersionResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetVersionResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetVersionResponse} message GetVersionResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetVersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a GetVersionResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.GetVersionResponse} GetVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetVersionResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.GetVersionResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.status = $root.merico.analysis.gateway.ResponseStatus.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.version = reader.string();
                                break;
                            case 3:
                                message.semver = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a GetVersionResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.GetVersionResponse} GetVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetVersionResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a GetVersionResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetVersionResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status")) {
                        var error = $root.merico.analysis.gateway.ResponseStatus.verify(message.status);
                        if (error)
                            return "status." + error;
                    }
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.semver != null && message.hasOwnProperty("semver"))
                        if (!$util.isString(message.semver))
                            return "semver: string expected";
                    return null;
                };
                /**
                 * Creates a GetVersionResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.GetVersionResponse} GetVersionResponse
                 */
                GetVersionResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.GetVersionResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.GetVersionResponse();
                    if (object.status != null) {
                        if (typeof object.status !== "object")
                            throw TypeError(".merico.analysis.gateway.GetVersionResponse.status: object expected");
                        message.status = $root.merico.analysis.gateway.ResponseStatus.fromObject(object.status);
                    }
                    if (object.version != null)
                        message.version = String(object.version);
                    if (object.semver != null)
                        message.semver = String(object.semver);
                    return message;
                };
                /**
                 * Creates a plain object from a GetVersionResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @static
                 * @param {merico.analysis.gateway.GetVersionResponse} message GetVersionResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetVersionResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = null;
                        object.version = "";
                        object.semver = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = $root.merico.analysis.gateway.ResponseStatus.toObject(message.status, options);
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.semver != null && message.hasOwnProperty("semver"))
                        object.semver = message.semver;
                    return object;
                };
                /**
                 * Converts this GetVersionResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.GetVersionResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetVersionResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return GetVersionResponse;
            })();
            gateway.TerminateAnalysisRequest = (function () {
                /**
                 * Properties of a TerminateAnalysisRequest.
                 * @memberof merico.analysis.gateway
                 * @interface ITerminateAnalysisRequest
                 * @property {string|null} [gitUrl] TerminateAnalysisRequest gitUrl
                 * @property {string|null} [analysisId] TerminateAnalysisRequest analysisId
                 * @property {string|null} [projectId] TerminateAnalysisRequest projectId
                 * @property {string|null} [reportId] TerminateAnalysisRequest reportId
                 */
                /**
                 * Constructs a new TerminateAnalysisRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a TerminateAnalysisRequest.
                 * @implements ITerminateAnalysisRequest
                 * @constructor
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest=} [properties] Properties to set
                 */
                function TerminateAnalysisRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * TerminateAnalysisRequest gitUrl.
                 * @member {string} gitUrl
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @instance
                 */
                TerminateAnalysisRequest.prototype.gitUrl = "";
                /**
                 * TerminateAnalysisRequest analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @instance
                 */
                TerminateAnalysisRequest.prototype.analysisId = "";
                /**
                 * TerminateAnalysisRequest projectId.
                 * @member {string} projectId
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @instance
                 */
                TerminateAnalysisRequest.prototype.projectId = "";
                /**
                 * TerminateAnalysisRequest reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @instance
                 */
                TerminateAnalysisRequest.prototype.reportId = "";
                /**
                 * Creates a new TerminateAnalysisRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.TerminateAnalysisRequest} TerminateAnalysisRequest instance
                 */
                TerminateAnalysisRequest.create = function create(properties) {
                    return new TerminateAnalysisRequest(properties);
                };
                /**
                 * Encodes the specified TerminateAnalysisRequest message. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest} message TerminateAnalysisRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TerminateAnalysisRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.gitUrl != null && Object.hasOwnProperty.call(message, "gitUrl"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.gitUrl);
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.analysisId);
                    if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.projectId);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.reportId);
                    return writer;
                };
                /**
                 * Encodes the specified TerminateAnalysisRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest} message TerminateAnalysisRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TerminateAnalysisRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a TerminateAnalysisRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.TerminateAnalysisRequest} TerminateAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TerminateAnalysisRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.TerminateAnalysisRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.gitUrl = reader.string();
                                break;
                            case 2:
                                message.analysisId = reader.string();
                                break;
                            case 3:
                                message.projectId = reader.string();
                                break;
                            case 4:
                                message.reportId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a TerminateAnalysisRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.TerminateAnalysisRequest} TerminateAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TerminateAnalysisRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a TerminateAnalysisRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TerminateAnalysisRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        if (!$util.isString(message.gitUrl))
                            return "gitUrl: string expected";
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        if (!$util.isString(message.projectId))
                            return "projectId: string expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    return null;
                };
                /**
                 * Creates a TerminateAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.TerminateAnalysisRequest} TerminateAnalysisRequest
                 */
                TerminateAnalysisRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.TerminateAnalysisRequest)
                        return object;
                    var message = new $root.merico.analysis.gateway.TerminateAnalysisRequest();
                    if (object.gitUrl != null)
                        message.gitUrl = String(object.gitUrl);
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.projectId != null)
                        message.projectId = String(object.projectId);
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    return message;
                };
                /**
                 * Creates a plain object from a TerminateAnalysisRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.TerminateAnalysisRequest} message TerminateAnalysisRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TerminateAnalysisRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.gitUrl = "";
                        object.analysisId = "";
                        object.projectId = "";
                        object.reportId = "";
                    }
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        object.gitUrl = message.gitUrl;
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.projectId != null && message.hasOwnProperty("projectId"))
                        object.projectId = message.projectId;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    return object;
                };
                /**
                 * Converts this TerminateAnalysisRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.TerminateAnalysisRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TerminateAnalysisRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return TerminateAnalysisRequest;
            })();
            gateway.TerminateAnalysisResponse = (function () {
                /**
                 * Properties of a TerminateAnalysisResponse.
                 * @memberof merico.analysis.gateway
                 * @interface ITerminateAnalysisResponse
                 * @property {Array.<string>|null} [analysisIds] TerminateAnalysisResponse analysisIds
                 * @property {Array.<string>|null} [reportIds] TerminateAnalysisResponse reportIds
                 * @property {merico.analysis.gateway.IResponseStatus|null} [status] TerminateAnalysisResponse status
                 */
                /**
                 * Constructs a new TerminateAnalysisResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a TerminateAnalysisResponse.
                 * @implements ITerminateAnalysisResponse
                 * @constructor
                 * @param {merico.analysis.gateway.ITerminateAnalysisResponse=} [properties] Properties to set
                 */
                function TerminateAnalysisResponse(properties) {
                    this.analysisIds = [];
                    this.reportIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * TerminateAnalysisResponse analysisIds.
                 * @member {Array.<string>} analysisIds
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @instance
                 */
                TerminateAnalysisResponse.prototype.analysisIds = $util.emptyArray;
                /**
                 * TerminateAnalysisResponse reportIds.
                 * @member {Array.<string>} reportIds
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @instance
                 */
                TerminateAnalysisResponse.prototype.reportIds = $util.emptyArray;
                /**
                 * TerminateAnalysisResponse status.
                 * @member {merico.analysis.gateway.IResponseStatus|null|undefined} status
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @instance
                 */
                TerminateAnalysisResponse.prototype.status = null;
                /**
                 * Creates a new TerminateAnalysisResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.TerminateAnalysisResponse} TerminateAnalysisResponse instance
                 */
                TerminateAnalysisResponse.create = function create(properties) {
                    return new TerminateAnalysisResponse(properties);
                };
                /**
                 * Encodes the specified TerminateAnalysisResponse message. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisResponse} message TerminateAnalysisResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TerminateAnalysisResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.analysisIds != null && message.analysisIds.length)
                        for (var i = 0; i < message.analysisIds.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.analysisIds[i]);
                    if (message.reportIds != null && message.reportIds.length)
                        for (var i = 0; i < message.reportIds.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.reportIds[i]);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        $root.merico.analysis.gateway.ResponseStatus.encode(message.status, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                    return writer;
                };
                /**
                 * Encodes the specified TerminateAnalysisResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.TerminateAnalysisResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ITerminateAnalysisResponse} message TerminateAnalysisResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TerminateAnalysisResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a TerminateAnalysisResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.TerminateAnalysisResponse} TerminateAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TerminateAnalysisResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.TerminateAnalysisResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                if (!(message.analysisIds && message.analysisIds.length))
                                    message.analysisIds = [];
                                message.analysisIds.push(reader.string());
                                break;
                            case 2:
                                if (!(message.reportIds && message.reportIds.length))
                                    message.reportIds = [];
                                message.reportIds.push(reader.string());
                                break;
                            case 3:
                                message.status = $root.merico.analysis.gateway.ResponseStatus.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a TerminateAnalysisResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.TerminateAnalysisResponse} TerminateAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TerminateAnalysisResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a TerminateAnalysisResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TerminateAnalysisResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.analysisIds != null && message.hasOwnProperty("analysisIds")) {
                        if (!Array.isArray(message.analysisIds))
                            return "analysisIds: array expected";
                        for (var i = 0; i < message.analysisIds.length; ++i)
                            if (!$util.isString(message.analysisIds[i]))
                                return "analysisIds: string[] expected";
                    }
                    if (message.reportIds != null && message.hasOwnProperty("reportIds")) {
                        if (!Array.isArray(message.reportIds))
                            return "reportIds: array expected";
                        for (var i = 0; i < message.reportIds.length; ++i)
                            if (!$util.isString(message.reportIds[i]))
                                return "reportIds: string[] expected";
                    }
                    if (message.status != null && message.hasOwnProperty("status")) {
                        var error = $root.merico.analysis.gateway.ResponseStatus.verify(message.status);
                        if (error)
                            return "status." + error;
                    }
                    return null;
                };
                /**
                 * Creates a TerminateAnalysisResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.TerminateAnalysisResponse} TerminateAnalysisResponse
                 */
                TerminateAnalysisResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.TerminateAnalysisResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.TerminateAnalysisResponse();
                    if (object.analysisIds) {
                        if (!Array.isArray(object.analysisIds))
                            throw TypeError(".merico.analysis.gateway.TerminateAnalysisResponse.analysisIds: array expected");
                        message.analysisIds = [];
                        for (var i = 0; i < object.analysisIds.length; ++i)
                            message.analysisIds[i] = String(object.analysisIds[i]);
                    }
                    if (object.reportIds) {
                        if (!Array.isArray(object.reportIds))
                            throw TypeError(".merico.analysis.gateway.TerminateAnalysisResponse.reportIds: array expected");
                        message.reportIds = [];
                        for (var i = 0; i < object.reportIds.length; ++i)
                            message.reportIds[i] = String(object.reportIds[i]);
                    }
                    if (object.status != null) {
                        if (typeof object.status !== "object")
                            throw TypeError(".merico.analysis.gateway.TerminateAnalysisResponse.status: object expected");
                        message.status = $root.merico.analysis.gateway.ResponseStatus.fromObject(object.status);
                    }
                    return message;
                };
                /**
                 * Creates a plain object from a TerminateAnalysisResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.TerminateAnalysisResponse} message TerminateAnalysisResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TerminateAnalysisResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.analysisIds = [];
                        object.reportIds = [];
                    }
                    if (options.defaults)
                        object.status = null;
                    if (message.analysisIds && message.analysisIds.length) {
                        object.analysisIds = [];
                        for (var j = 0; j < message.analysisIds.length; ++j)
                            object.analysisIds[j] = message.analysisIds[j];
                    }
                    if (message.reportIds && message.reportIds.length) {
                        object.reportIds = [];
                        for (var j = 0; j < message.reportIds.length; ++j)
                            object.reportIds[j] = message.reportIds[j];
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = $root.merico.analysis.gateway.ResponseStatus.toObject(message.status, options);
                    return object;
                };
                /**
                 * Converts this TerminateAnalysisResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.TerminateAnalysisResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TerminateAnalysisResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return TerminateAnalysisResponse;
            })();
            gateway.LookupAnalysisRequest = (function () {
                /**
                 * Properties of a LookupAnalysisRequest.
                 * @memberof merico.analysis.gateway
                 * @interface ILookupAnalysisRequest
                 * @property {string|null} [analysisId] LookupAnalysisRequest analysisId
                 * @property {string|null} [reportId] LookupAnalysisRequest reportId
                 */
                /**
                 * Constructs a new LookupAnalysisRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a LookupAnalysisRequest.
                 * @implements ILookupAnalysisRequest
                 * @constructor
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest=} [properties] Properties to set
                 */
                function LookupAnalysisRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * LookupAnalysisRequest analysisId.
                 * @member {string} analysisId
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @instance
                 */
                LookupAnalysisRequest.prototype.analysisId = "";
                /**
                 * LookupAnalysisRequest reportId.
                 * @member {string} reportId
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @instance
                 */
                LookupAnalysisRequest.prototype.reportId = "";
                /**
                 * Creates a new LookupAnalysisRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.LookupAnalysisRequest} LookupAnalysisRequest instance
                 */
                LookupAnalysisRequest.create = function create(properties) {
                    return new LookupAnalysisRequest(properties);
                };
                /**
                 * Encodes the specified LookupAnalysisRequest message. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest} message LookupAnalysisRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupAnalysisRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.analysisId != null && Object.hasOwnProperty.call(message, "analysisId"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.analysisId);
                    if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.reportId);
                    return writer;
                };
                /**
                 * Encodes the specified LookupAnalysisRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest} message LookupAnalysisRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupAnalysisRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a LookupAnalysisRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.LookupAnalysisRequest} LookupAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupAnalysisRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.LookupAnalysisRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.analysisId = reader.string();
                                break;
                            case 2:
                                message.reportId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a LookupAnalysisRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.LookupAnalysisRequest} LookupAnalysisRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupAnalysisRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a LookupAnalysisRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LookupAnalysisRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        if (!$util.isString(message.analysisId))
                            return "analysisId: string expected";
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        if (!$util.isString(message.reportId))
                            return "reportId: string expected";
                    return null;
                };
                /**
                 * Creates a LookupAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.LookupAnalysisRequest} LookupAnalysisRequest
                 */
                LookupAnalysisRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.LookupAnalysisRequest)
                        return object;
                    var message = new $root.merico.analysis.gateway.LookupAnalysisRequest();
                    if (object.analysisId != null)
                        message.analysisId = String(object.analysisId);
                    if (object.reportId != null)
                        message.reportId = String(object.reportId);
                    return message;
                };
                /**
                 * Creates a plain object from a LookupAnalysisRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @static
                 * @param {merico.analysis.gateway.LookupAnalysisRequest} message LookupAnalysisRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LookupAnalysisRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.analysisId = "";
                        object.reportId = "";
                    }
                    if (message.analysisId != null && message.hasOwnProperty("analysisId"))
                        object.analysisId = message.analysisId;
                    if (message.reportId != null && message.hasOwnProperty("reportId"))
                        object.reportId = message.reportId;
                    return object;
                };
                /**
                 * Converts this LookupAnalysisRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.LookupAnalysisRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LookupAnalysisRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return LookupAnalysisRequest;
            })();
            gateway.LookupAnalysisResponse = (function () {
                /**
                 * Properties of a LookupAnalysisResponse.
                 * @memberof merico.analysis.gateway
                 * @interface ILookupAnalysisResponse
                 * @property {merico.analysis.gateway.IResponseStatus|null} [status] LookupAnalysisResponse status
                 * @property {merico.analysis.gateway.ICaAnalysisModel|null} [analysis] LookupAnalysisResponse analysis
                 */
                /**
                 * Constructs a new LookupAnalysisResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a LookupAnalysisResponse.
                 * @implements ILookupAnalysisResponse
                 * @constructor
                 * @param {merico.analysis.gateway.ILookupAnalysisResponse=} [properties] Properties to set
                 */
                function LookupAnalysisResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * LookupAnalysisResponse status.
                 * @member {merico.analysis.gateway.IResponseStatus|null|undefined} status
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @instance
                 */
                LookupAnalysisResponse.prototype.status = null;
                /**
                 * LookupAnalysisResponse analysis.
                 * @member {merico.analysis.gateway.ICaAnalysisModel|null|undefined} analysis
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @instance
                 */
                LookupAnalysisResponse.prototype.analysis = null;
                /**
                 * Creates a new LookupAnalysisResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.LookupAnalysisResponse} LookupAnalysisResponse instance
                 */
                LookupAnalysisResponse.create = function create(properties) {
                    return new LookupAnalysisResponse(properties);
                };
                /**
                 * Encodes the specified LookupAnalysisResponse message. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisResponse} message LookupAnalysisResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupAnalysisResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        $root.merico.analysis.gateway.ResponseStatus.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                    if (message.analysis != null && Object.hasOwnProperty.call(message, "analysis"))
                        $root.merico.analysis.gateway.CaAnalysisModel.encode(message.analysis, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                    return writer;
                };
                /**
                 * Encodes the specified LookupAnalysisResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.LookupAnalysisResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.ILookupAnalysisResponse} message LookupAnalysisResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupAnalysisResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a LookupAnalysisResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.LookupAnalysisResponse} LookupAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupAnalysisResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.LookupAnalysisResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.status = $root.merico.analysis.gateway.ResponseStatus.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.analysis = $root.merico.analysis.gateway.CaAnalysisModel.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a LookupAnalysisResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.LookupAnalysisResponse} LookupAnalysisResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupAnalysisResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a LookupAnalysisResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LookupAnalysisResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status")) {
                        var error = $root.merico.analysis.gateway.ResponseStatus.verify(message.status);
                        if (error)
                            return "status." + error;
                    }
                    if (message.analysis != null && message.hasOwnProperty("analysis")) {
                        var error = $root.merico.analysis.gateway.CaAnalysisModel.verify(message.analysis);
                        if (error)
                            return "analysis." + error;
                    }
                    return null;
                };
                /**
                 * Creates a LookupAnalysisResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.LookupAnalysisResponse} LookupAnalysisResponse
                 */
                LookupAnalysisResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.LookupAnalysisResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.LookupAnalysisResponse();
                    if (object.status != null) {
                        if (typeof object.status !== "object")
                            throw TypeError(".merico.analysis.gateway.LookupAnalysisResponse.status: object expected");
                        message.status = $root.merico.analysis.gateway.ResponseStatus.fromObject(object.status);
                    }
                    if (object.analysis != null) {
                        if (typeof object.analysis !== "object")
                            throw TypeError(".merico.analysis.gateway.LookupAnalysisResponse.analysis: object expected");
                        message.analysis = $root.merico.analysis.gateway.CaAnalysisModel.fromObject(object.analysis);
                    }
                    return message;
                };
                /**
                 * Creates a plain object from a LookupAnalysisResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @static
                 * @param {merico.analysis.gateway.LookupAnalysisResponse} message LookupAnalysisResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LookupAnalysisResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = null;
                        object.analysis = null;
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = $root.merico.analysis.gateway.ResponseStatus.toObject(message.status, options);
                    if (message.analysis != null && message.hasOwnProperty("analysis"))
                        object.analysis = $root.merico.analysis.gateway.CaAnalysisModel.toObject(message.analysis, options);
                    return object;
                };
                /**
                 * Converts this LookupAnalysisResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.LookupAnalysisResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LookupAnalysisResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return LookupAnalysisResponse;
            })();
            gateway.ClearCacheRequest = (function () {
                /**
                 * Properties of a ClearCacheRequest.
                 * @memberof merico.analysis.gateway
                 * @interface IClearCacheRequest
                 * @property {string|null} [gitUrl] ClearCacheRequest gitUrl
                 */
                /**
                 * Constructs a new ClearCacheRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a ClearCacheRequest.
                 * @implements IClearCacheRequest
                 * @constructor
                 * @param {merico.analysis.gateway.IClearCacheRequest=} [properties] Properties to set
                 */
                function ClearCacheRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * ClearCacheRequest gitUrl.
                 * @member {string} gitUrl
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @instance
                 */
                ClearCacheRequest.prototype.gitUrl = "";
                /**
                 * Creates a new ClearCacheRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.ClearCacheRequest} ClearCacheRequest instance
                 */
                ClearCacheRequest.create = function create(properties) {
                    return new ClearCacheRequest(properties);
                };
                /**
                 * Encodes the specified ClearCacheRequest message. Does not implicitly {@link merico.analysis.gateway.ClearCacheRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheRequest} message ClearCacheRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClearCacheRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.gitUrl != null && Object.hasOwnProperty.call(message, "gitUrl"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.gitUrl);
                    return writer;
                };
                /**
                 * Encodes the specified ClearCacheRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.ClearCacheRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheRequest} message ClearCacheRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClearCacheRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a ClearCacheRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.ClearCacheRequest} ClearCacheRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClearCacheRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.ClearCacheRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.gitUrl = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a ClearCacheRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.ClearCacheRequest} ClearCacheRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClearCacheRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a ClearCacheRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClearCacheRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        if (!$util.isString(message.gitUrl))
                            return "gitUrl: string expected";
                    return null;
                };
                /**
                 * Creates a ClearCacheRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.ClearCacheRequest} ClearCacheRequest
                 */
                ClearCacheRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.ClearCacheRequest)
                        return object;
                    var message = new $root.merico.analysis.gateway.ClearCacheRequest();
                    if (object.gitUrl != null)
                        message.gitUrl = String(object.gitUrl);
                    return message;
                };
                /**
                 * Creates a plain object from a ClearCacheRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @static
                 * @param {merico.analysis.gateway.ClearCacheRequest} message ClearCacheRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClearCacheRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.gitUrl = "";
                    if (message.gitUrl != null && message.hasOwnProperty("gitUrl"))
                        object.gitUrl = message.gitUrl;
                    return object;
                };
                /**
                 * Converts this ClearCacheRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.ClearCacheRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClearCacheRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return ClearCacheRequest;
            })();
            gateway.ClearCacheResponse = (function () {
                /**
                 * Properties of a ClearCacheResponse.
                 * @memberof merico.analysis.gateway
                 * @interface IClearCacheResponse
                 * @property {merico.analysis.gateway.ClearCacheResponse.StatusCode|null} [status] ClearCacheResponse status
                 */
                /**
                 * Constructs a new ClearCacheResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a ClearCacheResponse.
                 * @implements IClearCacheResponse
                 * @constructor
                 * @param {merico.analysis.gateway.IClearCacheResponse=} [properties] Properties to set
                 */
                function ClearCacheResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * ClearCacheResponse status.
                 * @member {merico.analysis.gateway.ClearCacheResponse.StatusCode} status
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @instance
                 */
                ClearCacheResponse.prototype.status = 0;
                /**
                 * Creates a new ClearCacheResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.ClearCacheResponse} ClearCacheResponse instance
                 */
                ClearCacheResponse.create = function create(properties) {
                    return new ClearCacheResponse(properties);
                };
                /**
                 * Encodes the specified ClearCacheResponse message. Does not implicitly {@link merico.analysis.gateway.ClearCacheResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheResponse} message ClearCacheResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClearCacheResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.status);
                    return writer;
                };
                /**
                 * Encodes the specified ClearCacheResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.ClearCacheResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {merico.analysis.gateway.IClearCacheResponse} message ClearCacheResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClearCacheResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a ClearCacheResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.ClearCacheResponse} ClearCacheResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClearCacheResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.ClearCacheResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.status = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a ClearCacheResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.ClearCacheResponse} ClearCacheResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClearCacheResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a ClearCacheResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClearCacheResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                        }
                    return null;
                };
                /**
                 * Creates a ClearCacheResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.ClearCacheResponse} ClearCacheResponse
                 */
                ClearCacheResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.ClearCacheResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.ClearCacheResponse();
                    switch (object.status) {
                        case "SUCCESS":
                        case 0:
                            message.status = 0;
                            break;
                        case "SYSTEM_ERROR":
                        case 1:
                            message.status = 1;
                            break;
                        case "ANALYSIS_RUNNING":
                        case 2:
                            message.status = 2;
                            break;
                    }
                    return message;
                };
                /**
                 * Creates a plain object from a ClearCacheResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @static
                 * @param {merico.analysis.gateway.ClearCacheResponse} message ClearCacheResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClearCacheResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "SUCCESS" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.merico.analysis.gateway.ClearCacheResponse.StatusCode[message.status] : message.status;
                    return object;
                };
                /**
                 * Converts this ClearCacheResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.ClearCacheResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClearCacheResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * StatusCode enum.
                 * @name merico.analysis.gateway.ClearCacheResponse.StatusCode
                 * @enum {number}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} SYSTEM_ERROR=1 SYSTEM_ERROR value
                 * @property {number} ANALYSIS_RUNNING=2 ANALYSIS_RUNNING value
                 */
                ClearCacheResponse.StatusCode = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "SYSTEM_ERROR"] = 1;
                    values[valuesById[2] = "ANALYSIS_RUNNING"] = 2;
                    return values;
                })();
                return ClearCacheResponse;
            })();
            gateway.GetAnalysisStatsRequest = (function () {
                /**
                 * Properties of a GetAnalysisStatsRequest.
                 * @memberof merico.analysis.gateway
                 * @interface IGetAnalysisStatsRequest
                 * @property {string|null} [sourceType] GetAnalysisStatsRequest sourceType
                 */
                /**
                 * Constructs a new GetAnalysisStatsRequest.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a GetAnalysisStatsRequest.
                 * @implements IGetAnalysisStatsRequest
                 * @constructor
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest=} [properties] Properties to set
                 */
                function GetAnalysisStatsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * GetAnalysisStatsRequest sourceType.
                 * @member {string} sourceType
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @instance
                 */
                GetAnalysisStatsRequest.prototype.sourceType = "";
                /**
                 * Creates a new GetAnalysisStatsRequest instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.GetAnalysisStatsRequest} GetAnalysisStatsRequest instance
                 */
                GetAnalysisStatsRequest.create = function create(properties) {
                    return new GetAnalysisStatsRequest(properties);
                };
                /**
                 * Encodes the specified GetAnalysisStatsRequest message. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest} message GetAnalysisStatsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAnalysisStatsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.sourceType);
                    return writer;
                };
                /**
                 * Encodes the specified GetAnalysisStatsRequest message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest} message GetAnalysisStatsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAnalysisStatsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a GetAnalysisStatsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.GetAnalysisStatsRequest} GetAnalysisStatsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAnalysisStatsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.GetAnalysisStatsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.sourceType = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a GetAnalysisStatsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.GetAnalysisStatsRequest} GetAnalysisStatsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAnalysisStatsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a GetAnalysisStatsRequest message.
                 * @function verify
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAnalysisStatsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        if (!$util.isString(message.sourceType))
                            return "sourceType: string expected";
                    return null;
                };
                /**
                 * Creates a GetAnalysisStatsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.GetAnalysisStatsRequest} GetAnalysisStatsRequest
                 */
                GetAnalysisStatsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.GetAnalysisStatsRequest)
                        return object;
                    var message = new $root.merico.analysis.gateway.GetAnalysisStatsRequest();
                    if (object.sourceType != null)
                        message.sourceType = String(object.sourceType);
                    return message;
                };
                /**
                 * Creates a plain object from a GetAnalysisStatsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @static
                 * @param {merico.analysis.gateway.GetAnalysisStatsRequest} message GetAnalysisStatsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAnalysisStatsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.sourceType = "";
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        object.sourceType = message.sourceType;
                    return object;
                };
                /**
                 * Converts this GetAnalysisStatsRequest to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.GetAnalysisStatsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAnalysisStatsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return GetAnalysisStatsRequest;
            })();
            gateway.GetAnalysisStatsResponse = (function () {
                /**
                 * Properties of a GetAnalysisStatsResponse.
                 * @memberof merico.analysis.gateway
                 * @interface IGetAnalysisStatsResponse
                 * @property {merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode|null} [status] GetAnalysisStatsResponse status
                 * @property {number|null} [startedAnalyses] GetAnalysisStatsResponse startedAnalyses
                 * @property {number|null} [waitingAnalyses] GetAnalysisStatsResponse waitingAnalyses
                 * @property {number|null} [startedTasks] GetAnalysisStatsResponse startedTasks
                 * @property {number|null} [waitingTasks] GetAnalysisStatsResponse waitingTasks
                 * @property {number|null} [totalWorkers] GetAnalysisStatsResponse totalWorkers
                 * @property {number|null} [load] GetAnalysisStatsResponse load
                 */
                /**
                 * Constructs a new GetAnalysisStatsResponse.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a GetAnalysisStatsResponse.
                 * @implements IGetAnalysisStatsResponse
                 * @constructor
                 * @param {merico.analysis.gateway.IGetAnalysisStatsResponse=} [properties] Properties to set
                 */
                function GetAnalysisStatsResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * GetAnalysisStatsResponse status.
                 * @member {merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode} status
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.status = 0;
                /**
                 * GetAnalysisStatsResponse startedAnalyses.
                 * @member {number} startedAnalyses
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.startedAnalyses = 0;
                /**
                 * GetAnalysisStatsResponse waitingAnalyses.
                 * @member {number} waitingAnalyses
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.waitingAnalyses = 0;
                /**
                 * GetAnalysisStatsResponse startedTasks.
                 * @member {number} startedTasks
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.startedTasks = 0;
                /**
                 * GetAnalysisStatsResponse waitingTasks.
                 * @member {number} waitingTasks
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.waitingTasks = 0;
                /**
                 * GetAnalysisStatsResponse totalWorkers.
                 * @member {number} totalWorkers
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.totalWorkers = 0;
                /**
                 * GetAnalysisStatsResponse load.
                 * @member {number} load
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 */
                GetAnalysisStatsResponse.prototype.load = 0;
                /**
                 * Creates a new GetAnalysisStatsResponse instance using the specified properties.
                 * @function create
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsResponse=} [properties] Properties to set
                 * @returns {merico.analysis.gateway.GetAnalysisStatsResponse} GetAnalysisStatsResponse instance
                 */
                GetAnalysisStatsResponse.create = function create(properties) {
                    return new GetAnalysisStatsResponse(properties);
                };
                /**
                 * Encodes the specified GetAnalysisStatsResponse message. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsResponse} message GetAnalysisStatsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAnalysisStatsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.status);
                    if (message.startedAnalyses != null && Object.hasOwnProperty.call(message, "startedAnalyses"))
                        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.startedAnalyses);
                    if (message.waitingAnalyses != null && Object.hasOwnProperty.call(message, "waitingAnalyses"))
                        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.waitingAnalyses);
                    if (message.startedTasks != null && Object.hasOwnProperty.call(message, "startedTasks"))
                        writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.startedTasks);
                    if (message.waitingTasks != null && Object.hasOwnProperty.call(message, "waitingTasks"))
                        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.waitingTasks);
                    if (message.totalWorkers != null && Object.hasOwnProperty.call(message, "totalWorkers"))
                        writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.totalWorkers);
                    if (message.load != null && Object.hasOwnProperty.call(message, "load"))
                        writer.uint32(/* id 7, wireType 5 =*/ 61).float(message.load);
                    return writer;
                };
                /**
                 * Encodes the specified GetAnalysisStatsResponse message, length delimited. Does not implicitly {@link merico.analysis.gateway.GetAnalysisStatsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {merico.analysis.gateway.IGetAnalysisStatsResponse} message GetAnalysisStatsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAnalysisStatsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                /**
                 * Decodes a GetAnalysisStatsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {merico.analysis.gateway.GetAnalysisStatsResponse} GetAnalysisStatsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAnalysisStatsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.analysis.gateway.GetAnalysisStatsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.status = reader.int32();
                                break;
                            case 2:
                                message.startedAnalyses = reader.int32();
                                break;
                            case 3:
                                message.waitingAnalyses = reader.int32();
                                break;
                            case 4:
                                message.startedTasks = reader.int32();
                                break;
                            case 5:
                                message.waitingTasks = reader.int32();
                                break;
                            case 6:
                                message.totalWorkers = reader.int32();
                                break;
                            case 7:
                                message.load = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                /**
                 * Decodes a GetAnalysisStatsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {merico.analysis.gateway.GetAnalysisStatsResponse} GetAnalysisStatsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAnalysisStatsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a GetAnalysisStatsResponse message.
                 * @function verify
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAnalysisStatsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                                break;
                        }
                    if (message.startedAnalyses != null && message.hasOwnProperty("startedAnalyses"))
                        if (!$util.isInteger(message.startedAnalyses))
                            return "startedAnalyses: integer expected";
                    if (message.waitingAnalyses != null && message.hasOwnProperty("waitingAnalyses"))
                        if (!$util.isInteger(message.waitingAnalyses))
                            return "waitingAnalyses: integer expected";
                    if (message.startedTasks != null && message.hasOwnProperty("startedTasks"))
                        if (!$util.isInteger(message.startedTasks))
                            return "startedTasks: integer expected";
                    if (message.waitingTasks != null && message.hasOwnProperty("waitingTasks"))
                        if (!$util.isInteger(message.waitingTasks))
                            return "waitingTasks: integer expected";
                    if (message.totalWorkers != null && message.hasOwnProperty("totalWorkers"))
                        if (!$util.isInteger(message.totalWorkers))
                            return "totalWorkers: integer expected";
                    if (message.load != null && message.hasOwnProperty("load"))
                        if (typeof message.load !== "number")
                            return "load: number expected";
                    return null;
                };
                /**
                 * Creates a GetAnalysisStatsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {merico.analysis.gateway.GetAnalysisStatsResponse} GetAnalysisStatsResponse
                 */
                GetAnalysisStatsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.merico.analysis.gateway.GetAnalysisStatsResponse)
                        return object;
                    var message = new $root.merico.analysis.gateway.GetAnalysisStatsResponse();
                    switch (object.status) {
                        case "SUCCESS":
                        case 0:
                            message.status = 0;
                            break;
                        case "SYSTEM_ERROR":
                        case 1:
                            message.status = 1;
                            break;
                    }
                    if (object.startedAnalyses != null)
                        message.startedAnalyses = object.startedAnalyses | 0;
                    if (object.waitingAnalyses != null)
                        message.waitingAnalyses = object.waitingAnalyses | 0;
                    if (object.startedTasks != null)
                        message.startedTasks = object.startedTasks | 0;
                    if (object.waitingTasks != null)
                        message.waitingTasks = object.waitingTasks | 0;
                    if (object.totalWorkers != null)
                        message.totalWorkers = object.totalWorkers | 0;
                    if (object.load != null)
                        message.load = Number(object.load);
                    return message;
                };
                /**
                 * Creates a plain object from a GetAnalysisStatsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @static
                 * @param {merico.analysis.gateway.GetAnalysisStatsResponse} message GetAnalysisStatsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAnalysisStatsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = options.enums === String ? "SUCCESS" : 0;
                        object.startedAnalyses = 0;
                        object.waitingAnalyses = 0;
                        object.startedTasks = 0;
                        object.waitingTasks = 0;
                        object.totalWorkers = 0;
                        object.load = 0;
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode[message.status] : message.status;
                    if (message.startedAnalyses != null && message.hasOwnProperty("startedAnalyses"))
                        object.startedAnalyses = message.startedAnalyses;
                    if (message.waitingAnalyses != null && message.hasOwnProperty("waitingAnalyses"))
                        object.waitingAnalyses = message.waitingAnalyses;
                    if (message.startedTasks != null && message.hasOwnProperty("startedTasks"))
                        object.startedTasks = message.startedTasks;
                    if (message.waitingTasks != null && message.hasOwnProperty("waitingTasks"))
                        object.waitingTasks = message.waitingTasks;
                    if (message.totalWorkers != null && message.hasOwnProperty("totalWorkers"))
                        object.totalWorkers = message.totalWorkers;
                    if (message.load != null && message.hasOwnProperty("load"))
                        object.load = options.json && !isFinite(message.load) ? String(message.load) : message.load;
                    return object;
                };
                /**
                 * Converts this GetAnalysisStatsResponse to JSON.
                 * @function toJSON
                 * @memberof merico.analysis.gateway.GetAnalysisStatsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAnalysisStatsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                /**
                 * StatusCode enum.
                 * @name merico.analysis.gateway.GetAnalysisStatsResponse.StatusCode
                 * @enum {number}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} SYSTEM_ERROR=1 SYSTEM_ERROR value
                 */
                GetAnalysisStatsResponse.StatusCode = (function () {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "SYSTEM_ERROR"] = 1;
                    return values;
                })();
                return GetAnalysisStatsResponse;
            })();
            gateway.CodeAnalytics = (function () {
                /**
                 * Constructs a new CodeAnalytics service.
                 * @memberof merico.analysis.gateway
                 * @classdesc Represents a CodeAnalytics
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function CodeAnalytics(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (CodeAnalytics.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CodeAnalytics;
                /**
                 * Creates new CodeAnalytics service using the specified rpc implementation.
                 * @function create
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {CodeAnalytics} RPC service. Useful where requests and/or responses are streamed.
                 */
                CodeAnalytics.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitRepo}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef SubmitRepoCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.SubmitRepoResponse} [response] SubmitRepoResponse
                 */
                /**
                 * Calls SubmitRepo.
                 * @function submitRepo
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.SubmitRepoCallback} callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.submitRepo = function submitRepo(request, callback) {
                    return this.rpcCall(submitRepo, $root.merico.analysis.gateway.SubmitRepoRequest, $root.merico.analysis.gateway.SubmitRepoResponse, request, callback);
                }, "name", { value: "SubmitRepo" });
                /**
                 * Calls SubmitRepo.
                 * @function submitRepo
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.SubmitRepoResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#getVersion}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef GetVersionCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.GetVersionResponse} [response] GetVersionResponse
                 */
                /**
                 * Calls GetVersion.
                 * @function getVersion
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IGetVersionRequest} request GetVersionRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.GetVersionCallback} callback Node-style callback called with the error, if any, and GetVersionResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.getVersion = function getVersion(request, callback) {
                    return this.rpcCall(getVersion, $root.merico.analysis.gateway.GetVersionRequest, $root.merico.analysis.gateway.GetVersionResponse, request, callback);
                }, "name", { value: "GetVersion" });
                /**
                 * Calls GetVersion.
                 * @function getVersion
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IGetVersionRequest} request GetVersionRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.GetVersionResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#terminateAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef TerminateAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.TerminateAnalysisResponse} [response] TerminateAnalysisResponse
                 */
                /**
                 * Calls TerminateAnalysis.
                 * @function terminateAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest} request TerminateAnalysisRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.TerminateAnalysisCallback} callback Node-style callback called with the error, if any, and TerminateAnalysisResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.terminateAnalysis = function terminateAnalysis(request, callback) {
                    return this.rpcCall(terminateAnalysis, $root.merico.analysis.gateway.TerminateAnalysisRequest, $root.merico.analysis.gateway.TerminateAnalysisResponse, request, callback);
                }, "name", { value: "TerminateAnalysis" });
                /**
                 * Calls TerminateAnalysis.
                 * @function terminateAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ITerminateAnalysisRequest} request TerminateAnalysisRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.TerminateAnalysisResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitAspectAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef SubmitAspectAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.SubmitRepoResponse} [response] SubmitRepoResponse
                 */
                /**
                 * Calls SubmitAspectAnalysis.
                 * @function submitAspectAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.SubmitAspectAnalysisCallback} callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.submitAspectAnalysis = function submitAspectAnalysis(request, callback) {
                    return this.rpcCall(submitAspectAnalysis, $root.merico.analysis.gateway.SubmitRepoRequest, $root.merico.analysis.gateway.SubmitRepoResponse, request, callback);
                }, "name", { value: "SubmitAspectAnalysis" });
                /**
                 * Calls SubmitAspectAnalysis.
                 * @function submitAspectAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.SubmitRepoResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitCodeQualityAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef SubmitCodeQualityAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.SubmitRepoResponse} [response] SubmitRepoResponse
                 */
                /**
                 * Calls SubmitCodeQualityAnalysis.
                 * @function submitCodeQualityAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.SubmitCodeQualityAnalysisCallback} callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.submitCodeQualityAnalysis = function submitCodeQualityAnalysis(request, callback) {
                    return this.rpcCall(submitCodeQualityAnalysis, $root.merico.analysis.gateway.SubmitRepoRequest, $root.merico.analysis.gateway.SubmitRepoResponse, request, callback);
                }, "name", { value: "SubmitCodeQualityAnalysis" });
                /**
                 * Calls SubmitCodeQualityAnalysis.
                 * @function submitCodeQualityAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.SubmitRepoResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitCEAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef SubmitCEAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.SubmitRepoResponse} [response] SubmitRepoResponse
                 */
                /**
                 * Calls SubmitCEAnalysis.
                 * @function submitCEAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.SubmitCEAnalysisCallback} callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.submitCEAnalysis = function submitCEAnalysis(request, callback) {
                    return this.rpcCall(submitCEAnalysis, $root.merico.analysis.gateway.SubmitRepoRequest, $root.merico.analysis.gateway.SubmitRepoResponse, request, callback);
                }, "name", { value: "SubmitCEAnalysis" });
                /**
                 * Calls SubmitCEAnalysis.
                 * @function submitCEAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.SubmitRepoResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#submitEfficiencyAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef SubmitEfficiencyAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.SubmitRepoResponse} [response] SubmitRepoResponse
                 */
                /**
                 * Calls SubmitEfficiencyAnalysis.
                 * @function submitEfficiencyAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.SubmitEfficiencyAnalysisCallback} callback Node-style callback called with the error, if any, and SubmitRepoResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.submitEfficiencyAnalysis = function submitEfficiencyAnalysis(request, callback) {
                    return this.rpcCall(submitEfficiencyAnalysis, $root.merico.analysis.gateway.SubmitRepoRequest, $root.merico.analysis.gateway.SubmitRepoResponse, request, callback);
                }, "name", { value: "SubmitEfficiencyAnalysis" });
                /**
                 * Calls SubmitEfficiencyAnalysis.
                 * @function submitEfficiencyAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ISubmitRepoRequest} request SubmitRepoRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.SubmitRepoResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#lookupAnalysis}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef LookupAnalysisCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.LookupAnalysisResponse} [response] LookupAnalysisResponse
                 */
                /**
                 * Calls LookupAnalysis.
                 * @function lookupAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest} request LookupAnalysisRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.LookupAnalysisCallback} callback Node-style callback called with the error, if any, and LookupAnalysisResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.lookupAnalysis = function lookupAnalysis(request, callback) {
                    return this.rpcCall(lookupAnalysis, $root.merico.analysis.gateway.LookupAnalysisRequest, $root.merico.analysis.gateway.LookupAnalysisResponse, request, callback);
                }, "name", { value: "LookupAnalysis" });
                /**
                 * Calls LookupAnalysis.
                 * @function lookupAnalysis
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.ILookupAnalysisRequest} request LookupAnalysisRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.LookupAnalysisResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#clearCache}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef ClearCacheCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.ClearCacheResponse} [response] ClearCacheResponse
                 */
                /**
                 * Calls ClearCache.
                 * @function clearCache
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IClearCacheRequest} request ClearCacheRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.ClearCacheCallback} callback Node-style callback called with the error, if any, and ClearCacheResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.clearCache = function clearCache(request, callback) {
                    return this.rpcCall(clearCache, $root.merico.analysis.gateway.ClearCacheRequest, $root.merico.analysis.gateway.ClearCacheResponse, request, callback);
                }, "name", { value: "ClearCache" });
                /**
                 * Calls ClearCache.
                 * @function clearCache
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IClearCacheRequest} request ClearCacheRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.ClearCacheResponse>} Promise
                 * @variation 2
                 */
                /**
                 * Callback as used by {@link merico.analysis.gateway.CodeAnalytics#getAnalysisStats}.
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @typedef GetAnalysisStatsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {merico.analysis.gateway.GetAnalysisStatsResponse} [response] GetAnalysisStatsResponse
                 */
                /**
                 * Calls GetAnalysisStats.
                 * @function getAnalysisStats
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest} request GetAnalysisStatsRequest message or plain object
                 * @param {merico.analysis.gateway.CodeAnalytics.GetAnalysisStatsCallback} callback Node-style callback called with the error, if any, and GetAnalysisStatsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CodeAnalytics.prototype.getAnalysisStats = function getAnalysisStats(request, callback) {
                    return this.rpcCall(getAnalysisStats, $root.merico.analysis.gateway.GetAnalysisStatsRequest, $root.merico.analysis.gateway.GetAnalysisStatsResponse, request, callback);
                }, "name", { value: "GetAnalysisStats" });
                /**
                 * Calls GetAnalysisStats.
                 * @function getAnalysisStats
                 * @memberof merico.analysis.gateway.CodeAnalytics
                 * @instance
                 * @param {merico.analysis.gateway.IGetAnalysisStatsRequest} request GetAnalysisStatsRequest message or plain object
                 * @returns {Promise<merico.analysis.gateway.GetAnalysisStatsResponse>} Promise
                 * @variation 2
                 */
                return CodeAnalytics;
            })();
            return gateway;
        })();
        return analysis;
    })();
    return merico;
})();
module.exports = $root;
