import * as $protobuf from "protobufjs";
/** Namespace merico. */
export namespace merico {

    /** Namespace proto. */
    namespace proto {

        /** Namespace analysis. */
        namespace analysis {

            /** Namespace indicator. */
            namespace indicator {

                /** Properties of a ReportOfAll. */
                interface IReportOfAll {

                    /** ReportOfAll protoVersion */
                    protoVersion?: (number|null);

                    /** ReportOfAll meta */
                    meta?: (merico.proto.analysis.indicator.IAnalysisMeta|null);

                    /** ReportOfAll fields */
                    fields?: (string[]|null);

                    /** ReportOfAll linguistLangs */
                    linguistLangs?: ({ [k: string]: number }|null);

                    /** ReportOfAll treeDiffLangs */
                    treeDiffLangs?: (string[]|null);

                    /** ReportOfAll lineDiffLangs */
                    lineDiffLangs?: (string[]|null);

                    /** ReportOfAll commits */
                    commits?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** ReportOfAll mappedEmails */
                    mappedEmails?: (string[]|null);

                    /** ReportOfAll commitMetrics */
                    commitMetrics?: (merico.proto.analysis.indicator.ICommitMetrics[]|null);

                    /** ReportOfAll labeledCommits */
                    labeledCommits?: (merico.proto.analysis.indicator.ILabeledCommits|null);

                    /** ReportOfAll labeledFiles */
                    labeledFiles?: (merico.proto.analysis.indicator.ILabeledFiles|null);

                    /** ReportOfAll ignoredRecords */
                    ignoredRecords?: (merico.proto.analysis.indicator.IIgnoredRecord[]|null);

                    /** ReportOfAll ccgs */
                    ccgs?: ({ [k: string]: merico.proto.analysis.indicator.ICcg }|null);

                    /** ReportOfAll lineDiffEdits */
                    lineDiffEdits?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** ReportOfAll totalDevEq */
                    totalDevEq?: (number|Long|null);

                    /** ReportOfAll devEqLangs */
                    devEqLangs?: ({ [k: string]: number }|null);

                    /** ReportOfAll docCoverage */
                    docCoverage?: (merico.proto.analysis.indicator.IDocCoverage|null);

                    /** ReportOfAll dryness */
                    dryness?: (merico.proto.analysis.indicator.IDryness|null);

                    /** ReportOfAll staticTestCoverage */
                    staticTestCoverage?: (merico.proto.analysis.indicator.IStaticTestCoverage|null);

                    /** ReportOfAll codeQuality */
                    codeQuality?: (merico.proto.analysis.indicator.ICodeQuality|null);

                    /** ReportOfAll customCodeQuality */
                    customCodeQuality?: (merico.proto.analysis.indicator.ICodeQuality|null);

                    /** ReportOfAll contributorImpact */
                    contributorImpact?: (merico.proto.analysis.indicator.IContributorImpact[]|null);

                    /** ReportOfAll techTag */
                    techTag?: (merico.proto.analysis.indicator.ITechTag|null);

                    /** ReportOfAll topicModeling */
                    topicModeling?: (merico.proto.analysis.indicator.ITopicModeling|null);

                    /** ReportOfAll modularity */
                    modularity?: (number|null);

                    /** ReportOfAll robustness */
                    robustness?: (number|null);

                    /** ReportOfAll velocity */
                    velocity?: (number|null);

                    /** ReportOfAll vcsTags */
                    vcsTags?: (string[]|null);

                    /** ReportOfAll packageDependencies */
                    packageDependencies?: (merico.proto.analysis.indicator.IPackageDependency[]|null);

                    /** ReportOfAll aggregation */
                    aggregation?: (merico.proto.analysis.indicator.IAggregation|null);

                    /** ReportOfAll cags */
                    cags?: ({ [k: string]: merico.proto.analysis.indicator.ICag }|null);
                }

                /** Represents a ReportOfAll. */
                class ReportOfAll implements IReportOfAll {

                    /**
                     * Constructs a new ReportOfAll.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IReportOfAll);

                    /** ReportOfAll protoVersion. */
                    public protoVersion: number;

                    /** ReportOfAll meta. */
                    public meta?: (merico.proto.analysis.indicator.IAnalysisMeta|null);

                    /** ReportOfAll fields. */
                    public fields: string[];

                    /** ReportOfAll linguistLangs. */
                    public linguistLangs: { [k: string]: number };

                    /** ReportOfAll treeDiffLangs. */
                    public treeDiffLangs: string[];

                    /** ReportOfAll lineDiffLangs. */
                    public lineDiffLangs: string[];

                    /** ReportOfAll commits. */
                    public commits?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** ReportOfAll mappedEmails. */
                    public mappedEmails: string[];

                    /** ReportOfAll commitMetrics. */
                    public commitMetrics: merico.proto.analysis.indicator.ICommitMetrics[];

                    /** ReportOfAll labeledCommits. */
                    public labeledCommits?: (merico.proto.analysis.indicator.ILabeledCommits|null);

                    /** ReportOfAll labeledFiles. */
                    public labeledFiles?: (merico.proto.analysis.indicator.ILabeledFiles|null);

                    /** ReportOfAll ignoredRecords. */
                    public ignoredRecords: merico.proto.analysis.indicator.IIgnoredRecord[];

                    /** ReportOfAll ccgs. */
                    public ccgs: { [k: string]: merico.proto.analysis.indicator.ICcg };

                    /** ReportOfAll lineDiffEdits. */
                    public lineDiffEdits?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** ReportOfAll totalDevEq. */
                    public totalDevEq: (number|Long);

                    /** ReportOfAll devEqLangs. */
                    public devEqLangs: { [k: string]: number };

                    /** ReportOfAll docCoverage. */
                    public docCoverage?: (merico.proto.analysis.indicator.IDocCoverage|null);

                    /** ReportOfAll dryness. */
                    public dryness?: (merico.proto.analysis.indicator.IDryness|null);

                    /** ReportOfAll staticTestCoverage. */
                    public staticTestCoverage?: (merico.proto.analysis.indicator.IStaticTestCoverage|null);

                    /** ReportOfAll codeQuality. */
                    public codeQuality?: (merico.proto.analysis.indicator.ICodeQuality|null);

                    /** ReportOfAll customCodeQuality. */
                    public customCodeQuality?: (merico.proto.analysis.indicator.ICodeQuality|null);

                    /** ReportOfAll contributorImpact. */
                    public contributorImpact: merico.proto.analysis.indicator.IContributorImpact[];

                    /** ReportOfAll techTag. */
                    public techTag?: (merico.proto.analysis.indicator.ITechTag|null);

                    /** ReportOfAll topicModeling. */
                    public topicModeling?: (merico.proto.analysis.indicator.ITopicModeling|null);

                    /** ReportOfAll modularity. */
                    public modularity: number;

                    /** ReportOfAll robustness. */
                    public robustness: number;

                    /** ReportOfAll velocity. */
                    public velocity: number;

                    /** ReportOfAll vcsTags. */
                    public vcsTags: string[];

                    /** ReportOfAll packageDependencies. */
                    public packageDependencies: merico.proto.analysis.indicator.IPackageDependency[];

                    /** ReportOfAll aggregation. */
                    public aggregation?: (merico.proto.analysis.indicator.IAggregation|null);

                    /** ReportOfAll cags. */
                    public cags: { [k: string]: merico.proto.analysis.indicator.ICag };

