'use strict';

class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe (funct) {
        this.observers = this.observers.push(funct);
    }

    unsubscribe (funct) {
        this.observers = this.observers.filter(subscribe => subscribe !== funct);
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}
