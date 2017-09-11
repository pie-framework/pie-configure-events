export declare class ModelUpdatedEvent extends CustomEvent {
    readonly update: any;
    readonly reset: boolean;
    static TYPE: string;
    constructor(update: any, reset?: boolean);
}
export declare type DeleteDone = (e?: Error) => void;
export declare class DeleteImageEvent extends CustomEvent {
    readonly src: string;
    readonly done: DeleteDone;
    static TYPE: string;
    constructor(src: string, done: DeleteDone);
}
export interface ImageHandler {
    cancel: () => void;
    done: (err?: Error, src?: string) => void;
    fileChosen: (file: File) => void;
    progress: (percent: number, bytes: number, total: number) => void;
}
export declare class InsertImageEvent extends CustomEvent {
    readonly handler: ImageHandler;
    static TYPE: string;
    constructor(handler: ImageHandler);
}