                    public contributorBombSweep: merico.proto.analysis.indicator.ContributorBombSweep[];

                    public testOfTimeFunction: merico.proto.analysis.indicator.TestOfTimeFunctionp[];
                    
                    /**
                     * Decodes a ReportOfAll message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportOfAll
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.ReportOfAll;
                }

                /** Properties of an AnalysisMeta. */
                interface IAnalysisMeta {

                    /** AnalysisMeta analysisId */
                    analysisId?: (string|null);

                    /** AnalysisMeta version */
                    version?: (string|null);

                    /** AnalysisMeta semver */
                    semver?: (string|null);

                    /** AnalysisMeta gitUrl */
                    gitUrl?: (string|null);

                    /** AnalysisMeta analysisType */
                    analysisType?: (string|null);

                    /** AnalysisMeta pathBlacklist */
                    pathBlacklist?: (string[]|null);

                    /** AnalysisMeta commitBlacklist */
                    commitBlacklist?: (string[]|null);

                    /** AnalysisMeta defaultRef */
                    defaultRef?: (string|null);

                    /** AnalysisMeta defaultRefHexsha */
                    defaultRefHexsha?: (string|null);

                    /** AnalysisMeta singleBranch */
                    singleBranch?: (boolean|null);

                    /** AnalysisMeta commitBefore */
                    commitBefore?: (number|null);

                    /** AnalysisMeta commitAfter */
                    commitAfter?: (number|null);

                    /** AnalysisMeta reportId */
                    reportId?: (string|null);

                    /** AnalysisMeta analysisConf */
                    analysisConf?: (string|null);

                    /** AnalysisMeta sourceType */
                    sourceType?: (string|null);

                    /** AnalysisMeta sourceId */
                    sourceId?: (string|null);

                    /** AnalysisMeta earliestHexsha */
                    earliestHexsha?: (string|null);

                    /** AnalysisMeta latestHexsha */
                    latestHexsha?: (string|null);
                }

                /** Represents an AnalysisMeta. */
                class AnalysisMeta implements IAnalysisMeta {

                    /**
                     * Constructs a new AnalysisMeta.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IAnalysisMeta);

                    /** AnalysisMeta analysisId. */
                    public analysisId: string;

                    /** AnalysisMeta version. */
                    public version: string;

                    /** AnalysisMeta semver. */
                    public semver: string;

                    /** AnalysisMeta gitUrl. */
                    public gitUrl: string;

                    /** AnalysisMeta analysisType. */
                    public analysisType: string;

                    /** AnalysisMeta pathBlacklist. */
                    public pathBlacklist: string[];

                    /** AnalysisMeta commitBlacklist. */
                    public commitBlacklist: string[];

                    /** AnalysisMeta defaultRef. */
                    public defaultRef: string;

                    /** AnalysisMeta defaultRefHexsha. */
                    public defaultRefHexsha: string;

                    /** AnalysisMeta singleBranch. */
                    public singleBranch: boolean;

                    /** AnalysisMeta commitBefore. */
                    public commitBefore: number;

                    /** AnalysisMeta commitAfter. */
                    public commitAfter: number;

                    /** AnalysisMeta reportId. */
                    public reportId: string;

                    /** AnalysisMeta analysisConf. */
                    public analysisConf: string;

                    /** AnalysisMeta sourceType. */
                    public sourceType: string;

                    /** AnalysisMeta sourceId. */
                    public sourceId: string;

                    /** AnalysisMeta earliestHexsha. */
                    public earliestHexsha: string;

                    /** AnalysisMeta latestHexsha. */
                    public latestHexsha: string;

                    /**
                     * Decodes an AnalysisMeta message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalysisMeta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.AnalysisMeta;
                }

                /** Properties of a Streaming. */
                interface IStreaming {

                    /** Streaming filePath */
                    filePath?: (string|null);

                    /** Streaming fileSize */
                    fileSize?: (number|Long|null);

                    /** Streaming fileMd5 */
                    fileMd5?: (string|null);

                    /** Streaming count */
                    count?: (number|Long|null);
                }

                /** Represents a Streaming. */
                class Streaming implements IStreaming {

                    /**
                     * Constructs a new Streaming.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IStreaming);

                    /** Streaming filePath. */
                    public filePath: string;

                    /** Streaming fileSize. */
                    public fileSize: (number|Long);

                    /** Streaming fileMd5. */
                    public fileMd5: string;

                    /** Streaming count. */
                    public count: (number|Long);

                    /**
                     * Decodes a Streaming message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Streaming
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Streaming;
                }

                /** Properties of a CherryPick. */
                interface ICherryPick {

                    /** CherryPick original */
                    original?: (string|null);

                    /** CherryPick replicas */
                    replicas?: (string[]|null);
                }

                /** Represents a CherryPick. */
                class CherryPick implements ICherryPick {

                    /**
                     * Constructs a new CherryPick.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICherryPick);

                    /** CherryPick original. */
                    public original: string;

                    /** CherryPick replicas. */
                    public replicas: string[];

                    /**
                     * Decodes a CherryPick message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CherryPick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CherryPick;
                }

                /** Properties of a LabeledCommits. */
                interface ILabeledCommits {

                    /** LabeledCommits largeInsertions */
                    largeInsertions?: (string[]|null);

                    /** LabeledCommits largeDeletions */
                    largeDeletions?: (string[]|null);

                    /** LabeledCommits revert */
                    revert?: (string[]|null);

                    /** LabeledCommits cherryPicks */
                    cherryPicks?: (merico.proto.analysis.indicator.ICherryPick[]|null);
                }

                /** Represents a LabeledCommits. */
                class LabeledCommits implements ILabeledCommits {

                    /**
                     * Constructs a new LabeledCommits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ILabeledCommits);

                    /** LabeledCommits largeInsertions. */
                    public largeInsertions: string[];

                    /** LabeledCommits largeDeletions. */
                    public largeDeletions: string[];

                    /** LabeledCommits revert. */
                    public revert: string[];

                    /** LabeledCommits cherryPicks. */
                    public cherryPicks: merico.proto.analysis.indicator.ICherryPick[];

                    /**
                     * Decodes a LabeledCommits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabeledCommits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.LabeledCommits;
                }

                /** Properties of an UnchangedFile. */
                interface IUnchangedFile {

                    /** UnchangedFile hexsha */
                    hexsha?: (string|null);

                    /** UnchangedFile filePath */
                    filePath?: (string|null);
                }

                /** Represents an UnchangedFile. */
                class UnchangedFile implements IUnchangedFile {

                    /**
                     * Constructs a new UnchangedFile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IUnchangedFile);

                    /** UnchangedFile hexsha. */
                    public hexsha: string;

                    /** UnchangedFile filePath. */
                    public filePath: string;

                    /**
                     * Decodes an UnchangedFile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnchangedFile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.UnchangedFile;
                }

                /** Properties of a LabeledFiles. */
                interface ILabeledFiles {

                    /** LabeledFiles unchangedFiles */
                    unchangedFiles?: (merico.proto.analysis.indicator.IUnchangedFile[]|null);
                }

                /** Represents a LabeledFiles. */
                class LabeledFiles implements ILabeledFiles {

                    /**
                     * Constructs a new LabeledFiles.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ILabeledFiles);

                    /** LabeledFiles unchangedFiles. */
                    public unchangedFiles: merico.proto.analysis.indicator.IUnchangedFile[];

