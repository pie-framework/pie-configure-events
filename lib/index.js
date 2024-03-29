"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelUpdatedEvent extends CustomEvent {
    constructor(update, reset = false) {
        super(ModelUpdatedEvent.TYPE, { bubbles: true, detail: { update, reset } });
        this.update = update;
        this.reset = reset;
    }
}
ModelUpdatedEvent.TYPE = 'model.updated';
exports.ModelUpdatedEvent = ModelUpdatedEvent;
class DeleteImageEvent extends CustomEvent {
    constructor(src, done) {
        super(DeleteImageEvent.TYPE, { bubbles: true, detail: { src, done } });
        this.src = src;
        this.done = done;
    }
}
DeleteImageEvent.TYPE = 'delete.image';
exports.DeleteImageEvent = DeleteImageEvent;
class InsertImageEvent extends CustomEvent {
    constructor(handler) {
        super(InsertImageEvent.TYPE, { bubbles: true, detail: handler });
        this.handler = handler;
    }
}
InsertImageEvent.TYPE = 'insert.image';
exports.InsertImageEvent = InsertImageEvent;
class DeleteSoundEvent extends CustomEvent {
    constructor(src, done) {
        super(DeleteSoundEvent.TYPE, { bubbles: true, detail: { src, done } });
        this.src = src;
        this.done = done;
    }
}
DeleteSoundEvent.TYPE = 'delete.sound';
exports.DeleteSoundEvent = DeleteSoundEvent;
class InsertSoundEvent extends CustomEvent {
    constructor(handler) {
        super(InsertSoundEvent.TYPE, { bubbles: true, detail: handler });
        this.handler = handler;
    }
}
InsertSoundEvent.TYPE = 'insert.sound';
exports.InsertSoundEvent = InsertSoundEvent;
//# sourceMappingURL=index.js.map