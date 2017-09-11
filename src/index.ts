export class ModelUpdatedEvent extends CustomEvent {

  static TYPE = 'model.updated';

  constructor(readonly update: any, readonly reset: boolean = false) {
    super(ModelUpdatedEvent.TYPE, { bubbles: true, detail: { update, reset } });
  }
}

export type DeleteDone = (e?: Error) => void;

export class DeleteImageEvent extends CustomEvent {

  static TYPE = 'delete.image';

  constructor(readonly src: string, readonly done: DeleteDone) {
    super(DeleteImageEvent.TYPE, { bubbles: true, detail: { src, done } });
  }
}

export interface ImageHandler {
  cancel: () => void;
  done: (err?: Error, src?: string) => void;
  fileChosen: (file: File) => void;
  progress: (percent: number, bytes: number, total: number) => void;
}

export class InsertImageEvent extends CustomEvent {
  static TYPE = 'insert.image';

  constructor(readonly handler: ImageHandler) {
    super(InsertImageEvent.TYPE, { bubbles: true, detail: handler });
  }
}