                    /**
                     * Decodes a LabeledFiles message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabeledFiles
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.LabeledFiles;
                }

                /** Properties of a CommitMetrics. */
                interface ICommitMetrics {

                    /** CommitMetrics hexsha */
                    hexsha?: (string|null);

                    /** CommitMetrics complexity */
                    complexity?: (number|null);

                    /** CommitMetrics cyclomaticComplexity */
                    cyclomaticComplexity?: (number|null);

                    /** CommitMetrics bigCcFuncCount */
                    bigCcFuncCount?: (number|null);
                }

                /** Represents a CommitMetrics. */
                class CommitMetrics implements ICommitMetrics {

                    /**
                     * Constructs a new CommitMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICommitMetrics);

                    /** CommitMetrics hexsha. */
                    public hexsha: string;

                    /** CommitMetrics complexity. */
                    public complexity: number;

                    /** CommitMetrics cyclomaticComplexity. */
                    public cyclomaticComplexity: number;

                    /** CommitMetrics bigCcFuncCount. */
                    public bigCcFuncCount: number;

                    /**
                     * Decodes a CommitMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CommitMetrics;
                }

                /** Properties of a CcgSnapshot. */
                interface ICcgSnapshot {

                    /** CcgSnapshot id */
                    id?: (string|null);

                    /** CcgSnapshot filePath */
                    filePath?: (string|null);

                    /** CcgSnapshot name */
                    name?: (string|null);

                    /** CcgSnapshot parameters */
                    parameters?: (string|null);

                    /** CcgSnapshot returns */
                    returns?: (string|null);

                    /** CcgSnapshot encFuncName */
                    encFuncName?: (string|null);

                    /** CcgSnapshot pos */
                    pos?: (merico.proto.analysis.indicator.CcgSnapshot.IPos|null);

                    /** CcgSnapshot codeHash */
                    codeHash?: (string|null);

                    /** CcgSnapshot className */
                    className?: (string|null);

                    /** CcgSnapshot callees */
                    callees?: (string[]|null);

                    /** CcgSnapshot cyclomaticComplexity */
                    cyclomaticComplexity?: (number|null);
                }

                /** Represents a CcgSnapshot. */
                class CcgSnapshot implements ICcgSnapshot {

                    /**
                     * Constructs a new CcgSnapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICcgSnapshot);

                    /** CcgSnapshot id. */
                    public id: string;

                    /** CcgSnapshot filePath. */
                    public filePath: string;

                    /** CcgSnapshot name. */
                    public name: string;

                    /** CcgSnapshot parameters. */
                    public parameters: string;

                    /** CcgSnapshot returns. */
                    public returns: string;

                    /** CcgSnapshot encFuncName. */
                    public encFuncName: string;

                    /** CcgSnapshot pos. */
                    public pos?: (merico.proto.analysis.indicator.CcgSnapshot.IPos|null);

                    /** CcgSnapshot codeHash. */
                    public codeHash: string;

                    /** CcgSnapshot className. */
                    public className: string;

                    /** CcgSnapshot callees. */
                    public callees: string[];

                    /** CcgSnapshot cyclomaticComplexity. */
                    public cyclomaticComplexity: number;

                    /**
                     * Decodes a CcgSnapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CcgSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CcgSnapshot;
                }

                namespace CcgSnapshot {

                    /** Properties of a Pos. */
                    interface IPos {

                        /** Pos startLine */
                        startLine?: (number|null);

                        /** Pos endLine */
                        endLine?: (number|null);

                        /** Pos startColumn */
                        startColumn?: (number|null);

                        /** Pos endColumn */
                        endColumn?: (number|null);

                        /** Pos startRange */
                        startRange?: (number|null);

                        /** Pos endRange */
                        endRange?: (number|null);
                    }

                    /** Represents a Pos. */
                    class Pos implements IPos {

                        /**
                         * Constructs a new Pos.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.CcgSnapshot.IPos);

                        /** Pos startLine. */
                        public startLine: number;

                        /** Pos endLine. */
                        public endLine: number;

                        /** Pos startColumn. */
                        public startColumn: number;

                        /** Pos endColumn. */
                        public endColumn: number;

                        /** Pos startRange. */
                        public startRange: number;

                        /** Pos endRange. */
                        public endRange: number;

                        /**
                         * Decodes a Pos message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Pos
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CcgSnapshot.Pos;
                    }
                }

                /** Properties of a CcgEdit. */
                interface ICcgEdit {

                    /** CcgEdit id */
                    id?: (string|null);

                    /** CcgEdit nodeId */
                    nodeId?: (string|null);

                    /** CcgEdit hexsha */
                    hexsha?: (string|null);

                    /** CcgEdit snapshot */
                    snapshot?: (merico.proto.analysis.indicator.ICcgSnapshot|null);

                    /** CcgEdit oldSnapshotId */
                    oldSnapshotId?: (string|null);

                    /** CcgEdit removed */
                    removed?: (boolean|null);

                    /** CcgEdit devEq */
                    devEq?: (number|null);

                    /** CcgEdit devRank */
                    devRank?: (number|null);

                    /** CcgEdit addLine */
                    addLine?: (number|null);

                    /** CcgEdit deleteLine */
                    deleteLine?: (number|null);
                }

                /** Represents a CcgEdit. */
                class CcgEdit implements ICcgEdit {

                    /**
                     * Constructs a new CcgEdit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICcgEdit);

                    /** CcgEdit id. */
                    public id: string;

                    /** CcgEdit nodeId. */
                    public nodeId: string;

                    /** CcgEdit hexsha. */
                    public hexsha: string;

                    /** CcgEdit snapshot. */
                    public snapshot?: (merico.proto.analysis.indicator.ICcgSnapshot|null);

                    /** CcgEdit oldSnapshotId. */
                    public oldSnapshotId: string;

                    /** CcgEdit removed. */
                    public removed: boolean;

                    /** CcgEdit devEq. */
                    public devEq: number;

                    /** CcgEdit devRank. */
                    public devRank: number;

                    /** CcgEdit addLine. */
                    public addLine: number;

                    /** CcgEdit deleteLine. */
                    public deleteLine: number;

                    /**
                     * Decodes a CcgEdit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CcgEdit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CcgEdit;
                }

                /** Properties of a CcgNode. */
                interface ICcgNode {

                    /** CcgNode id */
                    id?: (string|null);

                    /** CcgNode latestEditId */
                    latestEditId?: (string|null);

                    /** CcgNode addedByHexsha */
                    addedByHexsha?: (string|null);

                    /** CcgNode removedByHexsha */
                    removedByHexsha?: (string|null);

                    /** CcgNode inDegree */
                    inDegree?: (number|null);

                    /** CcgNode outDegree */
                    outDegree?: (number|null);
                }

                /** Represents a CcgNode. */
                class CcgNode implements ICcgNode {

                    /**
                     * Constructs a new CcgNode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICcgNode);

                    /** CcgNode id. */
                    public id: string;

                    /** CcgNode latestEditId. */
                    public latestEditId: string;

                    /** CcgNode addedByHexsha. */
                    public addedByHexsha: string;

                    /** CcgNode removedByHexsha. */
                    public removedByHexsha: string;

                    /** CcgNode inDegree. */
                    public inDegree: number;

                    /** CcgNode outDegree. */
                    public outDegree: number;

