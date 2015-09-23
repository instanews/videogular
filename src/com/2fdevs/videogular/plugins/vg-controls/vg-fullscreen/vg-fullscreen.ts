import {Component, View, LifecycleEvent, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-fullscreen',
    properties: [
        'targetId: for'
    ],
    host: {
        '(click)': 'onClick()'
    },
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-fullscreen/vg-fullscreen.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgFullscreen {

    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    onClick() {
        var element = this.target;

        if (this.target instanceof VgAPI) {
            element = null;
        }

        this.API.toggleFullscreen(element);
    }
}