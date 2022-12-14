/*
** Copyright (c) 2020, 2022, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Author: Andrew Hopkinson
*/

/*
** Author: Andrew Hopkinson
*/

import { OkitContainerResource } from '../okit_resource.js'

class NodePool extends OkitContainerResource {
    static get def() {return `
    <g>
        <path fill="#ff6600" d="M152.8,152.9H9V9.2h143.8V152.9z M18,143.9h125.8V18.2H18V143.9z M129.1,132.3H32.9V97.4h96.3V132.3z
        M41.9,123.3h78.3v-16.9H41.9V123.3z M105.8,110.2c-2.6,0-4.7,2.1-4.7,4.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7
        C110.5,112.3,108.4,110.2,105.8,110.2z M33.1,90h42.6V63.9H33.1V90z M50.4,83V70.9h7.7V83H50.4z M68.7,83h-6.6V70.9h6.6V83z
        M40.1,70.9h6.3V83h-6.3V70.9z M33.1,57h42.6V30.8H33.1V57z M50.4,50V37.8h7.7V50H50.4z M68.7,50h-6.6V37.8h6.6V50z M40.1,37.8h6.3
        V50h-6.3V37.8z M86.8,90h42.6V63.9H86.8V90z M104,83V70.9h7.7V83H104z M122.3,83h-6.6V70.9h6.6V83z M93.8,70.9h6.2V83h-6.2V70.9z
        M86.8,30.8V57h42.6V30.8H86.8z M111.7,37.8V50H104V37.8H111.7z M93.8,37.8h6.2V50h-6.2V37.8z M122.3,50h-6.6V37.8h6.6V50z"/>
    </g>
   `}

    // -- Child Positioning
    bottom_children = [resources.Instance.name]
   
    // Function Getters
    get parent_id() {return undefined}
}

export default NodePool
export { NodePool }