                    /**
                     * Decodes a CcgNode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CcgNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CcgNode;
                }

                /** Properties of a CcgEdge. */
                interface ICcgEdge {

                    /** CcgEdge fromNodeId */
                    fromNodeId?: (string|null);

                    /** CcgEdge toNodeId */
                    toNodeId?: (string|null);

                    /** CcgEdge addedByHexsha */
                    addedByHexsha?: (string|null);
                }

                /** Represents a CcgEdge. */
                class CcgEdge implements ICcgEdge {

                    /**
                     * Constructs a new CcgEdge.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICcgEdge);

                    /** CcgEdge fromNodeId. */
                    public fromNodeId: string;

                    /** CcgEdge toNodeId. */
                    public toNodeId: string;

                    /** CcgEdge addedByHexsha. */
                    public addedByHexsha: string;

                    /**
                     * Decodes a CcgEdge message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CcgEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CcgEdge;
                }

                /** Properties of a Ccg. */
                interface ICcg {

                    /** Ccg nodeCount */
                    nodeCount?: (number|Long|null);

                    /** Ccg edgeCount */
                    edgeCount?: (number|Long|null);

                    /** Ccg editCount */
                    editCount?: (number|Long|null);

                    /** Ccg nodes */
                    nodes?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Ccg edges */
                    edges?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Ccg edits */
                    edits?: (merico.proto.analysis.indicator.IStreaming|null);
                }

                /** Represents a Ccg. */
                class Ccg implements ICcg {

                    /**
                     * Constructs a new Ccg.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICcg);

                    /** Ccg nodeCount. */
                    public nodeCount: (number|Long);

                    /** Ccg edgeCount. */
                    public edgeCount: (number|Long);

                    /** Ccg editCount. */
                    public editCount: (number|Long);

                    /** Ccg nodes. */
                    public nodes?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Ccg edges. */
                    public edges?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Ccg edits. */
                    public edits?: (merico.proto.analysis.indicator.IStreaming|null);

                    /**
                     * Decodes a Ccg message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Ccg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Ccg;
                }

                /** Properties of a CagSnapshot. */
                interface ICagSnapshot {

                    /** CagSnapshot id */
                    id?: (string|null);

                    /** CagSnapshot filePath */
                    filePath?: (string|null);

                    /** CagSnapshot name */
                    name?: (string|null);

                    /** CagSnapshot parameters */
                    parameters?: (string|null);

                    /** CagSnapshot returns */
                    returns?: (string|null);

                    /** CagSnapshot encFuncName */
                    encFuncName?: (string|null);

                    /** CagSnapshot pos */
                    pos?: (merico.proto.analysis.indicator.CagSnapshot.IPos|null);

                    /** CagSnapshot codeHash */
                    codeHash?: (string|null);

                    /** CagSnapshot className */
                    className?: (string|null);

                    /** CagSnapshot callees */
                    callees?: (string[]|null);

                    /** CagSnapshot cyclomaticComplexity */
                    cyclomaticComplexity?: (number|null);
                }

                /** Represents a CagSnapshot. */
                class CagSnapshot implements ICagSnapshot {

                    /**
                     * Constructs a new CagSnapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICagSnapshot);

                    /** CagSnapshot id. */
                    public id: string;

                    /** CagSnapshot filePath. */
                    public filePath: string;

                    /** CagSnapshot name. */
                    public name: string;

                    /** CagSnapshot parameters. */
                    public parameters: string;

                    /** CagSnapshot returns. */
                    public returns: string;

                    /** CagSnapshot encFuncName. */
                    public encFuncName: string;

                    /** CagSnapshot pos. */
                    public pos?: (merico.proto.analysis.indicator.CagSnapshot.IPos|null);

                    /** CagSnapshot codeHash. */
                    public codeHash: string;

                    /** CagSnapshot className. */
                    public className: string;

                    /** CagSnapshot callees. */
                    public callees: string[];

                    /** CagSnapshot cyclomaticComplexity. */
                    public cyclomaticComplexity: number;

                    /**
                     * Decodes a CagSnapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CagSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CagSnapshot;
                }

                namespace CagSnapshot {

                    /** Properties of a Pos. */
                    interface IPos {

                        /** Pos startLine */
                        startLine?: (number|null);

                        /** Pos endLine */
                        endLine?: (number|null);

                        /** Pos startColumn */
                        startColumn?: (number|null);

                        /** Pos endColumn */
                        endColumn?: (number|null);

                        /** Pos startRange */
                        startRange?: (number|null);

                        /** Pos endRange */
                        endRange?: (number|null);
                    }

                    /** Represents a Pos. */
                    class Pos implements IPos {

                        /**
                         * Constructs a new Pos.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.CagSnapshot.IPos);

                        /** Pos startLine. */
                        public startLine: number;

                        /** Pos endLine. */
                        public endLine: number;

                        /** Pos startColumn. */
                        public startColumn: number;

                        /** Pos endColumn. */
                        public endColumn: number;

                        /** Pos startRange. */
                        public startRange: number;

                        /** Pos endRange. */
                        public endRange: number;

                        /**
                         * Decodes a Pos message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Pos
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CagSnapshot.Pos;
                    }
                }

                /** Properties of a CagNode. */
                interface ICagNode {

                    /** CagNode id */
                    id?: (string|null);

                    /** CagNode snapshot */
                    snapshot?: (merico.proto.analysis.indicator.ICagSnapshot|null);

                    /** CagNode latestHexsha */
                    latestHexsha?: (string|null);

                    /** CagNode earliestHexsha */
                    earliestHexsha?: (string|null);

                    /** CagNode frequentHexsha */
                    frequentHexsha?: (string|null);

                    /** CagNode inDegree */
                    inDegree?: (number|null);

                    /** CagNode outDegree */
                    outDegree?: (number|null);

                    /** CagNode email */
                    email?: (string|null);
                }

                /** Represents a CagNode. */
                class CagNode implements ICagNode {

                    /**
                     * Constructs a new CagNode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICagNode);

                    /** CagNode id. */
                    public id: string;

                    /** CagNode snapshot. */
                    public snapshot?: (merico.proto.analysis.indicator.ICagSnapshot|null);

                    /** CagNode latestHexsha. */
                    public latestHexsha: string;

                    /** CagNode earliestHexsha. */
                    public earliestHexsha: string;

                    /** CagNode frequentHexsha. */
                    public frequentHexsha: string;

                    /** CagNode inDegree. */
                    public inDegree: number;

                    /** CagNode outDegree. */
                    public outDegree: number;

                    /** CagNode email. */
                    public email: string;

                    /**
                     * Decodes a CagNode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CagNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CagNode;
                }

                /** Properties of a CagEdge. */
                interface ICagEdge {

                    /** CagEdge fromNodeId */
                    fromNodeId?: (string|null);

                    /** CagEdge toNodeId */
                    toNodeId?: (string|null);
                }

                /** Represents a CagEdge. */
                class CagEdge implements ICagEdge {

                    /**
                     * Constructs a new CagEdge.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICagEdge);

                    /** CagEdge fromNodeId. */
                    public fromNodeId: string;

                    /** CagEdge toNodeId. */
                    public toNodeId: string;

                    /**
                     * Decodes a CagEdge message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CagEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CagEdge;
                }

                /** Properties of a Cag. */
                interface ICag {

                    /** Cag nodeCount */
                    nodeCount?: (number|Long|null);

