/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots._1599734255573 || ($protobuf.roots._1599734255573 = {});

$root.merico = (function() {

    /**
     * Namespace merico.
     * @exports merico
     * @namespace
     */
    var merico = {};

    merico.proto = (function() {

        /**
         * Namespace proto.
         * @memberof merico
         * @namespace
         */
        var proto = {};

        proto.analysis = (function() {

            /**
             * Namespace analysis.
             * @memberof merico.proto
             * @namespace
             */
            var analysis = {};

            analysis.indicator = (function() {

                /**
                 * Namespace indicator.
                 * @memberof merico.proto.analysis
                 * @namespace
                 */
                var indicator = {};

                indicator.ReportOfAll = (function() {

                    /**
                     * Properties of a ReportOfAll.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IReportOfAll
                     * @property {number|null} [protoVersion] ReportOfAll protoVersion
                     * @property {merico.proto.analysis.indicator.IAnalysisMeta|null} [meta] ReportOfAll meta
                     * @property {Array.<string>|null} [fields] ReportOfAll fields
                     * @property {Object.<string,number>|null} [linguistLangs] ReportOfAll linguistLangs
                     * @property {Array.<string>|null} [treeDiffLangs] ReportOfAll treeDiffLangs
                     * @property {Array.<string>|null} [lineDiffLangs] ReportOfAll lineDiffLangs
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [commits] ReportOfAll commits
                     * @property {Array.<string>|null} [mappedEmails] ReportOfAll mappedEmails
                     * @property {Array.<merico.proto.analysis.indicator.ICommitMetrics>|null} [commitMetrics] ReportOfAll commitMetrics
                     * @property {merico.proto.analysis.indicator.ILabeledCommits|null} [labeledCommits] ReportOfAll labeledCommits
                     * @property {merico.proto.analysis.indicator.ILabeledFiles|null} [labeledFiles] ReportOfAll labeledFiles
                     * @property {Array.<merico.proto.analysis.indicator.IIgnoredRecord>|null} [ignoredRecords] ReportOfAll ignoredRecords
                     * @property {Object.<string,merico.proto.analysis.indicator.ICcg>|null} [ccgs] ReportOfAll ccgs
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [lineDiffEdits] ReportOfAll lineDiffEdits
                     * @property {number|Long|null} [totalDevEq] ReportOfAll totalDevEq
                     * @property {Object.<string,number>|null} [devEqLangs] ReportOfAll devEqLangs
                     * @property {merico.proto.analysis.indicator.IDocCoverage|null} [docCoverage] ReportOfAll docCoverage
                     * @property {merico.proto.analysis.indicator.IDryness|null} [dryness] ReportOfAll dryness
                     * @property {merico.proto.analysis.indicator.IStaticTestCoverage|null} [staticTestCoverage] ReportOfAll staticTestCoverage
                     * @property {merico.proto.analysis.indicator.ICodeQuality|null} [codeQuality] ReportOfAll codeQuality
                     * @property {merico.proto.analysis.indicator.ICodeQuality|null} [customCodeQuality] ReportOfAll customCodeQuality
                     * @property {Array.<merico.proto.analysis.indicator.IContributorImpact>|null} [contributorImpact] ReportOfAll contributorImpact
                     * @property {merico.proto.analysis.indicator.ITechTag|null} [techTag] ReportOfAll techTag
                     * @property {merico.proto.analysis.indicator.ITopicModeling|null} [topicModeling] ReportOfAll topicModeling
                     * @property {number|null} [modularity] ReportOfAll modularity
                     * @property {number|null} [robustness] ReportOfAll robustness
                     * @property {number|null} [velocity] ReportOfAll velocity
                     * @property {Array.<string>|null} [vcsTags] ReportOfAll vcsTags
                     * @property {Array.<merico.proto.analysis.indicator.IPackageDependency>|null} [packageDependencies] ReportOfAll packageDependencies
                     * @property {merico.proto.analysis.indicator.IAggregation|null} [aggregation] ReportOfAll aggregation
                     * @property {Object.<string,merico.proto.analysis.indicator.ICag>|null} [cags] ReportOfAll cags
                     * @property {Object.<string,merico.proto.analysis.indicator.IContributorBombSweep>|null} [contributorBombSweep] ReportOfAll contributorBombSweep
                     * @property {Object.<string,merico.proto.analysis.indicator.ITestOfTimeFunction>|null} [testOfTimeFunction] ReportOfAll testOfTimeFunction
                     */

                    /**
                     * Constructs a new ReportOfAll.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a ReportOfAll.
                     * @implements IReportOfAll
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IReportOfAll=} [properties] Properties to set
                     */
                    function ReportOfAll(properties) {
                        this.fields = [];
                        this.linguistLangs = {};
                        this.treeDiffLangs = [];
                        this.lineDiffLangs = [];
                        this.mappedEmails = [];
                        this.commitMetrics = [];
                        this.ignoredRecords = [];
                        this.ccgs = {};
                        this.devEqLangs = {};
                        this.contributorImpact = [];
                        this.vcsTags = [];
                        this.packageDependencies = [];
                        this.cags = {};
                        this.contributorBombSweep = [];
                        this.testOfTimeFunction = [];

                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ReportOfAll protoVersion.
                     * @member {number} protoVersion
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.protoVersion = 0;

                    /**
                     * ReportOfAll meta.
                     * @member {merico.proto.analysis.indicator.IAnalysisMeta|null|undefined} meta
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.meta = null;

                    /**
                     * ReportOfAll fields.
                     * @member {Array.<string>} fields
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.fields = $util.emptyArray;

                    /**
                     * ReportOfAll linguistLangs.
                     * @member {Object.<string,number>} linguistLangs
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.linguistLangs = $util.emptyObject;

                    /**
                     * ReportOfAll treeDiffLangs.
                     * @member {Array.<string>} treeDiffLangs
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.treeDiffLangs = $util.emptyArray;

                    /**
                     * ReportOfAll lineDiffLangs.
                     * @member {Array.<string>} lineDiffLangs
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.lineDiffLangs = $util.emptyArray;

                    /**
                     * ReportOfAll commits.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} commits
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.commits = null;

                    /**
                     * ReportOfAll mappedEmails.
                     * @member {Array.<string>} mappedEmails
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.mappedEmails = $util.emptyArray;

                    /**
                     * ReportOfAll commitMetrics.
                     * @member {Array.<merico.proto.analysis.indicator.ICommitMetrics>} commitMetrics
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.commitMetrics = $util.emptyArray;

                    /**
                     * ReportOfAll labeledCommits.
                     * @member {merico.proto.analysis.indicator.ILabeledCommits|null|undefined} labeledCommits
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.labeledCommits = null;

                    /**
                     * ReportOfAll labeledFiles.
                     * @member {merico.proto.analysis.indicator.ILabeledFiles|null|undefined} labeledFiles
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.labeledFiles = null;

                    /**
                     * ReportOfAll ignoredRecords.
                     * @member {Array.<merico.proto.analysis.indicator.IIgnoredRecord>} ignoredRecords
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.ignoredRecords = $util.emptyArray;

                    /**
                     * ReportOfAll ccgs.
                     * @member {Object.<string,merico.proto.analysis.indicator.ICcg>} ccgs
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.ccgs = $util.emptyObject;

                    /**
                     * ReportOfAll lineDiffEdits.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} lineDiffEdits
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.lineDiffEdits = null;

                    /**
                     * ReportOfAll totalDevEq.
                     * @member {number|Long} totalDevEq
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.totalDevEq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ReportOfAll devEqLangs.
                     * @member {Object.<string,number>} devEqLangs
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.devEqLangs = $util.emptyObject;

                    /**
                     * ReportOfAll docCoverage.
                     * @member {merico.proto.analysis.indicator.IDocCoverage|null|undefined} docCoverage
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.docCoverage = null;

                    /**
                     * ReportOfAll dryness.
                     * @member {merico.proto.analysis.indicator.IDryness|null|undefined} dryness
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.dryness = null;

                    /**
                     * ReportOfAll staticTestCoverage.
                     * @member {merico.proto.analysis.indicator.IStaticTestCoverage|null|undefined} staticTestCoverage
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.staticTestCoverage = null;

                    /**
                     * ReportOfAll codeQuality.
                     * @member {merico.proto.analysis.indicator.ICodeQuality|null|undefined} codeQuality
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.codeQuality = null;

                    /**
                     * ReportOfAll customCodeQuality.
                     * @member {merico.proto.analysis.indicator.ICodeQuality|null|undefined} customCodeQuality
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.customCodeQuality = null;

                    /**
                     * ReportOfAll contributorImpact.
                     * @member {Array.<merico.proto.analysis.indicator.IContributorImpact>} contributorImpact
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.contributorImpact = $util.emptyArray;

                    /**
                     * ReportOfAll techTag.
                     * @member {merico.proto.analysis.indicator.ITechTag|null|undefined} techTag
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.techTag = null;

                    /**
                     * ReportOfAll topicModeling.
                     * @member {merico.proto.analysis.indicator.ITopicModeling|null|undefined} topicModeling
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.topicModeling = null;

                    /**
                     * ReportOfAll modularity.
                     * @member {number} modularity
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.modularity = 0;

                    /**
                     * ReportOfAll robustness.
                     * @member {number} robustness
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.robustness = 0;

                    /**
                     * ReportOfAll velocity.
                     * @member {number} velocity
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.velocity = 0;

                    /**
                     * ReportOfAll vcsTags.
                     * @member {Array.<string>} vcsTags
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.vcsTags = $util.emptyArray;

                    /**
                     * ReportOfAll packageDependencies.
                     * @member {Array.<merico.proto.analysis.indicator.IPackageDependency>} packageDependencies
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.packageDependencies = $util.emptyArray;

                    /**
                     * ReportOfAll aggregation.
                     * @member {merico.proto.analysis.indicator.IAggregation|null|undefined} aggregation
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.aggregation = null;

                    /**
                     * ReportOfAll cags.
                     * @member {Object.<string,merico.proto.analysis.indicator.ICag>} cags
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.cags = $util.emptyObject;

                    /**
                     * ReportOfAll contributorBombSweep.
                     * @member {Object.<string,merico.proto.analysis.indicator.IContributorBombSweep>} contributorBombSweep
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.contributorBombSweep = $util.emptyObject;

                    /**
                     * ReportOfAll testOfTimeFunction.
                     * @member {Object.<string,merico.proto.analysis.indicator.ITestOfTimeFunction>} testOfTimeFunction
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @instance
                     */
                    ReportOfAll.prototype.testOfTimeFunction = $util.emptyObject;

                    /**
                     * Decodes a ReportOfAll message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.ReportOfAll
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.ReportOfAll} ReportOfAll
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReportOfAll.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.ReportOfAll(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.protoVersion = reader.int32();
                                break;
                            case 2:
                                message.meta = $root.merico.proto.analysis.indicator.AnalysisMeta.decode(reader, reader.uint32());
                                break;
                            case 3:
                                if (!(message.fields && message.fields.length))
                                    message.fields = [];
                                message.fields.push(reader.string());
                                break;
                            case 11:
                                reader.skip().pos++;
                                if (message.linguistLangs === $util.emptyObject)
                                    message.linguistLangs = {};
                                key = reader.string();
                                reader.pos++;
                                message.linguistLangs[key] = reader.float();
                                break;
                            case 12:
                                if (!(message.treeDiffLangs && message.treeDiffLangs.length))
                                    message.treeDiffLangs = [];
                                message.treeDiffLangs.push(reader.string());
                                break;
                            case 13:
                                if (!(message.lineDiffLangs && message.lineDiffLangs.length))
                                    message.lineDiffLangs = [];
                                message.lineDiffLangs.push(reader.string());
                                break;
                            case 14:
                                message.commits = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            case 15:
                                if (!(message.mappedEmails && message.mappedEmails.length))
                                    message.mappedEmails = [];
                                message.mappedEmails.push(reader.string());
                                break;
                            case 16:
                                if (!(message.commitMetrics && message.commitMetrics.length))
                                    message.commitMetrics = [];
                                message.commitMetrics.push($root.merico.proto.analysis.indicator.CommitMetrics.decode(reader, reader.uint32()));
                                break;
                            case 17:
                                message.labeledCommits = $root.merico.proto.analysis.indicator.LabeledCommits.decode(reader, reader.uint32());
                                break;
                            case 18:
                                message.labeledFiles = $root.merico.proto.analysis.indicator.LabeledFiles.decode(reader, reader.uint32());
                                break;
                            case 19:
                                if (!(message.ignoredRecords && message.ignoredRecords.length))
                                    message.ignoredRecords = [];
                                message.ignoredRecords.push($root.merico.proto.analysis.indicator.IgnoredRecord.decode(reader, reader.uint32()));
                                break;
                            case 20:
                                reader.skip().pos++;
                                if (message.ccgs === $util.emptyObject)
                                    message.ccgs = {};
                                key = reader.string();
                                reader.pos++;
                                message.ccgs[key] = $root.merico.proto.analysis.indicator.Ccg.decode(reader, reader.uint32());
                                break;
                            case 21:
                                message.lineDiffEdits = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            case 22:
                                message.totalDevEq = reader.int64();
                                break;
                            case 23:
                                reader.skip().pos++;
                                if (message.devEqLangs === $util.emptyObject)
                                    message.devEqLangs = {};
                                key = reader.string();
                                reader.pos++;
                                message.devEqLangs[key] = reader.float();
                                break;
                            case 24:
                                message.docCoverage = $root.merico.proto.analysis.indicator.DocCoverage.decode(reader, reader.uint32());
                                break;
                            case 25:
                                message.dryness = $root.merico.proto.analysis.indicator.Dryness.decode(reader, reader.uint32());
                                break;
                            case 26:
                                message.staticTestCoverage = $root.merico.proto.analysis.indicator.StaticTestCoverage.decode(reader, reader.uint32());
                                break;
                            case 27:
                                message.codeQuality = $root.merico.proto.analysis.indicator.CodeQuality.decode(reader, reader.uint32());
                                break;
                            case 28:
                                message.customCodeQuality = $root.merico.proto.analysis.indicator.CodeQuality.decode(reader, reader.uint32());
                                break;
                            case 29:
                                if (!(message.contributorImpact && message.contributorImpact.length))
                                    message.contributorImpact = [];
                                message.contributorImpact.push($root.merico.proto.analysis.indicator.ContributorImpact.decode(reader, reader.uint32()));
                                break;
                            case 30:
                                message.techTag = $root.merico.proto.analysis.indicator.TechTag.decode(reader, reader.uint32());
                                break;
                            case 31:
                                message.topicModeling = $root.merico.proto.analysis.indicator.TopicModeling.decode(reader, reader.uint32());
                                break;
                            case 32:
                                message.modularity = reader.float();
                                break;
                            case 33:
                                message.robustness = reader.float();
                                break;
                            case 34:
                                message.velocity = reader.float();
                                break;
                            case 35:
                                if (!(message.vcsTags && message.vcsTags.length))
                                    message.vcsTags = [];
                                message.vcsTags.push(reader.string());
                                break;
                            case 36:
                                if (!(message.packageDependencies && message.packageDependencies.length))
                                    message.packageDependencies = [];
                                message.packageDependencies.push($root.merico.proto.analysis.indicator.PackageDependency.decode(reader, reader.uint32()));
                                break;
                            case 37:
                                message.aggregation = $root.merico.proto.analysis.indicator.Aggregation.decode(reader, reader.uint32());
                                break;
                            case 38:
                                reader.skip().pos++;
                                if (message.cags === $util.emptyObject)
                                    message.cags = {};
                                key = reader.string();
                                reader.pos++;
                                message.cags[key] = $root.merico.proto.analysis.indicator.Cag.decode(reader, reader.uint32());
                                break;
                            case 39:
                              if (!(message.contributorBombSweep && message.contributorBombSweep.length))
                                message.contributorBombSweep = [];
                              message.contributorBombSweep.push($root.merico.proto.analysis.indicator.ContributorBombSweep.decode(reader, reader.uint32()));
                              break;
                            case 40:
                              if (!(message.testOfTimeFunction && message.testOfTimeFunction.length))
                                message.testOfTimeFunction = [];
                              message.testOfTimeFunction.push($root.merico.proto.analysis.indicator.TestOfTimeFunction.decode(reader, reader.uint32()));
                              break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return ReportOfAll;
                })();

                indicator.AnalysisMeta = (function() {

                    /**
                     * Properties of an AnalysisMeta.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IAnalysisMeta
                     * @property {string|null} [analysisId] AnalysisMeta analysisId
                     * @property {string|null} [version] AnalysisMeta version
                     * @property {string|null} [semver] AnalysisMeta semver
                     * @property {string|null} [gitUrl] AnalysisMeta gitUrl
                     * @property {string|null} [analysisType] AnalysisMeta analysisType
                     * @property {Array.<string>|null} [pathBlacklist] AnalysisMeta pathBlacklist
                     * @property {Array.<string>|null} [commitBlacklist] AnalysisMeta commitBlacklist
                     * @property {string|null} [defaultRef] AnalysisMeta defaultRef
                     * @property {string|null} [defaultRefHexsha] AnalysisMeta defaultRefHexsha
                     * @property {boolean|null} [singleBranch] AnalysisMeta singleBranch
                     * @property {number|null} [commitBefore] AnalysisMeta commitBefore
                     * @property {number|null} [commitAfter] AnalysisMeta commitAfter
                     * @property {string|null} [reportId] AnalysisMeta reportId
                     * @property {string|null} [analysisConf] AnalysisMeta analysisConf
                     * @property {string|null} [sourceType] AnalysisMeta sourceType
                     * @property {string|null} [sourceId] AnalysisMeta sourceId
                     * @property {string|null} [earliestHexsha] AnalysisMeta earliestHexsha
                     * @property {string|null} [latestHexsha] AnalysisMeta latestHexsha
                     */

                    /**
                     * Constructs a new AnalysisMeta.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents an AnalysisMeta.
                     * @implements IAnalysisMeta
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IAnalysisMeta=} [properties] Properties to set
                     */
                    function AnalysisMeta(properties) {
                        this.pathBlacklist = [];
                        this.commitBlacklist = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AnalysisMeta analysisId.
                     * @member {string} analysisId
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.analysisId = "";

                    /**
                     * AnalysisMeta version.
                     * @member {string} version
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.version = "";

                    /**
                     * AnalysisMeta semver.
                     * @member {string} semver
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.semver = "";

                    /**
                     * AnalysisMeta gitUrl.
                     * @member {string} gitUrl
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.gitUrl = "";

                    /**
                     * AnalysisMeta analysisType.
                     * @member {string} analysisType
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.analysisType = "";

                    /**
                     * AnalysisMeta pathBlacklist.
                     * @member {Array.<string>} pathBlacklist
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.pathBlacklist = $util.emptyArray;

                    /**
                     * AnalysisMeta commitBlacklist.
                     * @member {Array.<string>} commitBlacklist
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.commitBlacklist = $util.emptyArray;

                    /**
                     * AnalysisMeta defaultRef.
                     * @member {string} defaultRef
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.defaultRef = "";

                    /**
                     * AnalysisMeta defaultRefHexsha.
                     * @member {string} defaultRefHexsha
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.defaultRefHexsha = "";

                    /**
                     * AnalysisMeta singleBranch.
                     * @member {boolean} singleBranch
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.singleBranch = false;

                    /**
                     * AnalysisMeta commitBefore.
                     * @member {number} commitBefore
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.commitBefore = 0;

                    /**
                     * AnalysisMeta commitAfter.
                     * @member {number} commitAfter
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.commitAfter = 0;

                    /**
                     * AnalysisMeta reportId.
                     * @member {string} reportId
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.reportId = "";

                    /**
                     * AnalysisMeta analysisConf.
                     * @member {string} analysisConf
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.analysisConf = "";

                    /**
                     * AnalysisMeta sourceType.
                     * @member {string} sourceType
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.sourceType = "";

                    /**
                     * AnalysisMeta sourceId.
                     * @member {string} sourceId
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.sourceId = "";

                    /**
                     * AnalysisMeta earliestHexsha.
                     * @member {string} earliestHexsha
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.earliestHexsha = "";

                    /**
                     * AnalysisMeta latestHexsha.
                     * @member {string} latestHexsha
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @instance
                     */
                    AnalysisMeta.prototype.latestHexsha = "";

                    /**
                     * Decodes an AnalysisMeta message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.AnalysisMeta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.AnalysisMeta} AnalysisMeta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AnalysisMeta.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.AnalysisMeta();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.analysisId = reader.string();
                                break;
                            case 2:
                                message.version = reader.string();
                                break;
                            case 3:
                                message.semver = reader.string();
                                break;
                            case 4:
                                message.gitUrl = reader.string();
                                break;
                            case 5:
                                message.analysisType = reader.string();
                                break;
                            case 6:
                                if (!(message.pathBlacklist && message.pathBlacklist.length))
                                    message.pathBlacklist = [];
                                message.pathBlacklist.push(reader.string());
                                break;
                            case 7:
                                if (!(message.commitBlacklist && message.commitBlacklist.length))
                                    message.commitBlacklist = [];
                                message.commitBlacklist.push(reader.string());
                                break;
                            case 8:
                                message.defaultRef = reader.string();
                                break;
                            case 9:
                                message.defaultRefHexsha = reader.string();
                                break;
                            case 10:
                                message.singleBranch = reader.bool();
                                break;
                            case 11:
                                message.commitBefore = reader.int32();
                                break;
                            case 12:
                                message.commitAfter = reader.int32();
                                break;
                            case 13:
                                message.reportId = reader.string();
                                break;
                            case 14:
                                message.analysisConf = reader.string();
                                break;
                            case 15:
                                message.sourceType = reader.string();
                                break;
                            case 16:
                                message.sourceId = reader.string();
                                break;
                            case 17:
                                message.earliestHexsha = reader.string();
                                break;
                            case 18:
                                message.latestHexsha = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return AnalysisMeta;
                })();

                indicator.Streaming = (function() {

                    /**
                     * Properties of a Streaming.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IStreaming
                     * @property {string|null} [filePath] Streaming filePath
                     * @property {number|Long|null} [fileSize] Streaming fileSize
                     * @property {string|null} [fileMd5] Streaming fileMd5
                     * @property {number|Long|null} [count] Streaming count
                     */

                    /**
                     * Constructs a new Streaming.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a Streaming.
                     * @implements IStreaming
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IStreaming=} [properties] Properties to set
                     */
                    function Streaming(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Streaming filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.Streaming
                     * @instance
                     */
                    Streaming.prototype.filePath = "";

                    /**
                     * Streaming fileSize.
                     * @member {number|Long} fileSize
                     * @memberof merico.proto.analysis.indicator.Streaming
                     * @instance
                     */
                    Streaming.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Streaming fileMd5.
                     * @member {string} fileMd5
                     * @memberof merico.proto.analysis.indicator.Streaming
                     * @instance
                     */
                    Streaming.prototype.fileMd5 = "";

                    /**
                     * Streaming count.
                     * @member {number|Long} count
                     * @memberof merico.proto.analysis.indicator.Streaming
                     * @instance
                     */
                    Streaming.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Decodes a Streaming message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Streaming
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Streaming} Streaming
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Streaming.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Streaming();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.filePath = reader.string();
                                break;
                            case 2:
                                message.fileSize = reader.int64();
                                break;
                            case 3:
                                message.fileMd5 = reader.string();
                                break;
                            case 4:
                                message.count = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Streaming;
                })();

                indicator.CherryPick = (function() {

                    /**
                     * Properties of a CherryPick.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICherryPick
                     * @property {string|null} [original] CherryPick original
                     * @property {Array.<string>|null} [replicas] CherryPick replicas
                     */

                    /**
                     * Constructs a new CherryPick.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CherryPick.
                     * @implements ICherryPick
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICherryPick=} [properties] Properties to set
                     */
                    function CherryPick(properties) {
                        this.replicas = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CherryPick original.
                     * @member {string} original
                     * @memberof merico.proto.analysis.indicator.CherryPick
                     * @instance
                     */
                    CherryPick.prototype.original = "";

                    /**
                     * CherryPick replicas.
                     * @member {Array.<string>} replicas
                     * @memberof merico.proto.analysis.indicator.CherryPick
                     * @instance
                     */
                    CherryPick.prototype.replicas = $util.emptyArray;

                    /**
                     * Decodes a CherryPick message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CherryPick
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CherryPick} CherryPick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CherryPick.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CherryPick();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.original = reader.string();
                                break;
                            case 2:
                                if (!(message.replicas && message.replicas.length))
                                    message.replicas = [];
                                message.replicas.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CherryPick;
                })();

                indicator.LabeledCommits = (function() {

                    /**
                     * Properties of a LabeledCommits.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ILabeledCommits
                     * @property {Array.<string>|null} [largeInsertions] LabeledCommits largeInsertions
                     * @property {Array.<string>|null} [largeDeletions] LabeledCommits largeDeletions
                     * @property {Array.<string>|null} [revert] LabeledCommits revert
                     * @property {Array.<merico.proto.analysis.indicator.ICherryPick>|null} [cherryPicks] LabeledCommits cherryPicks
                     */

                    /**
                     * Constructs a new LabeledCommits.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a LabeledCommits.
                     * @implements ILabeledCommits
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ILabeledCommits=} [properties] Properties to set
                     */
                    function LabeledCommits(properties) {
                        this.largeInsertions = [];
                        this.largeDeletions = [];
                        this.revert = [];
                        this.cherryPicks = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LabeledCommits largeInsertions.
                     * @member {Array.<string>} largeInsertions
                     * @memberof merico.proto.analysis.indicator.LabeledCommits
                     * @instance
                     */
                    LabeledCommits.prototype.largeInsertions = $util.emptyArray;

                    /**
                     * LabeledCommits largeDeletions.
                     * @member {Array.<string>} largeDeletions
                     * @memberof merico.proto.analysis.indicator.LabeledCommits
                     * @instance
                     */
                    LabeledCommits.prototype.largeDeletions = $util.emptyArray;

                    /**
                     * LabeledCommits revert.
                     * @member {Array.<string>} revert
                     * @memberof merico.proto.analysis.indicator.LabeledCommits
                     * @instance
                     */
                    LabeledCommits.prototype.revert = $util.emptyArray;

                    /**
                     * LabeledCommits cherryPicks.
                     * @member {Array.<merico.proto.analysis.indicator.ICherryPick>} cherryPicks
                     * @memberof merico.proto.analysis.indicator.LabeledCommits
                     * @instance
                     */
                    LabeledCommits.prototype.cherryPicks = $util.emptyArray;

                    /**
                     * Decodes a LabeledCommits message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.LabeledCommits
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.LabeledCommits} LabeledCommits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LabeledCommits.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.LabeledCommits();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.largeInsertions && message.largeInsertions.length))
                                    message.largeInsertions = [];
                                message.largeInsertions.push(reader.string());
                                break;
                            case 2:
                                if (!(message.largeDeletions && message.largeDeletions.length))
                                    message.largeDeletions = [];
                                message.largeDeletions.push(reader.string());
                                break;
                            case 3:
                                if (!(message.revert && message.revert.length))
                                    message.revert = [];
                                message.revert.push(reader.string());
                                break;
                            case 4:
                                if (!(message.cherryPicks && message.cherryPicks.length))
                                    message.cherryPicks = [];
                                message.cherryPicks.push($root.merico.proto.analysis.indicator.CherryPick.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return LabeledCommits;
                })();

                indicator.UnchangedFile = (function() {

                    /**
                     * Properties of an UnchangedFile.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IUnchangedFile
                     * @property {string|null} [hexsha] UnchangedFile hexsha
                     * @property {string|null} [filePath] UnchangedFile filePath
                     */

                    /**
                     * Constructs a new UnchangedFile.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents an UnchangedFile.
                     * @implements IUnchangedFile
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IUnchangedFile=} [properties] Properties to set
                     */
                    function UnchangedFile(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UnchangedFile hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.UnchangedFile
                     * @instance
                     */
                    UnchangedFile.prototype.hexsha = "";

                    /**
                     * UnchangedFile filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.UnchangedFile
                     * @instance
                     */
                    UnchangedFile.prototype.filePath = "";

                    /**
                     * Decodes an UnchangedFile message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.UnchangedFile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.UnchangedFile} UnchangedFile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnchangedFile.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.UnchangedFile();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hexsha = reader.string();
                                break;
                            case 2:
                                message.filePath = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UnchangedFile;
                })();

                indicator.LabeledFiles = (function() {

                    /**
                     * Properties of a LabeledFiles.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ILabeledFiles
                     * @property {Array.<merico.proto.analysis.indicator.IUnchangedFile>|null} [unchangedFiles] LabeledFiles unchangedFiles
                     */

                    /**
                     * Constructs a new LabeledFiles.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a LabeledFiles.
                     * @implements ILabeledFiles
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ILabeledFiles=} [properties] Properties to set
                     */
                    function LabeledFiles(properties) {
                        this.unchangedFiles = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LabeledFiles unchangedFiles.
                     * @member {Array.<merico.proto.analysis.indicator.IUnchangedFile>} unchangedFiles
                     * @memberof merico.proto.analysis.indicator.LabeledFiles
                     * @instance
                     */
                    LabeledFiles.prototype.unchangedFiles = $util.emptyArray;

                    /**
                     * Decodes a LabeledFiles message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.LabeledFiles
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.LabeledFiles} LabeledFiles
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LabeledFiles.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.LabeledFiles();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.unchangedFiles && message.unchangedFiles.length))
                                    message.unchangedFiles = [];
                                message.unchangedFiles.push($root.merico.proto.analysis.indicator.UnchangedFile.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return LabeledFiles;
                })();

                indicator.CommitMetrics = (function() {

                    /**
                     * Properties of a CommitMetrics.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICommitMetrics
                     * @property {string|null} [hexsha] CommitMetrics hexsha
                     * @property {number|null} [complexity] CommitMetrics complexity
                     * @property {number|null} [cyclomaticComplexity] CommitMetrics cyclomaticComplexity
                     * @property {number|null} [bigCcFuncCount] CommitMetrics bigCcFuncCount
                     */

                    /**
                     * Constructs a new CommitMetrics.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CommitMetrics.
                     * @implements ICommitMetrics
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICommitMetrics=} [properties] Properties to set
                     */
                    function CommitMetrics(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommitMetrics hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.CommitMetrics
                     * @instance
                     */
                    CommitMetrics.prototype.hexsha = "";

                    /**
                     * CommitMetrics complexity.
                     * @member {number} complexity
                     * @memberof merico.proto.analysis.indicator.CommitMetrics
                     * @instance
                     */
                    CommitMetrics.prototype.complexity = 0;

                    /**
                     * CommitMetrics cyclomaticComplexity.
                     * @member {number} cyclomaticComplexity
                     * @memberof merico.proto.analysis.indicator.CommitMetrics
                     * @instance
                     */
                    CommitMetrics.prototype.cyclomaticComplexity = 0;

                    /**
                     * CommitMetrics bigCcFuncCount.
                     * @member {number} bigCcFuncCount
                     * @memberof merico.proto.analysis.indicator.CommitMetrics
                     * @instance
                     */
                    CommitMetrics.prototype.bigCcFuncCount = 0;

                    /**
                     * Decodes a CommitMetrics message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CommitMetrics
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CommitMetrics} CommitMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommitMetrics.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CommitMetrics();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hexsha = reader.string();
                                break;
                            case 2:
                                message.complexity = reader.int32();
                                break;
                            case 3:
                                message.cyclomaticComplexity = reader.int32();
                                break;
                            case 4:
                                message.bigCcFuncCount = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CommitMetrics;
                })();

                indicator.CcgSnapshot = (function() {

                    /**
                     * Properties of a CcgSnapshot.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICcgSnapshot
                     * @property {string|null} [id] CcgSnapshot id
                     * @property {string|null} [filePath] CcgSnapshot filePath
                     * @property {string|null} [name] CcgSnapshot name
                     * @property {string|null} [parameters] CcgSnapshot parameters
                     * @property {string|null} [returns] CcgSnapshot returns
                     * @property {string|null} [encFuncName] CcgSnapshot encFuncName
                     * @property {merico.proto.analysis.indicator.CcgSnapshot.IPos|null} [pos] CcgSnapshot pos
                     * @property {string|null} [codeHash] CcgSnapshot codeHash
                     * @property {string|null} [className] CcgSnapshot className
                     * @property {Array.<string>|null} [callees] CcgSnapshot callees
                     * @property {number|null} [cyclomaticComplexity] CcgSnapshot cyclomaticComplexity
                     */

                    /**
                     * Constructs a new CcgSnapshot.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CcgSnapshot.
                     * @implements ICcgSnapshot
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICcgSnapshot=} [properties] Properties to set
                     */
                    function CcgSnapshot(properties) {
                        this.callees = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CcgSnapshot id.
                     * @member {string} id
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.id = "";

                    /**
                     * CcgSnapshot filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.filePath = "";

                    /**
                     * CcgSnapshot name.
                     * @member {string} name
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.name = "";

                    /**
                     * CcgSnapshot parameters.
                     * @member {string} parameters
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.parameters = "";

                    /**
                     * CcgSnapshot returns.
                     * @member {string} returns
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.returns = "";

                    /**
                     * CcgSnapshot encFuncName.
                     * @member {string} encFuncName
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.encFuncName = "";

                    /**
                     * CcgSnapshot pos.
                     * @member {merico.proto.analysis.indicator.CcgSnapshot.IPos|null|undefined} pos
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.pos = null;

                    /**
                     * CcgSnapshot codeHash.
                     * @member {string} codeHash
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.codeHash = "";

                    /**
                     * CcgSnapshot className.
                     * @member {string} className
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.className = "";

                    /**
                     * CcgSnapshot callees.
                     * @member {Array.<string>} callees
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.callees = $util.emptyArray;

                    /**
                     * CcgSnapshot cyclomaticComplexity.
                     * @member {number} cyclomaticComplexity
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @instance
                     */
                    CcgSnapshot.prototype.cyclomaticComplexity = 0;

                    /**
                     * Decodes a CcgSnapshot message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CcgSnapshot
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CcgSnapshot} CcgSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CcgSnapshot.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CcgSnapshot();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.filePath = reader.string();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.parameters = reader.string();
                                break;
                            case 5:
                                message.returns = reader.string();
                                break;
                            case 6:
                                message.encFuncName = reader.string();
                                break;
                            case 7:
                                message.pos = $root.merico.proto.analysis.indicator.CcgSnapshot.Pos.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.codeHash = reader.string();
                                break;
                            case 9:
                                message.className = reader.string();
                                break;
                            case 10:
                                if (!(message.callees && message.callees.length))
                                    message.callees = [];
                                message.callees.push(reader.string());
                                break;
                            case 11:
                                message.cyclomaticComplexity = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    CcgSnapshot.Pos = (function() {

                        /**
                         * Properties of a Pos.
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot
                         * @interface IPos
                         * @property {number|null} [startLine] Pos startLine
                         * @property {number|null} [endLine] Pos endLine
                         * @property {number|null} [startColumn] Pos startColumn
                         * @property {number|null} [endColumn] Pos endColumn
                         * @property {number|null} [startRange] Pos startRange
                         * @property {number|null} [endRange] Pos endRange
                         */

                        /**
                         * Constructs a new Pos.
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot
                         * @classdesc Represents a Pos.
                         * @implements IPos
                         * @constructor
                         * @param {merico.proto.analysis.indicator.CcgSnapshot.IPos=} [properties] Properties to set
                         */
                        function Pos(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Pos startLine.
                         * @member {number} startLine
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startLine = 0;

                        /**
                         * Pos endLine.
                         * @member {number} endLine
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endLine = 0;

                        /**
                         * Pos startColumn.
                         * @member {number} startColumn
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startColumn = 0;

                        /**
                         * Pos endColumn.
                         * @member {number} endColumn
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endColumn = 0;

                        /**
                         * Pos startRange.
                         * @member {number} startRange
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startRange = 0;

                        /**
                         * Pos endRange.
                         * @member {number} endRange
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endRange = 0;

                        /**
                         * Decodes a Pos message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.CcgSnapshot.Pos
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.CcgSnapshot.Pos} Pos
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Pos.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CcgSnapshot.Pos();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.startLine = reader.int32();
                                    break;
                                case 2:
                                    message.endLine = reader.int32();
                                    break;
                                case 3:
                                    message.startColumn = reader.int32();
                                    break;
                                case 4:
                                    message.endColumn = reader.int32();
                                    break;
                                case 5:
                                    message.startRange = reader.int32();
                                    break;
                                case 6:
                                    message.endRange = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Pos;
                    })();

                    return CcgSnapshot;
                })();

                indicator.CcgEdit = (function() {

                    /**
                     * Properties of a CcgEdit.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICcgEdit
                     * @property {string|null} [id] CcgEdit id
                     * @property {string|null} [nodeId] CcgEdit nodeId
                     * @property {string|null} [hexsha] CcgEdit hexsha
                     * @property {merico.proto.analysis.indicator.ICcgSnapshot|null} [snapshot] CcgEdit snapshot
                     * @property {string|null} [oldSnapshotId] CcgEdit oldSnapshotId
                     * @property {boolean|null} [removed] CcgEdit removed
                     * @property {number|null} [devEq] CcgEdit devEq
                     * @property {number|null} [devRank] CcgEdit devRank
                     * @property {number|null} [addLine] CcgEdit addLine
                     * @property {number|null} [deleteLine] CcgEdit deleteLine
                     */

                    /**
                     * Constructs a new CcgEdit.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CcgEdit.
                     * @implements ICcgEdit
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICcgEdit=} [properties] Properties to set
                     */
                    function CcgEdit(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CcgEdit id.
                     * @member {string} id
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.id = "";

                    /**
                     * CcgEdit nodeId.
                     * @member {string} nodeId
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.nodeId = "";

                    /**
                     * CcgEdit hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.hexsha = "";

                    /**
                     * CcgEdit snapshot.
                     * @member {merico.proto.analysis.indicator.ICcgSnapshot|null|undefined} snapshot
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.snapshot = null;

                    /**
                     * CcgEdit oldSnapshotId.
                     * @member {string} oldSnapshotId
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.oldSnapshotId = "";

                    /**
                     * CcgEdit removed.
                     * @member {boolean} removed
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.removed = false;

                    /**
                     * CcgEdit devEq.
                     * @member {number} devEq
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.devEq = 0;

                    /**
                     * CcgEdit devRank.
                     * @member {number} devRank
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.devRank = 0;

                    /**
                     * CcgEdit addLine.
                     * @member {number} addLine
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.addLine = 0;

                    /**
                     * CcgEdit deleteLine.
                     * @member {number} deleteLine
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @instance
                     */
                    CcgEdit.prototype.deleteLine = 0;

                    /**
                     * Decodes a CcgEdit message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CcgEdit
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CcgEdit} CcgEdit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CcgEdit.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CcgEdit();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.nodeId = reader.string();
                                break;
                            case 3:
                                message.hexsha = reader.string();
                                break;
                            case 4:
                                message.snapshot = $root.merico.proto.analysis.indicator.CcgSnapshot.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.oldSnapshotId = reader.string();
                                break;
                            case 6:
                                message.removed = reader.bool();
                                break;
                            case 7:
                                message.devEq = reader.int32();
                                break;
                            case 8:
                                message.devRank = reader.float();
                                break;
                            case 9:
                                message.addLine = reader.int32();
                                break;
                            case 10:
                                message.deleteLine = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CcgEdit;
                })();

                indicator.CcgNode = (function() {

                    /**
                     * Properties of a CcgNode.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICcgNode
                     * @property {string|null} [id] CcgNode id
                     * @property {string|null} [latestEditId] CcgNode latestEditId
                     * @property {string|null} [addedByHexsha] CcgNode addedByHexsha
                     * @property {string|null} [removedByHexsha] CcgNode removedByHexsha
                     * @property {number|null} [inDegree] CcgNode inDegree
                     * @property {number|null} [outDegree] CcgNode outDegree
                     */

                    /**
                     * Constructs a new CcgNode.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CcgNode.
                     * @implements ICcgNode
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICcgNode=} [properties] Properties to set
                     */
                    function CcgNode(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CcgNode id.
                     * @member {string} id
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.id = "";

                    /**
                     * CcgNode latestEditId.
                     * @member {string} latestEditId
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.latestEditId = "";

                    /**
                     * CcgNode addedByHexsha.
                     * @member {string} addedByHexsha
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.addedByHexsha = "";

                    /**
                     * CcgNode removedByHexsha.
                     * @member {string} removedByHexsha
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.removedByHexsha = "";

                    /**
                     * CcgNode inDegree.
                     * @member {number} inDegree
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.inDegree = 0;

                    /**
                     * CcgNode outDegree.
                     * @member {number} outDegree
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @instance
                     */
                    CcgNode.prototype.outDegree = 0;

                    /**
                     * Decodes a CcgNode message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CcgNode
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CcgNode} CcgNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CcgNode.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CcgNode();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.latestEditId = reader.string();
                                break;
                            case 3:
                                message.addedByHexsha = reader.string();
                                break;
                            case 4:
                                message.removedByHexsha = reader.string();
                                break;
                            case 5:
                                message.inDegree = reader.int32();
                                break;
                            case 6:
                                message.outDegree = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CcgNode;
                })();

                indicator.CcgEdge = (function() {

                    /**
                     * Properties of a CcgEdge.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICcgEdge
                     * @property {string|null} [fromNodeId] CcgEdge fromNodeId
                     * @property {string|null} [toNodeId] CcgEdge toNodeId
                     * @property {string|null} [addedByHexsha] CcgEdge addedByHexsha
                     */

                    /**
                     * Constructs a new CcgEdge.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CcgEdge.
                     * @implements ICcgEdge
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICcgEdge=} [properties] Properties to set
                     */
                    function CcgEdge(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CcgEdge fromNodeId.
                     * @member {string} fromNodeId
                     * @memberof merico.proto.analysis.indicator.CcgEdge
                     * @instance
                     */
                    CcgEdge.prototype.fromNodeId = "";

                    /**
                     * CcgEdge toNodeId.
                     * @member {string} toNodeId
                     * @memberof merico.proto.analysis.indicator.CcgEdge
                     * @instance
                     */
                    CcgEdge.prototype.toNodeId = "";

                    /**
                     * CcgEdge addedByHexsha.
                     * @member {string} addedByHexsha
                     * @memberof merico.proto.analysis.indicator.CcgEdge
                     * @instance
                     */
                    CcgEdge.prototype.addedByHexsha = "";

                    /**
                     * Decodes a CcgEdge message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CcgEdge
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CcgEdge} CcgEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CcgEdge.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CcgEdge();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.fromNodeId = reader.string();
                                break;
                            case 2:
                                message.toNodeId = reader.string();
                                break;
                            case 3:
                                message.addedByHexsha = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CcgEdge;
                })();

                indicator.Ccg = (function() {

                    /**
                     * Properties of a Ccg.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICcg
                     * @property {number|Long|null} [nodeCount] Ccg nodeCount
                     * @property {number|Long|null} [edgeCount] Ccg edgeCount
                     * @property {number|Long|null} [editCount] Ccg editCount
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [nodes] Ccg nodes
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [edges] Ccg edges
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [edits] Ccg edits
                     */

                    /**
                     * Constructs a new Ccg.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a Ccg.
                     * @implements ICcg
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICcg=} [properties] Properties to set
                     */
                    function Ccg(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Ccg nodeCount.
                     * @member {number|Long} nodeCount
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.nodeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Ccg edgeCount.
                     * @member {number|Long} edgeCount
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.edgeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Ccg editCount.
                     * @member {number|Long} editCount
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.editCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Ccg nodes.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} nodes
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.nodes = null;

                    /**
                     * Ccg edges.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} edges
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.edges = null;

                    /**
                     * Ccg edits.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} edits
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @instance
                     */
                    Ccg.prototype.edits = null;

                    /**
                     * Decodes a Ccg message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Ccg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Ccg} Ccg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Ccg.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Ccg();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nodeCount = reader.int64();
                                break;
                            case 2:
                                message.edgeCount = reader.int64();
                                break;
                            case 3:
                                message.editCount = reader.int64();
                                break;
                            case 4:
                                message.nodes = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.edges = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.edits = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Ccg;
                })();

                indicator.CagSnapshot = (function() {

                    /**
                     * Properties of a CagSnapshot.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICagSnapshot
                     * @property {string|null} [id] CagSnapshot id
                     * @property {string|null} [filePath] CagSnapshot filePath
                     * @property {string|null} [name] CagSnapshot name
                     * @property {string|null} [parameters] CagSnapshot parameters
                     * @property {string|null} [returns] CagSnapshot returns
                     * @property {string|null} [encFuncName] CagSnapshot encFuncName
                     * @property {merico.proto.analysis.indicator.CagSnapshot.IPos|null} [pos] CagSnapshot pos
                     * @property {string|null} [codeHash] CagSnapshot codeHash
                     * @property {string|null} [className] CagSnapshot className
                     * @property {Array.<string>|null} [callees] CagSnapshot callees
                     * @property {number|null} [cyclomaticComplexity] CagSnapshot cyclomaticComplexity
                     */

                    /**
                     * Constructs a new CagSnapshot.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CagSnapshot.
                     * @implements ICagSnapshot
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICagSnapshot=} [properties] Properties to set
                     */
                    function CagSnapshot(properties) {
                        this.callees = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CagSnapshot id.
                     * @member {string} id
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.id = "";

                    /**
                     * CagSnapshot filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.filePath = "";

                    /**
                     * CagSnapshot name.
                     * @member {string} name
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.name = "";

                    /**
                     * CagSnapshot parameters.
                     * @member {string} parameters
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.parameters = "";

                    /**
                     * CagSnapshot returns.
                     * @member {string} returns
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.returns = "";

                    /**
                     * CagSnapshot encFuncName.
                     * @member {string} encFuncName
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.encFuncName = "";

                    /**
                     * CagSnapshot pos.
                     * @member {merico.proto.analysis.indicator.CagSnapshot.IPos|null|undefined} pos
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.pos = null;

                    /**
                     * CagSnapshot codeHash.
                     * @member {string} codeHash
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.codeHash = "";

                    /**
                     * CagSnapshot className.
                     * @member {string} className
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.className = "";

                    /**
                     * CagSnapshot callees.
                     * @member {Array.<string>} callees
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.callees = $util.emptyArray;

                    /**
                     * CagSnapshot cyclomaticComplexity.
                     * @member {number} cyclomaticComplexity
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @instance
                     */
                    CagSnapshot.prototype.cyclomaticComplexity = 0;

                    /**
                     * Decodes a CagSnapshot message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CagSnapshot
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CagSnapshot} CagSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CagSnapshot.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CagSnapshot();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.filePath = reader.string();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.parameters = reader.string();
                                break;
                            case 5:
                                message.returns = reader.string();
                                break;
                            case 6:
                                message.encFuncName = reader.string();
                                break;
                            case 7:
                                message.pos = $root.merico.proto.analysis.indicator.CagSnapshot.Pos.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.codeHash = reader.string();
                                break;
                            case 9:
                                message.className = reader.string();
                                break;
                            case 10:
                                if (!(message.callees && message.callees.length))
                                    message.callees = [];
                                message.callees.push(reader.string());
                                break;
                            case 11:
                                message.cyclomaticComplexity = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    CagSnapshot.Pos = (function() {

                        /**
                         * Properties of a Pos.
                         * @memberof merico.proto.analysis.indicator.CagSnapshot
                         * @interface IPos
                         * @property {number|null} [startLine] Pos startLine
                         * @property {number|null} [endLine] Pos endLine
                         * @property {number|null} [startColumn] Pos startColumn
                         * @property {number|null} [endColumn] Pos endColumn
                         * @property {number|null} [startRange] Pos startRange
                         * @property {number|null} [endRange] Pos endRange
                         */

                        /**
                         * Constructs a new Pos.
                         * @memberof merico.proto.analysis.indicator.CagSnapshot
                         * @classdesc Represents a Pos.
                         * @implements IPos
                         * @constructor
                         * @param {merico.proto.analysis.indicator.CagSnapshot.IPos=} [properties] Properties to set
                         */
                        function Pos(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Pos startLine.
                         * @member {number} startLine
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startLine = 0;

                        /**
                         * Pos endLine.
                         * @member {number} endLine
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endLine = 0;

                        /**
                         * Pos startColumn.
                         * @member {number} startColumn
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startColumn = 0;

                        /**
                         * Pos endColumn.
                         * @member {number} endColumn
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endColumn = 0;

                        /**
                         * Pos startRange.
                         * @member {number} startRange
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.startRange = 0;

                        /**
                         * Pos endRange.
                         * @member {number} endRange
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @instance
                         */
                        Pos.prototype.endRange = 0;

                        /**
                         * Decodes a Pos message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.CagSnapshot.Pos
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.CagSnapshot.Pos} Pos
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Pos.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CagSnapshot.Pos();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.startLine = reader.int32();
                                    break;
                                case 2:
                                    message.endLine = reader.int32();
                                    break;
                                case 3:
                                    message.startColumn = reader.int32();
                                    break;
                                case 4:
                                    message.endColumn = reader.int32();
                                    break;
                                case 5:
                                    message.startRange = reader.int32();
                                    break;
                                case 6:
                                    message.endRange = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Pos;
                    })();

                    return CagSnapshot;
                })();

                indicator.CagNode = (function() {

                    /**
                     * Properties of a CagNode.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICagNode
                     * @property {string|null} [id] CagNode id
                     * @property {merico.proto.analysis.indicator.ICagSnapshot|null} [snapshot] CagNode snapshot
                     * @property {string|null} [latestHexsha] CagNode latestHexsha
                     * @property {string|null} [earliestHexsha] CagNode earliestHexsha
                     * @property {string|null} [frequentHexsha] CagNode frequentHexsha
                     * @property {number|null} [inDegree] CagNode inDegree
                     * @property {number|null} [outDegree] CagNode outDegree
                     * @property {string|null} [email] CagNode email
                     */

                    /**
                     * Constructs a new CagNode.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CagNode.
                     * @implements ICagNode
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICagNode=} [properties] Properties to set
                     */
                    function CagNode(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CagNode id.
                     * @member {string} id
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.id = "";

                    /**
                     * CagNode snapshot.
                     * @member {merico.proto.analysis.indicator.ICagSnapshot|null|undefined} snapshot
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.snapshot = null;

                    /**
                     * CagNode latestHexsha.
                     * @member {string} latestHexsha
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.latestHexsha = "";

                    /**
                     * CagNode earliestHexsha.
                     * @member {string} earliestHexsha
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.earliestHexsha = "";

                    /**
                     * CagNode frequentHexsha.
                     * @member {string} frequentHexsha
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.frequentHexsha = "";

                    /**
                     * CagNode inDegree.
                     * @member {number} inDegree
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.inDegree = 0;

                    /**
                     * CagNode outDegree.
                     * @member {number} outDegree
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.outDegree = 0;

                    /**
                     * CagNode email.
                     * @member {string} email
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @instance
                     */
                    CagNode.prototype.email = "";

                    /**
                     * Decodes a CagNode message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CagNode
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CagNode} CagNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CagNode.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CagNode();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.snapshot = $root.merico.proto.analysis.indicator.CagSnapshot.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.latestHexsha = reader.string();
                                break;
                            case 4:
                                message.earliestHexsha = reader.string();
                                break;
                            case 5:
                                message.frequentHexsha = reader.string();
                                break;
                            case 6:
                                message.inDegree = reader.int32();
                                break;
                            case 7:
                                message.outDegree = reader.int32();
                                break;
                            case 8:
                                message.email = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CagNode;
                })();

                indicator.CagEdge = (function() {

                    /**
                     * Properties of a CagEdge.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICagEdge
                     * @property {string|null} [fromNodeId] CagEdge fromNodeId
                     * @property {string|null} [toNodeId] CagEdge toNodeId
                     */

                    /**
                     * Constructs a new CagEdge.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CagEdge.
                     * @implements ICagEdge
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICagEdge=} [properties] Properties to set
                     */
                    function CagEdge(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CagEdge fromNodeId.
                     * @member {string} fromNodeId
                     * @memberof merico.proto.analysis.indicator.CagEdge
                     * @instance
                     */
                    CagEdge.prototype.fromNodeId = "";

                    /**
                     * CagEdge toNodeId.
                     * @member {string} toNodeId
                     * @memberof merico.proto.analysis.indicator.CagEdge
                     * @instance
                     */
                    CagEdge.prototype.toNodeId = "";

                    /**
                     * Decodes a CagEdge message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CagEdge
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CagEdge} CagEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CagEdge.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CagEdge();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.fromNodeId = reader.string();
                                break;
                            case 2:
                                message.toNodeId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CagEdge;
                })();

                indicator.Cag = (function() {

                    /**
                     * Properties of a Cag.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICag
                     * @property {number|Long|null} [nodeCount] Cag nodeCount
                     * @property {number|Long|null} [edgeCount] Cag edgeCount
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [nodes] Cag nodes
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [edges] Cag edges
                     */

                    /**
                     * Constructs a new Cag.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a Cag.
                     * @implements ICag
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICag=} [properties] Properties to set
                     */
                    function Cag(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Cag nodeCount.
                     * @member {number|Long} nodeCount
                     * @memberof merico.proto.analysis.indicator.Cag
                     * @instance
                     */
                    Cag.prototype.nodeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Cag edgeCount.
                     * @member {number|Long} edgeCount
                     * @memberof merico.proto.analysis.indicator.Cag
                     * @instance
                     */
                    Cag.prototype.edgeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Cag nodes.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} nodes
                     * @memberof merico.proto.analysis.indicator.Cag
                     * @instance
                     */
                    Cag.prototype.nodes = null;

                    /**
                     * Cag edges.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} edges
                     * @memberof merico.proto.analysis.indicator.Cag
                     * @instance
                     */
                    Cag.prototype.edges = null;

                    /**
                     * Decodes a Cag message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Cag
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Cag} Cag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Cag.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Cag();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nodeCount = reader.int64();
                                break;
                            case 2:
                                message.edgeCount = reader.int64();
                                break;
                            case 4:
                                message.nodes = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.edges = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Cag;
                })();

                indicator.ContributorImpact = (function() {

                    /**
                     * Properties of a ContributorImpact.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IContributorImpact
                     * @property {string|null} [email] ContributorImpact email
                     * @property {number|null} [funcCount] ContributorImpact funcCount
                     * @property {Array.<string>|null} [funcIds] ContributorImpact funcIds
                     */

                    /**
                     * Constructs a new ContributorImpact.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a ContributorImpact.
                     * @implements IContributorImpact
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IContributorImpact=} [properties] Properties to set
                     */
                    function ContributorImpact(properties) {
                        this.funcIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ContributorImpact email.
                     * @member {string} email
                     * @memberof merico.proto.analysis.indicator.ContributorImpact
                     * @instance
                     */
                    ContributorImpact.prototype.email = "";

                    /**
                     * ContributorImpact funcCount.
                     * @member {number} funcCount
                     * @memberof merico.proto.analysis.indicator.ContributorImpact
                     * @instance
                     */
                    ContributorImpact.prototype.funcCount = 0;

                    /**
                     * ContributorImpact funcIds.
                     * @member {Array.<string>} funcIds
                     * @memberof merico.proto.analysis.indicator.ContributorImpact
                     * @instance
                     */
                    ContributorImpact.prototype.funcIds = $util.emptyArray;

                    /**
                     * Decodes a ContributorImpact message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.ContributorImpact
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.ContributorImpact} ContributorImpact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ContributorImpact.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.ContributorImpact();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.email = reader.string();
                                break;
                            case 2:
                                message.funcCount = reader.int32();
                                break;
                            case 3:
                                if (!(message.funcIds && message.funcIds.length))
                                    message.funcIds = [];
                                message.funcIds.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return ContributorImpact;
                })();

                indicator.PackageDependency = (function() {

                    /**
                     * Properties of a PackageDependency.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IPackageDependency
                     * @property {string|null} [name] PackageDependency name
                     * @property {string|null} [version] PackageDependency version
                     * @property {string|null} [source] PackageDependency source
                     */

                    /**
                     * Constructs a new PackageDependency.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a PackageDependency.
                     * @implements IPackageDependency
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IPackageDependency=} [properties] Properties to set
                     */
                    function PackageDependency(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PackageDependency name.
                     * @member {string} name
                     * @memberof merico.proto.analysis.indicator.PackageDependency
                     * @instance
                     */
                    PackageDependency.prototype.name = "";

                    /**
                     * PackageDependency version.
                     * @member {string} version
                     * @memberof merico.proto.analysis.indicator.PackageDependency
                     * @instance
                     */
                    PackageDependency.prototype.version = "";

                    /**
                     * PackageDependency source.
                     * @member {string} source
                     * @memberof merico.proto.analysis.indicator.PackageDependency
                     * @instance
                     */
                    PackageDependency.prototype.source = "";

                    /**
                     * Decodes a PackageDependency message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.PackageDependency
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.PackageDependency} PackageDependency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PackageDependency.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.PackageDependency();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.version = reader.string();
                                break;
                            case 3:
                                message.source = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return PackageDependency;
                })();

                indicator.FileTopic = (function() {

                    /**
                     * Properties of a FileTopic.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IFileTopic
                     * @property {string|null} [filePath] FileTopic filePath
                     * @property {Object.<string,number>|null} [topics] FileTopic topics
                     */

                    /**
                     * Constructs a new FileTopic.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a FileTopic.
                     * @implements IFileTopic
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IFileTopic=} [properties] Properties to set
                     */
                    function FileTopic(properties) {
                        this.topics = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FileTopic filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.FileTopic
                     * @instance
                     */
                    FileTopic.prototype.filePath = "";

                    /**
                     * FileTopic topics.
                     * @member {Object.<string,number>} topics
                     * @memberof merico.proto.analysis.indicator.FileTopic
                     * @instance
                     */
                    FileTopic.prototype.topics = $util.emptyObject;

                    /**
                     * Decodes a FileTopic message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.FileTopic
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.FileTopic} FileTopic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FileTopic.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.FileTopic(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.filePath = reader.string();
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.topics === $util.emptyObject)
                                    message.topics = {};
                                key = reader.string();
                                reader.pos++;
                                message.topics[key] = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return FileTopic;
                })();

                indicator.FileContribution = (function() {

                    /**
                     * Properties of a FileContribution.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IFileContribution
                     * @property {string|null} [filePath] FileContribution filePath
                     * @property {Object.<string,number>|null} [contributions] FileContribution contributions
                     */

                    /**
                     * Constructs a new FileContribution.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a FileContribution.
                     * @implements IFileContribution
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IFileContribution=} [properties] Properties to set
                     */
                    function FileContribution(properties) {
                        this.contributions = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FileContribution filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.FileContribution
                     * @instance
                     */
                    FileContribution.prototype.filePath = "";

                    /**
                     * FileContribution contributions.
                     * @member {Object.<string,number>} contributions
                     * @memberof merico.proto.analysis.indicator.FileContribution
                     * @instance
                     */
                    FileContribution.prototype.contributions = $util.emptyObject;

                    /**
                     * Decodes a FileContribution message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.FileContribution
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.FileContribution} FileContribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FileContribution.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.FileContribution(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.filePath = reader.string();
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.contributions === $util.emptyObject)
                                    message.contributions = {};
                                key = reader.string();
                                reader.pos++;
                                message.contributions[key] = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return FileContribution;
                })();

                indicator.ManpowerAllocation = (function() {

                    /**
                     * Properties of a ManpowerAllocation.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IManpowerAllocation
                     * @property {string|null} [topic] ManpowerAllocation topic
                     * @property {Object.<string,number>|null} [allocations] ManpowerAllocation allocations
                     */

                    /**
                     * Constructs a new ManpowerAllocation.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a ManpowerAllocation.
                     * @implements IManpowerAllocation
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IManpowerAllocation=} [properties] Properties to set
                     */
                    function ManpowerAllocation(properties) {
                        this.allocations = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ManpowerAllocation topic.
                     * @member {string} topic
                     * @memberof merico.proto.analysis.indicator.ManpowerAllocation
                     * @instance
                     */
                    ManpowerAllocation.prototype.topic = "";

                    /**
                     * ManpowerAllocation allocations.
                     * @member {Object.<string,number>} allocations
                     * @memberof merico.proto.analysis.indicator.ManpowerAllocation
                     * @instance
                     */
                    ManpowerAllocation.prototype.allocations = $util.emptyObject;

                    /**
                     * Decodes a ManpowerAllocation message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.ManpowerAllocation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.ManpowerAllocation} ManpowerAllocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ManpowerAllocation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.ManpowerAllocation(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.topic = reader.string();
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.allocations === $util.emptyObject)
                                    message.allocations = {};
                                key = reader.string();
                                reader.pos++;
                                message.allocations[key] = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return ManpowerAllocation;
                })();

                indicator.TopicModeling = (function() {

                    /**
                     * Properties of a TopicModeling.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ITopicModeling
                     * @property {Array.<merico.proto.analysis.indicator.IFileTopic>|null} [fileTopics] TopicModeling fileTopics
                     * @property {Array.<merico.proto.analysis.indicator.IFileContribution>|null} [fileContributions] TopicModeling fileContributions
                     * @property {Array.<merico.proto.analysis.indicator.IManpowerAllocation>|null} [manpowerAllocations] TopicModeling manpowerAllocations
                     */

                    /**
                     * Constructs a new TopicModeling.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a TopicModeling.
                     * @implements ITopicModeling
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ITopicModeling=} [properties] Properties to set
                     */
                    function TopicModeling(properties) {
                        this.fileTopics = [];
                        this.fileContributions = [];
                        this.manpowerAllocations = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TopicModeling fileTopics.
                     * @member {Array.<merico.proto.analysis.indicator.IFileTopic>} fileTopics
                     * @memberof merico.proto.analysis.indicator.TopicModeling
                     * @instance
                     */
                    TopicModeling.prototype.fileTopics = $util.emptyArray;

                    /**
                     * TopicModeling fileContributions.
                     * @member {Array.<merico.proto.analysis.indicator.IFileContribution>} fileContributions
                     * @memberof merico.proto.analysis.indicator.TopicModeling
                     * @instance
                     */
                    TopicModeling.prototype.fileContributions = $util.emptyArray;

                    /**
                     * TopicModeling manpowerAllocations.
                     * @member {Array.<merico.proto.analysis.indicator.IManpowerAllocation>} manpowerAllocations
                     * @memberof merico.proto.analysis.indicator.TopicModeling
                     * @instance
                     */
                    TopicModeling.prototype.manpowerAllocations = $util.emptyArray;

                    /**
                     * Decodes a TopicModeling message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.TopicModeling
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.TopicModeling} TopicModeling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TopicModeling.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TopicModeling();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 161:
                                if (!(message.fileTopics && message.fileTopics.length))
                                    message.fileTopics = [];
                                message.fileTopics.push($root.merico.proto.analysis.indicator.FileTopic.decode(reader, reader.uint32()));
                                break;
                            case 162:
                                if (!(message.fileContributions && message.fileContributions.length))
                                    message.fileContributions = [];
                                message.fileContributions.push($root.merico.proto.analysis.indicator.FileContribution.decode(reader, reader.uint32()));
                                break;
                            case 163:
                                if (!(message.manpowerAllocations && message.manpowerAllocations.length))
                                    message.manpowerAllocations = [];
                                message.manpowerAllocations.push($root.merico.proto.analysis.indicator.ManpowerAllocation.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return TopicModeling;
                })();

                indicator.IgnoredRecord = (function() {

                    /**
                     * Properties of an IgnoredRecord.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IIgnoredRecord
                     * @property {string|null} [filePath] IgnoredRecord filePath
                     * @property {string|null} [hexsha] IgnoredRecord hexsha
                     * @property {string|null} [reason] IgnoredRecord reason
                     */

                    /**
                     * Constructs a new IgnoredRecord.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents an IgnoredRecord.
                     * @implements IIgnoredRecord
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IIgnoredRecord=} [properties] Properties to set
                     */
                    function IgnoredRecord(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * IgnoredRecord filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.IgnoredRecord
                     * @instance
                     */
                    IgnoredRecord.prototype.filePath = "";

                    /**
                     * IgnoredRecord hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.IgnoredRecord
                     * @instance
                     */
                    IgnoredRecord.prototype.hexsha = "";

                    /**
                     * IgnoredRecord reason.
                     * @member {string} reason
                     * @memberof merico.proto.analysis.indicator.IgnoredRecord
                     * @instance
                     */
                    IgnoredRecord.prototype.reason = "";

                    /**
                     * Decodes an IgnoredRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.IgnoredRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.IgnoredRecord} IgnoredRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IgnoredRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.IgnoredRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.filePath = reader.string();
                                break;
                            case 2:
                                message.hexsha = reader.string();
                                break;
                            case 3:
                                message.reason = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return IgnoredRecord;
                })();

                indicator.DocCoverage = (function() {

                    /**
                     * Properties of a DocCoverage.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IDocCoverage
                     * @property {number|null} [score] DocCoverage score
                     * @property {Array.<merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc>|null} [docCoverageFuncs] DocCoverage docCoverageFuncs
                     */

                    /**
                     * Constructs a new DocCoverage.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a DocCoverage.
                     * @implements IDocCoverage
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IDocCoverage=} [properties] Properties to set
                     */
                    function DocCoverage(properties) {
                        this.docCoverageFuncs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DocCoverage score.
                     * @member {number} score
                     * @memberof merico.proto.analysis.indicator.DocCoverage
                     * @instance
                     */
                    DocCoverage.prototype.score = 0;

                    /**
                     * DocCoverage docCoverageFuncs.
                     * @member {Array.<merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc>} docCoverageFuncs
                     * @memberof merico.proto.analysis.indicator.DocCoverage
                     * @instance
                     */
                    DocCoverage.prototype.docCoverageFuncs = $util.emptyArray;

                    /**
                     * Decodes a DocCoverage message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.DocCoverage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.DocCoverage} DocCoverage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DocCoverage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.DocCoverage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.score = reader.float();
                                break;
                            case 2:
                                if (!(message.docCoverageFuncs && message.docCoverageFuncs.length))
                                    message.docCoverageFuncs = [];
                                message.docCoverageFuncs.push($root.merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DocCoverage.DocCoverageFunc = (function() {

                        /**
                         * Properties of a DocCoverageFunc.
                         * @memberof merico.proto.analysis.indicator.DocCoverage
                         * @interface IDocCoverageFunc
                         * @property {string|null} [funcId] DocCoverageFunc funcId
                         * @property {string|null} [email] DocCoverageFunc email
                         * @property {number|null} [commentCount] DocCoverageFunc commentCount
                         * @property {string|null} [latestHexsha] DocCoverageFunc latestHexsha
                         * @property {string|null} [earliestHexsha] DocCoverageFunc earliestHexsha
                         */

                        /**
                         * Constructs a new DocCoverageFunc.
                         * @memberof merico.proto.analysis.indicator.DocCoverage
                         * @classdesc Represents a DocCoverageFunc.
                         * @implements IDocCoverageFunc
                         * @constructor
                         * @param {merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc=} [properties] Properties to set
                         */
                        function DocCoverageFunc(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DocCoverageFunc funcId.
                         * @member {string} funcId
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @instance
                         */
                        DocCoverageFunc.prototype.funcId = "";

                        /**
                         * DocCoverageFunc email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @instance
                         */
                        DocCoverageFunc.prototype.email = "";

                        /**
                         * DocCoverageFunc commentCount.
                         * @member {number} commentCount
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @instance
                         */
                        DocCoverageFunc.prototype.commentCount = 0;

                        /**
                         * DocCoverageFunc latestHexsha.
                         * @member {string} latestHexsha
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @instance
                         */
                        DocCoverageFunc.prototype.latestHexsha = "";

                        /**
                         * DocCoverageFunc earliestHexsha.
                         * @member {string} earliestHexsha
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @instance
                         */
                        DocCoverageFunc.prototype.earliestHexsha = "";

                        /**
                         * Decodes a DocCoverageFunc message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc} DocCoverageFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DocCoverageFunc.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.funcId = reader.string();
                                    break;
                                case 2:
                                    message.email = reader.string();
                                    break;
                                case 3:
                                    message.commentCount = reader.int32();
                                    break;
                                case 4:
                                    message.latestHexsha = reader.string();
                                    break;
                                case 5:
                                    message.earliestHexsha = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return DocCoverageFunc;
                    })();

                    return DocCoverage;
                })();

                indicator.Dryness = (function() {

                    /**
                     * Properties of a Dryness.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IDryness
                     * @property {number|null} [score] Dryness score
                     * @property {Array.<merico.proto.analysis.indicator.Dryness.IDrynessGroup>|null} [drynessGroups] Dryness drynessGroups
                     */

                    /**
                     * Constructs a new Dryness.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a Dryness.
                     * @implements IDryness
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IDryness=} [properties] Properties to set
                     */
                    function Dryness(properties) {
                        this.drynessGroups = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Dryness score.
                     * @member {number} score
                     * @memberof merico.proto.analysis.indicator.Dryness
                     * @instance
                     */
                    Dryness.prototype.score = 0;

                    /**
                     * Dryness drynessGroups.
                     * @member {Array.<merico.proto.analysis.indicator.Dryness.IDrynessGroup>} drynessGroups
                     * @memberof merico.proto.analysis.indicator.Dryness
                     * @instance
                     */
                    Dryness.prototype.drynessGroups = $util.emptyArray;

                    /**
                     * Decodes a Dryness message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Dryness
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Dryness} Dryness
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Dryness.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Dryness();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.score = reader.float();
                                break;
                            case 2:
                                if (!(message.drynessGroups && message.drynessGroups.length))
                                    message.drynessGroups = [];
                                message.drynessGroups.push($root.merico.proto.analysis.indicator.Dryness.DrynessGroup.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Dryness.DrynessFunc = (function() {

                        /**
                         * Properties of a DrynessFunc.
                         * @memberof merico.proto.analysis.indicator.Dryness
                         * @interface IDrynessFunc
                         * @property {string|null} [funcId] DrynessFunc funcId
                         * @property {string|null} [email] DrynessFunc email
                         * @property {string|null} [latestHexsha] DrynessFunc latestHexsha
                         * @property {string|null} [earliestHexsha] DrynessFunc earliestHexsha
                         */

                        /**
                         * Constructs a new DrynessFunc.
                         * @memberof merico.proto.analysis.indicator.Dryness
                         * @classdesc Represents a DrynessFunc.
                         * @implements IDrynessFunc
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Dryness.IDrynessFunc=} [properties] Properties to set
                         */
                        function DrynessFunc(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DrynessFunc funcId.
                         * @member {string} funcId
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessFunc
                         * @instance
                         */
                        DrynessFunc.prototype.funcId = "";

                        /**
                         * DrynessFunc email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessFunc
                         * @instance
                         */
                        DrynessFunc.prototype.email = "";

                        /**
                         * DrynessFunc latestHexsha.
                         * @member {string} latestHexsha
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessFunc
                         * @instance
                         */
                        DrynessFunc.prototype.latestHexsha = "";

                        /**
                         * DrynessFunc earliestHexsha.
                         * @member {string} earliestHexsha
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessFunc
                         * @instance
                         */
                        DrynessFunc.prototype.earliestHexsha = "";

                        /**
                         * Decodes a DrynessFunc message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessFunc
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Dryness.DrynessFunc} DrynessFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DrynessFunc.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Dryness.DrynessFunc();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.funcId = reader.string();
                                    break;
                                case 2:
                                    message.email = reader.string();
                                    break;
                                case 3:
                                    message.latestHexsha = reader.string();
                                    break;
                                case 4:
                                    message.earliestHexsha = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return DrynessFunc;
                    })();

                    Dryness.DrynessGroup = (function() {

                        /**
                         * Properties of a DrynessGroup.
                         * @memberof merico.proto.analysis.indicator.Dryness
                         * @interface IDrynessGroup
                         * @property {Array.<merico.proto.analysis.indicator.Dryness.IDrynessFunc>|null} [drynessFuncs] DrynessGroup drynessFuncs
                         */

                        /**
                         * Constructs a new DrynessGroup.
                         * @memberof merico.proto.analysis.indicator.Dryness
                         * @classdesc Represents a DrynessGroup.
                         * @implements IDrynessGroup
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Dryness.IDrynessGroup=} [properties] Properties to set
                         */
                        function DrynessGroup(properties) {
                            this.drynessFuncs = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DrynessGroup drynessFuncs.
                         * @member {Array.<merico.proto.analysis.indicator.Dryness.IDrynessFunc>} drynessFuncs
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessGroup
                         * @instance
                         */
                        DrynessGroup.prototype.drynessFuncs = $util.emptyArray;

                        /**
                         * Decodes a DrynessGroup message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Dryness.DrynessGroup
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Dryness.DrynessGroup} DrynessGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DrynessGroup.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Dryness.DrynessGroup();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.drynessFuncs && message.drynessFuncs.length))
                                        message.drynessFuncs = [];
                                    message.drynessFuncs.push($root.merico.proto.analysis.indicator.Dryness.DrynessFunc.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return DrynessGroup;
                    })();

                    return Dryness;
                })();

                indicator.StaticTestCoverage = (function() {

                    /**
                     * Properties of a StaticTestCoverage.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IStaticTestCoverage
                     * @property {number|null} [score] StaticTestCoverage score
                     * @property {Array.<merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc>|null} [coveredFuncs] StaticTestCoverage coveredFuncs
                     * @property {Array.<merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc>|null} [uncoveredFuncs] StaticTestCoverage uncoveredFuncs
                     */

                    /**
                     * Constructs a new StaticTestCoverage.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a StaticTestCoverage.
                     * @implements IStaticTestCoverage
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IStaticTestCoverage=} [properties] Properties to set
                     */
                    function StaticTestCoverage(properties) {
                        this.coveredFuncs = [];
                        this.uncoveredFuncs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StaticTestCoverage score.
                     * @member {number} score
                     * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                     * @instance
                     */
                    StaticTestCoverage.prototype.score = 0;

                    /**
                     * StaticTestCoverage coveredFuncs.
                     * @member {Array.<merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc>} coveredFuncs
                     * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                     * @instance
                     */
                    StaticTestCoverage.prototype.coveredFuncs = $util.emptyArray;

                    /**
                     * StaticTestCoverage uncoveredFuncs.
                     * @member {Array.<merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc>} uncoveredFuncs
                     * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                     * @instance
                     */
                    StaticTestCoverage.prototype.uncoveredFuncs = $util.emptyArray;

                    /**
                     * Decodes a StaticTestCoverage message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.StaticTestCoverage} StaticTestCoverage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StaticTestCoverage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.StaticTestCoverage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.score = reader.float();
                                break;
                            case 2:
                                if (!(message.coveredFuncs && message.coveredFuncs.length))
                                    message.coveredFuncs = [];
                                message.coveredFuncs.push($root.merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                if (!(message.uncoveredFuncs && message.uncoveredFuncs.length))
                                    message.uncoveredFuncs = [];
                                message.uncoveredFuncs.push($root.merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    StaticTestCoverage.StaticTestCoverageFunc = (function() {

                        /**
                         * Properties of a StaticTestCoverageFunc.
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                         * @interface IStaticTestCoverageFunc
                         * @property {string|null} [funcId] StaticTestCoverageFunc funcId
                         * @property {string|null} [email] StaticTestCoverageFunc email
                         * @property {string|null} [latestHexsha] StaticTestCoverageFunc latestHexsha
                         * @property {string|null} [earliestHexsha] StaticTestCoverageFunc earliestHexsha
                         */

                        /**
                         * Constructs a new StaticTestCoverageFunc.
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage
                         * @classdesc Represents a StaticTestCoverageFunc.
                         * @implements IStaticTestCoverageFunc
                         * @constructor
                         * @param {merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc=} [properties] Properties to set
                         */
                        function StaticTestCoverageFunc(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * StaticTestCoverageFunc funcId.
                         * @member {string} funcId
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc
                         * @instance
                         */
                        StaticTestCoverageFunc.prototype.funcId = "";

                        /**
                         * StaticTestCoverageFunc email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc
                         * @instance
                         */
                        StaticTestCoverageFunc.prototype.email = "";

                        /**
                         * StaticTestCoverageFunc latestHexsha.
                         * @member {string} latestHexsha
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc
                         * @instance
                         */
                        StaticTestCoverageFunc.prototype.latestHexsha = "";

                        /**
                         * StaticTestCoverageFunc earliestHexsha.
                         * @member {string} earliestHexsha
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc
                         * @instance
                         */
                        StaticTestCoverageFunc.prototype.earliestHexsha = "";

                        /**
                         * Decodes a StaticTestCoverageFunc message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc} StaticTestCoverageFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StaticTestCoverageFunc.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.funcId = reader.string();
                                    break;
                                case 2:
                                    message.email = reader.string();
                                    break;
                                case 3:
                                    message.latestHexsha = reader.string();
                                    break;
                                case 4:
                                    message.earliestHexsha = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return StaticTestCoverageFunc;
                    })();

                    return StaticTestCoverage;
                })();

                indicator.CodeQuality = (function() {

                    /**
                     * Properties of a CodeQuality.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICodeQuality
                     * @property {boolean|null} [refreshed] CodeQuality refreshed
                     * @property {merico.proto.analysis.indicator.IStreaming|null} [issues] CodeQuality issues
                     */

                    /**
                     * Constructs a new CodeQuality.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CodeQuality.
                     * @implements ICodeQuality
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICodeQuality=} [properties] Properties to set
                     */
                    function CodeQuality(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CodeQuality refreshed.
                     * @member {boolean} refreshed
                     * @memberof merico.proto.analysis.indicator.CodeQuality
                     * @instance
                     */
                    CodeQuality.prototype.refreshed = false;

                    /**
                     * CodeQuality issues.
                     * @member {merico.proto.analysis.indicator.IStreaming|null|undefined} issues
                     * @memberof merico.proto.analysis.indicator.CodeQuality
                     * @instance
                     */
                    CodeQuality.prototype.issues = null;

                    /**
                     * Decodes a CodeQuality message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CodeQuality
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CodeQuality} CodeQuality
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CodeQuality.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CodeQuality();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.refreshed = reader.bool();
                                break;
                            case 2:
                                message.issues = $root.merico.proto.analysis.indicator.Streaming.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return CodeQuality;
                })();

                indicator.CodeQualityIssue = (function() {

                    /**
                     * Properties of a CodeQualityIssue.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICodeQualityIssue
                     * @property {string|null} [key] CodeQualityIssue key
                     * @property {string|null} [rule] CodeQualityIssue rule
                     * @property {string|null} [effort] CodeQualityIssue effort
                     * @property {string|null} [debt] CodeQualityIssue debt
                     * @property {string|null} [type] CodeQualityIssue type
                     * @property {string|null} [severity] CodeQualityIssue severity
                     * @property {Array.<merico.proto.analysis.indicator.CodeQualityIssue.ITextRange>|null} [textRanges] CodeQualityIssue textRanges
                     * @property {string|null} [filePath] CodeQualityIssue filePath
                     * @property {string|null} [email] CodeQualityIssue email
                     * @property {string|null} [hexsha] CodeQualityIssue hexsha
                     */

                    /**
                     * Constructs a new CodeQualityIssue.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a CodeQualityIssue.
                     * @implements ICodeQualityIssue
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICodeQualityIssue=} [properties] Properties to set
                     */
                    function CodeQualityIssue(properties) {
                        this.textRanges = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CodeQualityIssue key.
                     * @member {string} key
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.key = "";

                    /**
                     * CodeQualityIssue rule.
                     * @member {string} rule
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.rule = "";

                    /**
                     * CodeQualityIssue effort.
                     * @member {string} effort
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.effort = "";

                    /**
                     * CodeQualityIssue debt.
                     * @member {string} debt
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.debt = "";

                    /**
                     * CodeQualityIssue type.
                     * @member {string} type
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.type = "";

                    /**
                     * CodeQualityIssue severity.
                     * @member {string} severity
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.severity = "";

                    /**
                     * CodeQualityIssue textRanges.
                     * @member {Array.<merico.proto.analysis.indicator.CodeQualityIssue.ITextRange>} textRanges
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.textRanges = $util.emptyArray;

                    /**
                     * CodeQualityIssue filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.filePath = "";

                    /**
                     * CodeQualityIssue email.
                     * @member {string} email
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.email = "";

                    /**
                     * CodeQualityIssue hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @instance
                     */
                    CodeQualityIssue.prototype.hexsha = "";

                    /**
                     * Decodes a CodeQualityIssue message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.CodeQualityIssue} CodeQualityIssue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CodeQualityIssue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CodeQualityIssue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.key = reader.string();
                                break;
                            case 2:
                                message.rule = reader.string();
                                break;
                            case 3:
                                message.effort = reader.string();
                                break;
                            case 4:
                                message.debt = reader.string();
                                break;
                            case 5:
                                message.type = reader.string();
                                break;
                            case 6:
                                message.severity = reader.string();
                                break;
                            case 7:
                                if (!(message.textRanges && message.textRanges.length))
                                    message.textRanges = [];
                                message.textRanges.push($root.merico.proto.analysis.indicator.CodeQualityIssue.TextRange.decode(reader, reader.uint32()));
                                break;
                            case 8:
                                message.filePath = reader.string();
                                break;
                            case 9:
                                message.email = reader.string();
                                break;
                            case 10:
                                message.hexsha = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    CodeQualityIssue.TextRange = (function() {

                        /**
                         * Properties of a TextRange.
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                         * @interface ITextRange
                         * @property {string|null} [filePath] TextRange filePath
                         * @property {number|null} [startLine] TextRange startLine
                         * @property {number|null} [endLine] TextRange endLine
                         * @property {number|null} [startColumn] TextRange startColumn
                         * @property {number|null} [endColumn] TextRange endColumn
                         * @property {string|null} [errorMsg] TextRange errorMsg
                         */

                        /**
                         * Constructs a new TextRange.
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue
                         * @classdesc Represents a TextRange.
                         * @implements ITextRange
                         * @constructor
                         * @param {merico.proto.analysis.indicator.CodeQualityIssue.ITextRange=} [properties] Properties to set
                         */
                        function TextRange(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TextRange filePath.
                         * @member {string} filePath
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.filePath = "";

                        /**
                         * TextRange startLine.
                         * @member {number} startLine
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.startLine = 0;

                        /**
                         * TextRange endLine.
                         * @member {number} endLine
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.endLine = 0;

                        /**
                         * TextRange startColumn.
                         * @member {number} startColumn
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.startColumn = 0;

                        /**
                         * TextRange endColumn.
                         * @member {number} endColumn
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.endColumn = 0;

                        /**
                         * TextRange errorMsg.
                         * @member {string} errorMsg
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @instance
                         */
                        TextRange.prototype.errorMsg = "";

                        /**
                         * Decodes a TextRange message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.CodeQualityIssue.TextRange
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.CodeQualityIssue.TextRange} TextRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TextRange.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.CodeQualityIssue.TextRange();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.filePath = reader.string();
                                    break;
                                case 2:
                                    message.startLine = reader.int32();
                                    break;
                                case 3:
                                    message.endLine = reader.int32();
                                    break;
                                case 4:
                                    message.startColumn = reader.int32();
                                    break;
                                case 5:
                                    message.endColumn = reader.int32();
                                    break;
                                case 6:
                                    message.errorMsg = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return TextRange;
                    })();

                    return CodeQualityIssue;
                })();

                indicator.ContributorBombSweep = (function () {
                  /**
                   * Properties of a ContributorBombSweep.
                   * @memberof merico.proto.analysis.indicator.ContributorBombSweep
                   * @interface IContributorBombSweep
                   * @property {string|null} [email] ContributorBombSweep email
                   * @property {number|null} [count] ContributorBombSweep count
                   */

                  /**
                   * Constructs a new ContributorBombSweep.
                   * @memberof merico.proto.analysis.indicator
                   * @classdesc Represents a ContributorBombSweep.
                   * @implements IContributorBombSweep
                   * @constructor
                   * @param {merico.proto.analysis.indicator.ContributorBombSweep=} [properties] Properties to set
                   */
                  function ContributorBombSweep(properties) {
                    if (properties)
                      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                          this[keys[i]] = properties[keys[i]];
                  }

                  /**
                   * ContributorBombSweep email.
                   * @member {string} email
                   * @memberof merico.proto.analysis.indicator.ContributorBombSweep
                   * @instance
                   */
                  ContributorBombSweep.prototype.email = "";

                  /**
                   * ContributorBombSweep count.
                   * @member {number} count
                   * @memberof merico.proto.analysis.indicator.ContributorBombSweep
                   * @instance
                   */
                  ContributorBombSweep.prototype.count = 0;

                  /**
                   * Decodes a ContributorBombSweep message from the specified reader or buffer.
                   * @function decode
                   * @memberof merico.proto.analysis.indicator.ContributorBombSweep
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                   * @param {number} [length] Message length if known beforehand
                   * @returns {merico.proto.analysis.indicator.ContributorBombSweep} ContributorBombSweep
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  ContributorBombSweep.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) {
                      reader = $Reader.create(reader);
                    }

                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.ContributorBombSweep();

                    while (reader.pos < end) {
                      var tag = reader.uint32();
                      switch (tag >>> 3) {
                        case 1:
                          message.email = reader.string();
                          break;
                        case 2:
                          message.count = reader.int32();
                          break;
                        default:
                          reader.skipType(tag & 7);
                          break;
                      }
                    }
                    return message;
                  };
                  return ContributorBombSweep;
                })();

                indicator.TestOfTimeFunction = (function () {
                  /**
                   * Properties of a TestOfTimeFunction.
                   * @memberof merico.proto.analysis.indicator.TestOfTimeFunction
                   * @interface ITestOfTimeFunction
                   * @property {string|null} [email] TestOfTimeFunction email
                   * @property {string|null} [email] TestOfTimeFunction email
                   * @property {number|null} [rank] TestOfTimeFunction rank
                   */

                  /**
                   * Constructs a new TestOfTimeFunction.
                   * @memberof merico.proto.analysis.indicator
                   * @classdesc Represents a TestOfTimeFunction.
                   * @implements ITestOfTimeFunction
                   * @constructor
                   * @param {merico.proto.analysis.indicator.TestOfTimeFunction=} [properties] Properties to set
                   */
                  function TestOfTimeFunction(properties) {
                    if (properties)
                      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                          this[keys[i]] = properties[keys[i]];
                  }

                  /**
                   * TestOfTimeFunction email.
                   * @member {string} email
                   * @memberof merico.proto.analysis.indicator.TestOfTimeFunction
                   * @instance
                   */
                  TestOfTimeFunction.prototype.email = "";

                  /**
                   * TestOfTimeFunction node_id.
                   * @member {string} node_id
                   * @memberof merico.proto.analysis.indicator.TestOfTimeFunction
                   * @instance
                   */
                  TestOfTimeFunction.prototype.node_id = "";

                  /**
                   * TestOfTimeFunction rank.
                   * @member {number} rank
                   * @memberof merico.proto.analysis.indicator.TestOfTimeFunction
                   * @instance
                   */
                  TestOfTimeFunction.rank = 0;

                  /**
                   * Decodes a TestOfTimeFunction message from the specified reader or buffer.
                   * @function decode
                   * @memberof merico.proto.analysis.indicator.TestOfTimeFunction
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                   * @param {number} [length] Message length if known beforehand
                   * @returns {merico.proto.analysis.indicator.TestOfTimeFunction} TestOfTimeFunction
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  TestOfTimeFunction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) {
                      reader = $Reader.create(reader);
                    }

                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TestOfTimeFunction();

                    while (reader.pos < end) {
                      var tag = reader.uint32();
                      switch (tag >>> 3) {
                        case 1:
                          message.email = reader.string();
                          break;
                        case 2:
                          message.rank = reader.int32();
                          break;
                        case 3:
                            message.node_id = reader.string();
                            break;
                        default:
                          reader.skipType(tag & 7);
                          break;
                      }
                    }
                    return message;
                  };
                  return TestOfTimeFunction;
                })();

                indicator.TechTag = (function() {

                    /**
                     * Properties of a TechTag.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ITechTag
                     * @property {Array.<merico.proto.analysis.indicator.TechTag.ICommitToPackage>|null} [commitToPackages] TechTag commitToPackages
                     */

                    /**
                     * Constructs a new TechTag.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a TechTag.
                     * @implements ITechTag
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ITechTag=} [properties] Properties to set
                     */
                    function TechTag(properties) {
                        this.commitToPackages = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TechTag commitToPackages.
                     * @member {Array.<merico.proto.analysis.indicator.TechTag.ICommitToPackage>} commitToPackages
                     * @memberof merico.proto.analysis.indicator.TechTag
                     * @instance
                     */
                    TechTag.prototype.commitToPackages = $util.emptyArray;

                    /**
                     * Decodes a TechTag message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.TechTag
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.TechTag} TechTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TechTag.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TechTag();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 2:
                                if (!(message.commitToPackages && message.commitToPackages.length))
                                    message.commitToPackages = [];
                                message.commitToPackages.push($root.merico.proto.analysis.indicator.TechTag.CommitToPackage.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    TechTag.TokenToFile = (function() {

                        /**
                         * Properties of a TokenToFile.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @interface ITokenToFile
                         * @property {string|null} [token] TokenToFile token
                         * @property {string|null} [filePath] TokenToFile filePath
                         * @property {string|null} [lineCode] TokenToFile lineCode
                         */

                        /**
                         * Constructs a new TokenToFile.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @classdesc Represents a TokenToFile.
                         * @implements ITokenToFile
                         * @constructor
                         * @param {merico.proto.analysis.indicator.TechTag.ITokenToFile=} [properties] Properties to set
                         */
                        function TokenToFile(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TokenToFile token.
                         * @member {string} token
                         * @memberof merico.proto.analysis.indicator.TechTag.TokenToFile
                         * @instance
                         */
                        TokenToFile.prototype.token = "";

                        /**
                         * TokenToFile filePath.
                         * @member {string} filePath
                         * @memberof merico.proto.analysis.indicator.TechTag.TokenToFile
                         * @instance
                         */
                        TokenToFile.prototype.filePath = "";

                        /**
                         * TokenToFile lineCode.
                         * @member {string} lineCode
                         * @memberof merico.proto.analysis.indicator.TechTag.TokenToFile
                         * @instance
                         */
                        TokenToFile.prototype.lineCode = "";

                        /**
                         * Decodes a TokenToFile message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.TechTag.TokenToFile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.TechTag.TokenToFile} TokenToFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TokenToFile.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TechTag.TokenToFile();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.token = reader.string();
                                    break;
                                case 2:
                                    message.filePath = reader.string();
                                    break;
                                case 3:
                                    message.lineCode = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return TokenToFile;
                    })();

                    TechTag.PackageToToken = (function() {

                        /**
                         * Properties of a PackageToToken.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @interface IPackageToToken
                         * @property {string|null} ["package"] PackageToToken package
                         * @property {Array.<merico.proto.analysis.indicator.TechTag.ITokenToFile>|null} [tokenToFiles] PackageToToken tokenToFiles
                         */

                        /**
                         * Constructs a new PackageToToken.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @classdesc Represents a PackageToToken.
                         * @implements IPackageToToken
                         * @constructor
                         * @param {merico.proto.analysis.indicator.TechTag.IPackageToToken=} [properties] Properties to set
                         */
                        function PackageToToken(properties) {
                            this.tokenToFiles = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PackageToToken package.
                         * @member {string} package
                         * @memberof merico.proto.analysis.indicator.TechTag.PackageToToken
                         * @instance
                         */
                        PackageToToken.prototype["package"] = "";

                        /**
                         * PackageToToken tokenToFiles.
                         * @member {Array.<merico.proto.analysis.indicator.TechTag.ITokenToFile>} tokenToFiles
                         * @memberof merico.proto.analysis.indicator.TechTag.PackageToToken
                         * @instance
                         */
                        PackageToToken.prototype.tokenToFiles = $util.emptyArray;

                        /**
                         * Decodes a PackageToToken message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.TechTag.PackageToToken
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.TechTag.PackageToToken} PackageToToken
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PackageToToken.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TechTag.PackageToToken();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message["package"] = reader.string();
                                    break;
                                case 2:
                                    if (!(message.tokenToFiles && message.tokenToFiles.length))
                                        message.tokenToFiles = [];
                                    message.tokenToFiles.push($root.merico.proto.analysis.indicator.TechTag.TokenToFile.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return PackageToToken;
                    })();

                    TechTag.CommitToPackage = (function() {

                        /**
                         * Properties of a CommitToPackage.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @interface ICommitToPackage
                         * @property {string|null} [hexsha] CommitToPackage hexsha
                         * @property {Array.<merico.proto.analysis.indicator.TechTag.IPackageToToken>|null} [packageToTokens] CommitToPackage packageToTokens
                         */

                        /**
                         * Constructs a new CommitToPackage.
                         * @memberof merico.proto.analysis.indicator.TechTag
                         * @classdesc Represents a CommitToPackage.
                         * @implements ICommitToPackage
                         * @constructor
                         * @param {merico.proto.analysis.indicator.TechTag.ICommitToPackage=} [properties] Properties to set
                         */
                        function CommitToPackage(properties) {
                            this.packageToTokens = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CommitToPackage hexsha.
                         * @member {string} hexsha
                         * @memberof merico.proto.analysis.indicator.TechTag.CommitToPackage
                         * @instance
                         */
                        CommitToPackage.prototype.hexsha = "";

                        /**
                         * CommitToPackage packageToTokens.
                         * @member {Array.<merico.proto.analysis.indicator.TechTag.IPackageToToken>} packageToTokens
                         * @memberof merico.proto.analysis.indicator.TechTag.CommitToPackage
                         * @instance
                         */
                        CommitToPackage.prototype.packageToTokens = $util.emptyArray;

                        /**
                         * Decodes a CommitToPackage message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.TechTag.CommitToPackage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.TechTag.CommitToPackage} CommitToPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommitToPackage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.TechTag.CommitToPackage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.hexsha = reader.string();
                                    break;
                                case 2:
                                    if (!(message.packageToTokens && message.packageToTokens.length))
                                        message.packageToTokens = [];
                                    message.packageToTokens.push($root.merico.proto.analysis.indicator.TechTag.PackageToToken.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CommitToPackage;
                    })();

                    return TechTag;
                })();

                indicator.Aggregation = (function() {

                    /**
                     * Properties of an Aggregation.
                     * @memberof merico.proto.analysis.indicator
                     * @interface IAggregation
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByCommitFile>|null} [byCommitFiles] Aggregation byCommitFiles
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByCommit>|null} [byCommits] Aggregation byCommits
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByContributorFile>|null} [byContributorFiles] Aggregation byContributorFiles
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByFile>|null} [byFiles] Aggregation byFiles
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByContributor>|null} [byContributors] Aggregation byContributors
                     * @property {Array.<merico.proto.analysis.indicator.Aggregation.IByContributorModule>|null} [byContributorModules] Aggregation byContributorModules
                     */

                    /**
                     * Constructs a new Aggregation.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents an Aggregation.
                     * @implements IAggregation
                     * @constructor
                     * @param {merico.proto.analysis.indicator.IAggregation=} [properties] Properties to set
                     */
                    function Aggregation(properties) {
                        this.byCommitFiles = [];
                        this.byCommits = [];
                        this.byContributorFiles = [];
                        this.byFiles = [];
                        this.byContributors = [];
                        this.byContributorModules = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Aggregation byCommitFiles.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByCommitFile>} byCommitFiles
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byCommitFiles = $util.emptyArray;

                    /**
                     * Aggregation byCommits.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByCommit>} byCommits
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byCommits = $util.emptyArray;

                    /**
                     * Aggregation byContributorFiles.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByContributorFile>} byContributorFiles
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byContributorFiles = $util.emptyArray;

                    /**
                     * Aggregation byFiles.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByFile>} byFiles
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byFiles = $util.emptyArray;

                    /**
                     * Aggregation byContributors.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByContributor>} byContributors
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byContributors = $util.emptyArray;

                    /**
                     * Aggregation byContributorModules.
                     * @member {Array.<merico.proto.analysis.indicator.Aggregation.IByContributorModule>} byContributorModules
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @instance
                     */
                    Aggregation.prototype.byContributorModules = $util.emptyArray;

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Aggregation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Aggregation} Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Aggregation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.byCommitFiles && message.byCommitFiles.length))
                                    message.byCommitFiles = [];
                                message.byCommitFiles.push($root.merico.proto.analysis.indicator.Aggregation.ByCommitFile.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                if (!(message.byCommits && message.byCommits.length))
                                    message.byCommits = [];
                                message.byCommits.push($root.merico.proto.analysis.indicator.Aggregation.ByCommit.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                if (!(message.byContributorFiles && message.byContributorFiles.length))
                                    message.byContributorFiles = [];
                                message.byContributorFiles.push($root.merico.proto.analysis.indicator.Aggregation.ByContributorFile.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                if (!(message.byFiles && message.byFiles.length))
                                    message.byFiles = [];
                                message.byFiles.push($root.merico.proto.analysis.indicator.Aggregation.ByFile.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.byContributors && message.byContributors.length))
                                    message.byContributors = [];
                                message.byContributors.push($root.merico.proto.analysis.indicator.Aggregation.ByContributor.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                if (!(message.byContributorModules && message.byContributorModules.length))
                                    message.byContributorModules = [];
                                message.byContributorModules.push($root.merico.proto.analysis.indicator.Aggregation.ByContributorModule.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Aggregation.ByCommitFile = (function() {

                        /**
                         * Properties of a ByCommitFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByCommitFile
                         * @property {string|null} [hexsha] ByCommitFile hexsha
                         * @property {string|null} [filePath] ByCommitFile filePath
                         * @property {number|null} [devEq] ByCommitFile devEq
                         * @property {number|null} [devRank] ByCommitFile devRank
                         */

                        /**
                         * Constructs a new ByCommitFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByCommitFile.
                         * @implements IByCommitFile
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByCommitFile=} [properties] Properties to set
                         */
                        function ByCommitFile(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByCommitFile hexsha.
                         * @member {string} hexsha
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommitFile
                         * @instance
                         */
                        ByCommitFile.prototype.hexsha = "";

                        /**
                         * ByCommitFile filePath.
                         * @member {string} filePath
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommitFile
                         * @instance
                         */
                        ByCommitFile.prototype.filePath = "";

                        /**
                         * ByCommitFile devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommitFile
                         * @instance
                         */
                        ByCommitFile.prototype.devEq = 0;

                        /**
                         * ByCommitFile devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommitFile
                         * @instance
                         */
                        ByCommitFile.prototype.devRank = 0;

                        /**
                         * Decodes a ByCommitFile message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommitFile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByCommitFile} ByCommitFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByCommitFile.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByCommitFile();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.hexsha = reader.string();
                                    break;
                                case 2:
                                    message.filePath = reader.string();
                                    break;
                                case 3:
                                    message.devEq = reader.int32();
                                    break;
                                case 4:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByCommitFile;
                    })();

                    Aggregation.ByCommit = (function() {

                        /**
                         * Properties of a ByCommit.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByCommit
                         * @property {string|null} [hexsha] ByCommit hexsha
                         * @property {number|null} [devEq] ByCommit devEq
                         * @property {number|null} [devRank] ByCommit devRank
                         */

                        /**
                         * Constructs a new ByCommit.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByCommit.
                         * @implements IByCommit
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByCommit=} [properties] Properties to set
                         */
                        function ByCommit(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByCommit hexsha.
                         * @member {string} hexsha
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommit
                         * @instance
                         */
                        ByCommit.prototype.hexsha = "";

                        /**
                         * ByCommit devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommit
                         * @instance
                         */
                        ByCommit.prototype.devEq = 0;

                        /**
                         * ByCommit devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommit
                         * @instance
                         */
                        ByCommit.prototype.devRank = 0;

                        /**
                         * Decodes a ByCommit message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByCommit
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByCommit} ByCommit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByCommit.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByCommit();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.hexsha = reader.string();
                                    break;
                                case 2:
                                    message.devEq = reader.int32();
                                    break;
                                case 3:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByCommit;
                    })();

                    Aggregation.ByContributorFile = (function() {

                        /**
                         * Properties of a ByContributorFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByContributorFile
                         * @property {string|null} [email] ByContributorFile email
                         * @property {string|null} [filePath] ByContributorFile filePath
                         * @property {number|null} [devEq] ByContributorFile devEq
                         * @property {number|null} [devRank] ByContributorFile devRank
                         */

                        /**
                         * Constructs a new ByContributorFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByContributorFile.
                         * @implements IByContributorFile
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByContributorFile=} [properties] Properties to set
                         */
                        function ByContributorFile(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByContributorFile email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorFile
                         * @instance
                         */
                        ByContributorFile.prototype.email = "";

                        /**
                         * ByContributorFile filePath.
                         * @member {string} filePath
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorFile
                         * @instance
                         */
                        ByContributorFile.prototype.filePath = "";

                        /**
                         * ByContributorFile devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorFile
                         * @instance
                         */
                        ByContributorFile.prototype.devEq = 0;

                        /**
                         * ByContributorFile devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorFile
                         * @instance
                         */
                        ByContributorFile.prototype.devRank = 0;

                        /**
                         * Decodes a ByContributorFile message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorFile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByContributorFile} ByContributorFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByContributorFile.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByContributorFile();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.email = reader.string();
                                    break;
                                case 2:
                                    message.filePath = reader.string();
                                    break;
                                case 3:
                                    message.devEq = reader.int32();
                                    break;
                                case 4:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByContributorFile;
                    })();

                    Aggregation.ByFile = (function() {

                        /**
                         * Properties of a ByFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByFile
                         * @property {string|null} [filePath] ByFile filePath
                         * @property {number|null} [devEq] ByFile devEq
                         * @property {number|null} [devRank] ByFile devRank
                         */

                        /**
                         * Constructs a new ByFile.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByFile.
                         * @implements IByFile
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByFile=} [properties] Properties to set
                         */
                        function ByFile(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByFile filePath.
                         * @member {string} filePath
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByFile
                         * @instance
                         */
                        ByFile.prototype.filePath = "";

                        /**
                         * ByFile devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByFile
                         * @instance
                         */
                        ByFile.prototype.devEq = 0;

                        /**
                         * ByFile devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByFile
                         * @instance
                         */
                        ByFile.prototype.devRank = 0;

                        /**
                         * Decodes a ByFile message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByFile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByFile} ByFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByFile.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByFile();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.filePath = reader.string();
                                    break;
                                case 2:
                                    message.devEq = reader.int32();
                                    break;
                                case 3:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByFile;
                    })();

                    Aggregation.ByContributor = (function() {

                        /**
                         * Properties of a ByContributor.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByContributor
                         * @property {string|null} [email] ByContributor email
                         * @property {number|null} [devEq] ByContributor devEq
                         * @property {number|null} [devRank] ByContributor devRank
                         */

                        /**
                         * Constructs a new ByContributor.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByContributor.
                         * @implements IByContributor
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByContributor=} [properties] Properties to set
                         */
                        function ByContributor(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByContributor email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributor
                         * @instance
                         */
                        ByContributor.prototype.email = "";

                        /**
                         * ByContributor devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributor
                         * @instance
                         */
                        ByContributor.prototype.devEq = 0;

                        /**
                         * ByContributor devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributor
                         * @instance
                         */
                        ByContributor.prototype.devRank = 0;

                        /**
                         * Decodes a ByContributor message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributor
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByContributor} ByContributor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByContributor.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByContributor();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.email = reader.string();
                                    break;
                                case 2:
                                    message.devEq = reader.int32();
                                    break;
                                case 3:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByContributor;
                    })();

                    Aggregation.ByContributorModule = (function() {

                        /**
                         * Properties of a ByContributorModule.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @interface IByContributorModule
                         * @property {string|null} [email] ByContributorModule email
                         * @property {string|null} [module] ByContributorModule module
                         * @property {number|null} [devEq] ByContributorModule devEq
                         * @property {number|null} [devRank] ByContributorModule devRank
                         */

                        /**
                         * Constructs a new ByContributorModule.
                         * @memberof merico.proto.analysis.indicator.Aggregation
                         * @classdesc Represents a ByContributorModule.
                         * @implements IByContributorModule
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Aggregation.IByContributorModule=} [properties] Properties to set
                         */
                        function ByContributorModule(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ByContributorModule email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorModule
                         * @instance
                         */
                        ByContributorModule.prototype.email = "";

                        /**
                         * ByContributorModule module.
                         * @member {string} module
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorModule
                         * @instance
                         */
                        ByContributorModule.prototype.module = "";

                        /**
                         * ByContributorModule devEq.
                         * @member {number} devEq
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorModule
                         * @instance
                         */
                        ByContributorModule.prototype.devEq = 0;

                        /**
                         * ByContributorModule devRank.
                         * @member {number} devRank
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorModule
                         * @instance
                         */
                        ByContributorModule.prototype.devRank = 0;

                        /**
                         * Decodes a ByContributorModule message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Aggregation.ByContributorModule
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Aggregation.ByContributorModule} ByContributorModule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ByContributorModule.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Aggregation.ByContributorModule();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.email = reader.string();
                                    break;
                                case 2:
                                    message.module = reader.string();
                                    break;
                                case 3:
                                    message.devEq = reader.int32();
                                    break;
                                case 4:
                                    message.devRank = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ByContributorModule;
                    })();

                    return Aggregation;
                })();

                indicator.Commit = (function() {

                    /**
                     * Properties of a Commit.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ICommit
                     * @property {string|null} [hexsha] Commit hexsha
                     * @property {merico.proto.analysis.indicator.Commit.ISignature|null} [author] Commit author
                     * @property {merico.proto.analysis.indicator.Commit.ISignature|null} [committer] Commit committer
                     * @property {string|null} [message] Commit message
                     * @property {Array.<string>|null} [parents] Commit parents
                     * @property {number|null} [insertions] Commit insertions
                     * @property {number|null} [deletions] Commit deletions
                     */

                    /**
                     * Constructs a new Commit.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a Commit.
                     * @implements ICommit
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ICommit=} [properties] Properties to set
                     */
                    function Commit(properties) {
                        this.parents = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Commit hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.hexsha = "";

                    /**
                     * Commit author.
                     * @member {merico.proto.analysis.indicator.Commit.ISignature|null|undefined} author
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.author = null;

                    /**
                     * Commit committer.
                     * @member {merico.proto.analysis.indicator.Commit.ISignature|null|undefined} committer
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.committer = null;

                    /**
                     * Commit message.
                     * @member {string} message
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.message = "";

                    /**
                     * Commit parents.
                     * @member {Array.<string>} parents
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.parents = $util.emptyArray;

                    /**
                     * Commit insertions.
                     * @member {number} insertions
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.insertions = 0;

                    /**
                     * Commit deletions.
                     * @member {number} deletions
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @instance
                     */
                    Commit.prototype.deletions = 0;

                    /**
                     * Decodes a Commit message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.Commit
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.Commit} Commit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Commit.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Commit();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hexsha = reader.string();
                                break;
                            case 2:
                                message.author = $root.merico.proto.analysis.indicator.Commit.Signature.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.committer = $root.merico.proto.analysis.indicator.Commit.Signature.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.message = reader.string();
                                break;
                            case 5:
                                if (!(message.parents && message.parents.length))
                                    message.parents = [];
                                message.parents.push(reader.string());
                                break;
                            case 6:
                                message.insertions = reader.int32();
                                break;
                            case 7:
                                message.deletions = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Commit.Signature = (function() {

                        /**
                         * Properties of a Signature.
                         * @memberof merico.proto.analysis.indicator.Commit
                         * @interface ISignature
                         * @property {string|null} [email] Signature email
                         * @property {string|null} [name] Signature name
                         * @property {number|null} [time] Signature time
                         * @property {number|null} [offset] Signature offset
                         */

                        /**
                         * Constructs a new Signature.
                         * @memberof merico.proto.analysis.indicator.Commit
                         * @classdesc Represents a Signature.
                         * @implements ISignature
                         * @constructor
                         * @param {merico.proto.analysis.indicator.Commit.ISignature=} [properties] Properties to set
                         */
                        function Signature(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Signature email.
                         * @member {string} email
                         * @memberof merico.proto.analysis.indicator.Commit.Signature
                         * @instance
                         */
                        Signature.prototype.email = "";

                        /**
                         * Signature name.
                         * @member {string} name
                         * @memberof merico.proto.analysis.indicator.Commit.Signature
                         * @instance
                         */
                        Signature.prototype.name = "";

                        /**
                         * Signature time.
                         * @member {number} time
                         * @memberof merico.proto.analysis.indicator.Commit.Signature
                         * @instance
                         */
                        Signature.prototype.time = 0;

                        /**
                         * Signature offset.
                         * @member {number} offset
                         * @memberof merico.proto.analysis.indicator.Commit.Signature
                         * @instance
                         */
                        Signature.prototype.offset = 0;

                        /**
                         * Decodes a Signature message from the specified reader or buffer.
                         * @function decode
                         * @memberof merico.proto.analysis.indicator.Commit.Signature
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {merico.proto.analysis.indicator.Commit.Signature} Signature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Signature.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.Commit.Signature();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.email = reader.string();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    message.time = reader.int32();
                                    break;
                                case 4:
                                    message.offset = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Signature;
                    })();

                    return Commit;
                })();

                indicator.LineDiffEdit = (function() {

                    /**
                     * Properties of a LineDiffEdit.
                     * @memberof merico.proto.analysis.indicator
                     * @interface ILineDiffEdit
                     * @property {string|null} [filePath] LineDiffEdit filePath
                     * @property {string|null} [hexsha] LineDiffEdit hexsha
                     * @property {string|null} [email] LineDiffEdit email
                     * @property {number|null} [insertions] LineDiffEdit insertions
                     * @property {number|null} [deletions] LineDiffEdit deletions
                     * @property {number|null} [devEq] LineDiffEdit devEq
                     * @property {number|null} [devRank] LineDiffEdit devRank
                     * @property {string|null} [language] LineDiffEdit language
                     */

                    /**
                     * Constructs a new LineDiffEdit.
                     * @memberof merico.proto.analysis.indicator
                     * @classdesc Represents a LineDiffEdit.
                     * @implements ILineDiffEdit
                     * @constructor
                     * @param {merico.proto.analysis.indicator.ILineDiffEdit=} [properties] Properties to set
                     */
                    function LineDiffEdit(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LineDiffEdit filePath.
                     * @member {string} filePath
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.filePath = "";

                    /**
                     * LineDiffEdit hexsha.
                     * @member {string} hexsha
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.hexsha = "";

                    /**
                     * LineDiffEdit email.
                     * @member {string} email
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.email = "";

                    /**
                     * LineDiffEdit insertions.
                     * @member {number} insertions
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.insertions = 0;

                    /**
                     * LineDiffEdit deletions.
                     * @member {number} deletions
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.deletions = 0;

                    /**
                     * LineDiffEdit devEq.
                     * @member {number} devEq
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.devEq = 0;

                    /**
                     * LineDiffEdit devRank.
                     * @member {number} devRank
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.devRank = 0;

                    /**
                     * LineDiffEdit language.
                     * @member {string} language
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @instance
                     */
                    LineDiffEdit.prototype.language = "";

                    /**
                     * Decodes a LineDiffEdit message from the specified reader or buffer.
                     * @function decode
                     * @memberof merico.proto.analysis.indicator.LineDiffEdit
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {merico.proto.analysis.indicator.LineDiffEdit} LineDiffEdit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LineDiffEdit.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.merico.proto.analysis.indicator.LineDiffEdit();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.filePath = reader.string();
                                break;
                            case 2:
                                message.hexsha = reader.string();
                                break;
                            case 3:
                                message.email = reader.string();
                                break;
                            case 4:
                                message.insertions = reader.int32();
                                break;
                            case 5:
                                message.deletions = reader.int32();
                                break;
                            case 6:
                                message.devEq = reader.int32();
                                break;
                            case 7:
                                message.devRank = reader.float();
                                break;
                            case 8:
                                message.language = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return LineDiffEdit;
                })();

                return indicator;
            })();

            return analysis;
        })();

        return proto;
    })();

    return merico;
})();

module.exports = $root;
