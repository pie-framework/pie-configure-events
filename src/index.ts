export class ModelUpdatedEvent extends CustomEvent {
  constructor(readonly update: any, readonly reset: boolean = false) {
    super('model.updated', { bubbles: true, detail: { update, reset } });
  }
}

export type DeleteDone = (e?: Error) => void;

export class DeleteImageEvent extends CustomEvent {
  constructor(readonly src: string, readonly done: DeleteDone) {
    super('delete.image', { bubbles: true, detail: { src, done } });
  }
}

export interface ImageHandler {
  cancel: () => void;
  done: (err?: Error, src?: string) => void;
  fileChosen: (file: File) => void;
  progress: (percent: number, bytes: number, total: number) => void;
}

export class InsertImageEvent extends CustomEvent {
  constructor(readonly handler: ImageHandler) {
    super('insert.image', { bubbles: true, detail: handler });
  }
}