                    /** Cag edgeCount */
                    edgeCount?: (number|Long|null);

                    /** Cag nodes */
                    nodes?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Cag edges */
                    edges?: (merico.proto.analysis.indicator.IStreaming|null);
                }

                /** Represents a Cag. */
                class Cag implements ICag {

                    /**
                     * Constructs a new Cag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICag);

                    /** Cag nodeCount. */
                    public nodeCount: (number|Long);

                    /** Cag edgeCount. */
                    public edgeCount: (number|Long);

                    /** Cag nodes. */
                    public nodes?: (merico.proto.analysis.indicator.IStreaming|null);

                    /** Cag edges. */
                    public edges?: (merico.proto.analysis.indicator.IStreaming|null);

                    /**
                     * Decodes a Cag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Cag;
                }

                /** Properties of a ContributorImpact. */
                interface IContributorImpact {

                    /** ContributorImpact email */
                    email?: (string|null);

                    /** ContributorImpact funcCount */
                    funcCount?: (number|null);

                    /** ContributorImpact funcIds */
                    funcIds?: (string[]|null);
                }

                /** Represents a ContributorImpact. */
                class ContributorImpact implements IContributorImpact {

                    /**
                     * Constructs a new ContributorImpact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IContributorImpact);

                    /** ContributorImpact email. */
                    public email: string;

                    /** ContributorImpact funcCount. */
                    public funcCount: number;

                    /** ContributorImpact funcIds. */
                    public funcIds: string[];

                    /**
                     * Decodes a ContributorImpact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContributorImpact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.ContributorImpact;
                }

                /** Properties of a PackageDependency. */
                interface IPackageDependency {

                    /** PackageDependency name */
                    name?: (string|null);

                    /** PackageDependency version */
                    version?: (string|null);

                    /** PackageDependency source */
                    source?: (string|null);
                }

                /** Represents a PackageDependency. */
                class PackageDependency implements IPackageDependency {

                    /**
                     * Constructs a new PackageDependency.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IPackageDependency);

                    /** PackageDependency name. */
                    public name: string;

                    /** PackageDependency version. */
                    public version: string;

                    /** PackageDependency source. */
                    public source: string;

                    /**
                     * Decodes a PackageDependency message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PackageDependency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.PackageDependency;
                }

                /** Properties of a FileTopic. */
                interface IFileTopic {

                    /** FileTopic filePath */
                    filePath?: (string|null);

                    /** FileTopic topics */
                    topics?: ({ [k: string]: number }|null);
                }

                /** Represents a FileTopic. */
                class FileTopic implements IFileTopic {

                    /**
                     * Constructs a new FileTopic.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IFileTopic);

                    /** FileTopic filePath. */
                    public filePath: string;

                    /** FileTopic topics. */
                    public topics: { [k: string]: number };

                    /**
                     * Decodes a FileTopic message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FileTopic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.FileTopic;
                }

                /** Properties of a FileContribution. */
                interface IFileContribution {

                    /** FileContribution filePath */
                    filePath?: (string|null);

                    /** FileContribution contributions */
                    contributions?: ({ [k: string]: number }|null);
                }

                /** Represents a FileContribution. */
                class FileContribution implements IFileContribution {

                    /**
                     * Constructs a new FileContribution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IFileContribution);

                    /** FileContribution filePath. */
                    public filePath: string;

                    /** FileContribution contributions. */
                    public contributions: { [k: string]: number };

                    /**
                     * Decodes a FileContribution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FileContribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.FileContribution;
                }

                /** Properties of a ManpowerAllocation. */
                interface IManpowerAllocation {

                    /** ManpowerAllocation topic */
                    topic?: (string|null);

                    /** ManpowerAllocation allocations */
                    allocations?: ({ [k: string]: number }|null);
                }

                /** Represents a ManpowerAllocation. */
                class ManpowerAllocation implements IManpowerAllocation {

                    /**
                     * Constructs a new ManpowerAllocation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IManpowerAllocation);

                    /** ManpowerAllocation topic. */
                    public topic: string;

                    /** ManpowerAllocation allocations. */
                    public allocations: { [k: string]: number };

                    /**
                     * Decodes a ManpowerAllocation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManpowerAllocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.ManpowerAllocation;
                }

                /** Properties of a TopicModeling. */
                interface ITopicModeling {

                    /** TopicModeling fileTopics */
                    fileTopics?: (merico.proto.analysis.indicator.IFileTopic[]|null);

                    /** TopicModeling fileContributions */
                    fileContributions?: (merico.proto.analysis.indicator.IFileContribution[]|null);

                    /** TopicModeling manpowerAllocations */
                    manpowerAllocations?: (merico.proto.analysis.indicator.IManpowerAllocation[]|null);
                }

                /** Represents a TopicModeling. */
                class TopicModeling implements ITopicModeling {

                    /**
                     * Constructs a new TopicModeling.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ITopicModeling);

                    /** TopicModeling fileTopics. */
                    public fileTopics: merico.proto.analysis.indicator.IFileTopic[];

                    /** TopicModeling fileContributions. */
                    public fileContributions: merico.proto.analysis.indicator.IFileContribution[];

                    /** TopicModeling manpowerAllocations. */
                    public manpowerAllocations: merico.proto.analysis.indicator.IManpowerAllocation[];

                    /**
                     * Decodes a TopicModeling message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TopicModeling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.TopicModeling;
                }

                /** Properties of an IgnoredRecord. */
                interface IIgnoredRecord {

                    /** IgnoredRecord filePath */
                    filePath?: (string|null);

                    /** IgnoredRecord hexsha */
                    hexsha?: (string|null);

                    /** IgnoredRecord reason */
                    reason?: (string|null);
                }

                /** Represents an IgnoredRecord. */
                class IgnoredRecord implements IIgnoredRecord {

                    /**
                     * Constructs a new IgnoredRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IIgnoredRecord);

                    /** IgnoredRecord filePath. */
                    public filePath: string;

                    /** IgnoredRecord hexsha. */
                    public hexsha: string;

                    /** IgnoredRecord reason. */
                    public reason: string;

                    /**
                     * Decodes an IgnoredRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IgnoredRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.IgnoredRecord;
                }

                /** Properties of a DocCoverage. */
                interface IDocCoverage {

                    /** DocCoverage score */
                    score?: (number|null);

                    /** DocCoverage docCoverageFuncs */
                    docCoverageFuncs?: (merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc[]|null);
                }

                /** Represents a DocCoverage. */
                class DocCoverage implements IDocCoverage {

                    /**
                     * Constructs a new DocCoverage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IDocCoverage);

                    /** DocCoverage score. */
                    public score: number;

                    /** DocCoverage docCoverageFuncs. */
                    public docCoverageFuncs: merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc[];

                    /**
                     * Decodes a DocCoverage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocCoverage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.DocCoverage;
                }

                namespace DocCoverage {

                    /** Properties of a DocCoverageFunc. */
                    interface IDocCoverageFunc {

                        /** DocCoverageFunc funcId */
                        funcId?: (string|null);

                        /** DocCoverageFunc email */
                        email?: (string|null);

                        /** DocCoverageFunc commentCount */
                        commentCount?: (number|null);

                        /** DocCoverageFunc latestHexsha */
                        latestHexsha?: (string|null);

                        /** DocCoverageFunc earliestHexsha */
                        earliestHexsha?: (string|null);
                    }

                    /** Represents a DocCoverageFunc. */
                    class DocCoverageFunc implements IDocCoverageFunc {

                        /**
                         * Constructs a new DocCoverageFunc.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.DocCoverage.IDocCoverageFunc);

                        /** DocCoverageFunc funcId. */
                        public funcId: string;

                        /** DocCoverageFunc email. */
                        public email: string;

                        /** DocCoverageFunc commentCount. */
                        public commentCount: number;

                        /** DocCoverageFunc latestHexsha. */
                        public latestHexsha: string;

                        /** DocCoverageFunc earliestHexsha. */
                        public earliestHexsha: string;

                        /**
                         * Decodes a DocCoverageFunc message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DocCoverageFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.DocCoverage.DocCoverageFunc;
                    }
                }

                /** Properties of a Dryness. */
                interface IDryness {

                    /** Dryness score */
                    score?: (number|null);

                    /** Dryness drynessGroups */
                    drynessGroups?: (merico.proto.analysis.indicator.Dryness.IDrynessGroup[]|null);
                }

                /** Represents a Dryness. */
                class Dryness implements IDryness {

                    /**
                     * Constructs a new Dryness.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IDryness);

                    /** Dryness score. */
                    public score: number;

                    /** Dryness drynessGroups. */
                    public drynessGroups: merico.proto.analysis.indicator.Dryness.IDrynessGroup[];

                    /**
                     * Decodes a Dryness message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dryness
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Dryness;
                }

                namespace Dryness {

                    /** Properties of a DrynessFunc. */
                    interface IDrynessFunc {

                        /** DrynessFunc funcId */
                        funcId?: (string|null);

                        /** DrynessFunc email */
                        email?: (string|null);

                        /** DrynessFunc latestHexsha */
                        latestHexsha?: (string|null);

                        /** DrynessFunc earliestHexsha */
                        earliestHexsha?: (string|null);
                    }

                    /** Represents a DrynessFunc. */
                    class DrynessFunc implements IDrynessFunc {

                        /**
                         * Constructs a new DrynessFunc.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Dryness.IDrynessFunc);

                        /** DrynessFunc funcId. */
                        public funcId: string;

                        /** DrynessFunc email. */
                        public email: string;

                        /** DrynessFunc latestHexsha. */
                        public latestHexsha: string;

                        /** DrynessFunc earliestHexsha. */
                        public earliestHexsha: string;

                        /**
                         * Decodes a DrynessFunc message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DrynessFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Dryness.DrynessFunc;
                    }

                    /** Properties of a DrynessGroup. */
                    interface IDrynessGroup {

                        /** DrynessGroup drynessFuncs */
                        drynessFuncs?: (merico.proto.analysis.indicator.Dryness.IDrynessFunc[]|null);
                    }

                    /** Represents a DrynessGroup. */
                    class DrynessGroup implements IDrynessGroup {

                        /**
                         * Constructs a new DrynessGroup.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Dryness.IDrynessGroup);

                        /** DrynessGroup drynessFuncs. */
                        public drynessFuncs: merico.proto.analysis.indicator.Dryness.IDrynessFunc[];

                        /**
                         * Decodes a DrynessGroup message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DrynessGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Dryness.DrynessGroup;
                    }
                }

                /** Properties of a StaticTestCoverage. */
                interface IStaticTestCoverage {

                    /** StaticTestCoverage score */
                    score?: (number|null);

                    /** StaticTestCoverage coveredFuncs */
                    coveredFuncs?: (merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc[]|null);

                    /** StaticTestCoverage uncoveredFuncs */
                    uncoveredFuncs?: (merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc[]|null);
                }

                /** Represents a StaticTestCoverage. */
                class StaticTestCoverage implements IStaticTestCoverage {

                    /**
                     * Constructs a new StaticTestCoverage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IStaticTestCoverage);

                    /** StaticTestCoverage score. */
                    public score: number;

                    /** StaticTestCoverage coveredFuncs. */
                    public coveredFuncs: merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc[];

                    /** StaticTestCoverage uncoveredFuncs. */
                    public uncoveredFuncs: merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc[];

                    /**
                     * Decodes a StaticTestCoverage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StaticTestCoverage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.StaticTestCoverage;
                }

                namespace StaticTestCoverage {

                    /** Properties of a StaticTestCoverageFunc. */
                    interface IStaticTestCoverageFunc {

                        /** StaticTestCoverageFunc funcId */
                        funcId?: (string|null);

                        /** StaticTestCoverageFunc email */
                        email?: (string|null);

                        /** StaticTestCoverageFunc latestHexsha */
                        latestHexsha?: (string|null);

                        /** StaticTestCoverageFunc earliestHexsha */
                        earliestHexsha?: (string|null);
                    }

                    /** Represents a StaticTestCoverageFunc. */
                    class StaticTestCoverageFunc implements IStaticTestCoverageFunc {

                        /**
                         * Constructs a new StaticTestCoverageFunc.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.StaticTestCoverage.IStaticTestCoverageFunc);

                        /** StaticTestCoverageFunc funcId. */
                        public funcId: string;

                        /** StaticTestCoverageFunc email. */
                        public email: string;

                        /** StaticTestCoverageFunc latestHexsha. */
                        public latestHexsha: string;

                        /** StaticTestCoverageFunc earliestHexsha. */
                        public earliestHexsha: string;

                        /**
                         * Decodes a StaticTestCoverageFunc message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StaticTestCoverageFunc
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.StaticTestCoverage.StaticTestCoverageFunc;
                    }
                }

                /** Properties of a CodeQuality. */
                interface ICodeQuality {

                    /** CodeQuality refreshed */
                    refreshed?: (boolean|null);

                    /** CodeQuality issues */
                    issues?: (merico.proto.analysis.indicator.IStreaming|null);
                }

                /** Represents a CodeQuality. */
                class CodeQuality implements ICodeQuality {

                    /**
                     * Constructs a new CodeQuality.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICodeQuality);

                    /** CodeQuality refreshed. */
                    public refreshed: boolean;

                    /** CodeQuality issues. */
                    public issues?: (merico.proto.analysis.indicator.IStreaming|null);

                    /**
                     * Decodes a CodeQuality message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CodeQuality
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CodeQuality;
                }

                /** Properties of a CodeQualityIssue. */
                interface ICodeQualityIssue {

                    /** CodeQualityIssue key */
                    key?: (string|null);

                    /** CodeQualityIssue rule */
                    rule?: (string|null);

                    /** CodeQualityIssue effort */
                    effort?: (string|null);

                    /** CodeQualityIssue debt */
                    debt?: (string|null);

                    /** CodeQualityIssue type */
                    type?: (string|null);

                    /** CodeQualityIssue severity */
                    severity?: (string|null);

                    /** CodeQualityIssue textRanges */
                    textRanges?: (merico.proto.analysis.indicator.CodeQualityIssue.ITextRange[]|null);

                    /** CodeQualityIssue filePath */
                    filePath?: (string|null);

                    /** CodeQualityIssue email */
                    email?: (string|null);

                    /** CodeQualityIssue hexsha */
                    hexsha?: (string|null);
                }

                /** Represents a CodeQualityIssue. */
                class CodeQualityIssue implements ICodeQualityIssue {

                    /**
                     * Constructs a new CodeQualityIssue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICodeQualityIssue);

                    /** CodeQualityIssue key. */
                    public key: string;

                    /** CodeQualityIssue rule. */
                    public rule: string;

                    /** CodeQualityIssue effort. */
                    public effort: string;

                    /** CodeQualityIssue debt. */
                    public debt: string;

                    /** CodeQualityIssue type. */
                    public type: string;

                    /** CodeQualityIssue severity. */
                    public severity: string;

                    /** CodeQualityIssue textRanges. */
                    public textRanges: merico.proto.analysis.indicator.CodeQualityIssue.ITextRange[];

                    /** CodeQualityIssue filePath. */
                    public filePath: string;

                    /** CodeQualityIssue email. */
                    public email: string;

                    /** CodeQualityIssue hexsha. */
                    public hexsha: string;

                    /**
                     * Decodes a CodeQualityIssue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CodeQualityIssue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CodeQualityIssue;
                }

                namespace CodeQualityIssue {

                    /** Properties of a TextRange. */
                    interface ITextRange {

                        /** TextRange filePath */
                        filePath?: (string|null);

                        /** TextRange startLine */
                        startLine?: (number|null);

                        /** TextRange endLine */
                        endLine?: (number|null);

                        /** TextRange startColumn */
                        startColumn?: (number|null);

                        /** TextRange endColumn */
                        endColumn?: (number|null);

                        /** TextRange errorMsg */
                        errorMsg?: (string|null);
                    }

                    /** Represents a TextRange. */
                    class TextRange implements ITextRange {

                        /**
                         * Constructs a new TextRange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.CodeQualityIssue.ITextRange);

                        /** TextRange filePath. */
                        public filePath: string;

                        /** TextRange startLine. */
                        public startLine: number;

                        /** TextRange endLine. */
                        public endLine: number;

                        /** TextRange startColumn. */
                        public startColumn: number;

                        /** TextRange endColumn. */
                        public endColumn: number;

                        /** TextRange errorMsg. */
                        public errorMsg: string;

                        /**
                         * Decodes a TextRange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.CodeQualityIssue.TextRange;
                    }
                }

                /** Properties of a TechTag. */
                interface ITechTag {

                    /** TechTag commitToPackages */
                    commitToPackages?: (merico.proto.analysis.indicator.TechTag.ICommitToPackage[]|null);
                }

                /** Represents a TechTag. */
                class TechTag implements ITechTag {

                    /**
                     * Constructs a new TechTag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ITechTag);

                    /** TechTag commitToPackages. */
                    public commitToPackages: merico.proto.analysis.indicator.TechTag.ICommitToPackage[];

                    /**
                     * Decodes a TechTag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TechTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.TechTag;
                }

                namespace TechTag {

                    /** Properties of a TokenToFile. */
                    interface ITokenToFile {

                        /** TokenToFile token */
                        token?: (string|null);

                        /** TokenToFile filePath */
                        filePath?: (string|null);

                        /** TokenToFile lineCode */
                        lineCode?: (string|null);
                    }

                    /** Represents a TokenToFile. */
                    class TokenToFile implements ITokenToFile {

                        /**
                         * Constructs a new TokenToFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.TechTag.ITokenToFile);

                        /** TokenToFile token. */
                        public token: string;

                        /** TokenToFile filePath. */
                        public filePath: string;

                        /** TokenToFile lineCode. */
                        public lineCode: string;

                        /**
                         * Decodes a TokenToFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TokenToFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.TechTag.TokenToFile;
                    }

                    /** Properties of a PackageToToken. */
                    interface IPackageToToken {

                        /** PackageToToken package */
                        "package"?: (string|null);

                        /** PackageToToken tokenToFiles */
                        tokenToFiles?: (merico.proto.analysis.indicator.TechTag.ITokenToFile[]|null);
                    }

                    /** Represents a PackageToToken. */
                    class PackageToToken implements IPackageToToken {

                        /**
                         * Constructs a new PackageToToken.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.TechTag.IPackageToToken);

                        /** PackageToToken package. */
                        public package: string;

                        /** PackageToToken tokenToFiles. */
                        public tokenToFiles: merico.proto.analysis.indicator.TechTag.ITokenToFile[];

                        /**
                         * Decodes a PackageToToken message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PackageToToken
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.TechTag.PackageToToken;
                    }

                    /** Properties of a CommitToPackage. */
                    interface ICommitToPackage {

                        /** CommitToPackage hexsha */
                        hexsha?: (string|null);

                        /** CommitToPackage packageToTokens */
                        packageToTokens?: (merico.proto.analysis.indicator.TechTag.IPackageToToken[]|null);
                    }

                    /** Represents a CommitToPackage. */
                    class CommitToPackage implements ICommitToPackage {

                        /**
                         * Constructs a new CommitToPackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.TechTag.ICommitToPackage);

                        /** CommitToPackage hexsha. */
                        public hexsha: string;

                        /** CommitToPackage packageToTokens. */
                        public packageToTokens: merico.proto.analysis.indicator.TechTag.IPackageToToken[];

                        /**
                         * Decodes a CommitToPackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommitToPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.TechTag.CommitToPackage;
                    }
                }

                /** Properties of an Aggregation. */
                interface IAggregation {

                    /** Aggregation byCommitFiles */
                    byCommitFiles?: (merico.proto.analysis.indicator.Aggregation.IByCommitFile[]|null);

                    /** Aggregation byCommits */
                    byCommits?: (merico.proto.analysis.indicator.Aggregation.IByCommit[]|null);

                    /** Aggregation byContributorFiles */
                    byContributorFiles?: (merico.proto.analysis.indicator.Aggregation.IByContributorFile[]|null);

                    /** Aggregation byFiles */
                    byFiles?: (merico.proto.analysis.indicator.Aggregation.IByFile[]|null);

                    /** Aggregation byContributors */
                    byContributors?: (merico.proto.analysis.indicator.Aggregation.IByContributor[]|null);

                    /** Aggregation byContributorModules */
                    byContributorModules?: (merico.proto.analysis.indicator.Aggregation.IByContributorModule[]|null);
                }

                /** Represents an Aggregation. */
                class Aggregation implements IAggregation {

                    /**
                     * Constructs a new Aggregation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.IAggregation);

                    /** Aggregation byCommitFiles. */
                    public byCommitFiles: merico.proto.analysis.indicator.Aggregation.IByCommitFile[];

                    /** Aggregation byCommits. */
                    public byCommits: merico.proto.analysis.indicator.Aggregation.IByCommit[];

                    /** Aggregation byContributorFiles. */
                    public byContributorFiles: merico.proto.analysis.indicator.Aggregation.IByContributorFile[];

                    /** Aggregation byFiles. */
                    public byFiles: merico.proto.analysis.indicator.Aggregation.IByFile[];

                    /** Aggregation byContributors. */
                    public byContributors: merico.proto.analysis.indicator.Aggregation.IByContributor[];

                    /** Aggregation byContributorModules. */
                    public byContributorModules: merico.proto.analysis.indicator.Aggregation.IByContributorModule[];

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation;
                }

                namespace Aggregation {

                    /** Properties of a ByCommitFile. */
                    interface IByCommitFile {

                        /** ByCommitFile hexsha */
                        hexsha?: (string|null);

                        /** ByCommitFile filePath */
                        filePath?: (string|null);

                        /** ByCommitFile devEq */
                        devEq?: (number|null);

                        /** ByCommitFile devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByCommitFile. */
                    class ByCommitFile implements IByCommitFile {

                        /**
                         * Constructs a new ByCommitFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByCommitFile);

                        /** ByCommitFile hexsha. */
                        public hexsha: string;

                        /** ByCommitFile filePath. */
                        public filePath: string;

                        /** ByCommitFile devEq. */
                        public devEq: number;

                        /** ByCommitFile devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByCommitFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByCommitFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByCommitFile;
                    }

                    /** Properties of a ByCommit. */
                    interface IByCommit {

                        /** ByCommit hexsha */
                        hexsha?: (string|null);

                        /** ByCommit devEq */
                        devEq?: (number|null);

                        /** ByCommit devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByCommit. */
                    class ByCommit implements IByCommit {

                        /**
                         * Constructs a new ByCommit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByCommit);

                        /** ByCommit hexsha. */
                        public hexsha: string;

                        /** ByCommit devEq. */
                        public devEq: number;

                        /** ByCommit devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByCommit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByCommit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByCommit;
                    }

                    /** Properties of a ByContributorFile. */
                    interface IByContributorFile {

                        /** ByContributorFile email */
                        email?: (string|null);

                        /** ByContributorFile filePath */
                        filePath?: (string|null);

                        /** ByContributorFile devEq */
                        devEq?: (number|null);

                        /** ByContributorFile devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByContributorFile. */
                    class ByContributorFile implements IByContributorFile {

                        /**
                         * Constructs a new ByContributorFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByContributorFile);

                        /** ByContributorFile email. */
                        public email: string;

                        /** ByContributorFile filePath. */
                        public filePath: string;

                        /** ByContributorFile devEq. */
                        public devEq: number;

                        /** ByContributorFile devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByContributorFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByContributorFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByContributorFile;
                    }

                    /** Properties of a ByFile. */
                    interface IByFile {

                        /** ByFile filePath */
                        filePath?: (string|null);

                        /** ByFile devEq */
                        devEq?: (number|null);

                        /** ByFile devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByFile. */
                    class ByFile implements IByFile {

                        /**
                         * Constructs a new ByFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByFile);

                        /** ByFile filePath. */
                        public filePath: string;

                        /** ByFile devEq. */
                        public devEq: number;

                        /** ByFile devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByFile;
                    }

                    /** Properties of a ByContributor. */
                    interface IByContributor {

                        /** ByContributor email */
                        email?: (string|null);

                        /** ByContributor devEq */
                        devEq?: (number|null);

                        /** ByContributor devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByContributor. */
                    class ByContributor implements IByContributor {

                        /**
                         * Constructs a new ByContributor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByContributor);

                        /** ByContributor email. */
                        public email: string;

                        /** ByContributor devEq. */
                        public devEq: number;

                        /** ByContributor devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByContributor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByContributor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByContributor;
                    }

                    /** Properties of a ByContributorModule. */
                    interface IByContributorModule {

                        /** ByContributorModule email */
                        email?: (string|null);

                        /** ByContributorModule module */
                        module?: (string|null);

                        /** ByContributorModule devEq */
                        devEq?: (number|null);

                        /** ByContributorModule devRank */
                        devRank?: (number|null);
                    }

                    /** Represents a ByContributorModule. */
                    class ByContributorModule implements IByContributorModule {

                        /**
                         * Constructs a new ByContributorModule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Aggregation.IByContributorModule);

                        /** ByContributorModule email. */
                        public email: string;

                        /** ByContributorModule module. */
                        public module: string;

                        /** ByContributorModule devEq. */
                        public devEq: number;

                        /** ByContributorModule devRank. */
                        public devRank: number;

                        /**
                         * Decodes a ByContributorModule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ByContributorModule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Aggregation.ByContributorModule;
                    }
                }

                /** Properties of a Commit. */
                interface ICommit {

                    /** Commit hexsha */
                    hexsha?: (string|null);

                    /** Commit author */
                    author?: (merico.proto.analysis.indicator.Commit.ISignature|null);

                    /** Commit committer */
                    committer?: (merico.proto.analysis.indicator.Commit.ISignature|null);

                    /** Commit message */
                    message?: (string|null);

                    /** Commit parents */
                    parents?: (string[]|null);

                    /** Commit insertions */
                    insertions?: (number|null);

                    /** Commit deletions */
                    deletions?: (number|null);
                }

                /** Represents a Commit. */
                class Commit implements ICommit {

                    /**
                     * Constructs a new Commit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ICommit);

                    /** Commit hexsha. */
                    public hexsha: string;

                    /** Commit author. */
                    public author?: (merico.proto.analysis.indicator.Commit.ISignature|null);

                    /** Commit committer. */
                    public committer?: (merico.proto.analysis.indicator.Commit.ISignature|null);

                    /** Commit message. */
                    public message: string;

                    /** Commit parents. */
                    public parents: string[];

                    /** Commit insertions. */
                    public insertions: number;

                    /** Commit deletions. */
                    public deletions: number;

                    /**
                     * Decodes a Commit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Commit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Commit;
                }

                namespace Commit {

                    /** Properties of a Signature. */
                    interface ISignature {

                        /** Signature email */
                        email?: (string|null);

                        /** Signature name */
                        name?: (string|null);

                        /** Signature time */
                        time?: (number|null);

                        /** Signature offset */
                        offset?: (number|null);
                    }

                    /** Represents a Signature. */
                    class Signature implements ISignature {

                        /**
                         * Constructs a new Signature.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: merico.proto.analysis.indicator.Commit.ISignature);

                        /** Signature email. */
                        public email: string;

                        /** Signature name. */
                        public name: string;

                        /** Signature time. */
                        public time: number;

                        /** Signature offset. */
                        public offset: number;

                        /**
                         * Decodes a Signature message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Signature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.Commit.Signature;
                    }
                }

                /** Properties of a LineDiffEdit. */
                interface ILineDiffEdit {

                    /** LineDiffEdit filePath */
                    filePath?: (string|null);

                    /** LineDiffEdit hexsha */
                    hexsha?: (string|null);

                    /** LineDiffEdit email */
                    email?: (string|null);

                    /** LineDiffEdit insertions */
                    insertions?: (number|null);

                    /** LineDiffEdit deletions */
                    deletions?: (number|null);

                    /** LineDiffEdit devEq */
                    devEq?: (number|null);

                    /** LineDiffEdit devRank */
                    devRank?: (number|null);

                    /** LineDiffEdit language */
                    language?: (string|null);
                }

                /** Represents a LineDiffEdit. */
                class LineDiffEdit implements ILineDiffEdit {

                    /**
                     * Constructs a new LineDiffEdit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: merico.proto.analysis.indicator.ILineDiffEdit);

                    /** LineDiffEdit filePath. */
                    public filePath: string;

                    /** LineDiffEdit hexsha. */
                    public hexsha: string;

                    /** LineDiffEdit email. */
                    public email: string;

                    /** LineDiffEdit insertions. */
                    public insertions: number;

                    /** LineDiffEdit deletions. */
                    public deletions: number;

                    /** LineDiffEdit devEq. */
                    public devEq: number;

                    /** LineDiffEdit devRank. */
                    public devRank: number;

                    /** LineDiffEdit language. */
                    public language: string;

                    /**
                     * Decodes a LineDiffEdit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LineDiffEdit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merico.proto.analysis.indicator.LineDiffEdit;
                }
            }
        }
    }
}
