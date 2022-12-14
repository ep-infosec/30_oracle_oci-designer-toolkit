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

import { OkitResource } from '../okit_resource.js'

class IpsecConnection extends OkitResource {
    static get def() {return `
    <g>
        <path fill="#312D2A" d="M92.3,111.8H69.5l2.7-19.4c-3.4-2.6-5.3-6.6-5.3-10.9c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1
        l0,0.1c-0.1,4.2-2,8.1-5.3,10.8L92.3,111.8z M76.4,105.8h9.1l-2.2-16.4l1.7-1c2.5-1.5,4-4.1,4.1-6.9c0-4.4-3.7-8-8.1-8
        c-4.4,0-8.1,3.6-8.1,8.1c0,2.9,1.5,5.4,4,6.9l1.7,1L76.4,105.8z M146.7,80.8L126,64.4v13.4h-6.3l0-24.7h-13.6v-5.2
        c0-13.4-11.3-24.3-25.2-24.3c-13.9,0-25.2,10.9-25.2,24.3v5.2H42.2v24.7h-6.5V64.4L15,80.8l20.7,16.6V84.8h6.5v31.1L81,133.2
        l38.6-18.3l0-30.1h6.3v12.6L146.7,80.8z M131,74.7l7.7,6.1L131,87V74.7z M30.7,87L23,80.8l7.7-6.1V87z M63.8,47.9
        c0-9,7.7-16.3,17.2-16.3s17.2,7.3,17.2,16.3v5.2H63.8V47.9z M111.6,109.8l-30.7,14.6l-30.7-13.7V61.1h61.5L111.6,109.8z M107.9,76.8
        h-3.7v9h3.7V76.8z M100.9,76.8h-3.7v9h3.7V76.8z M64.1,76.8h-3.7v9h3.7V76.8z M57.1,76.8h-3.7v9h3.7V76.8z"/>
    </g>
    `}
    
    // Function Getters
    // -- Connections
    get connections() {return this.view.all_resources.filter(resource => this.drg_id === resource.id || this.cpe_id === resource.id)}

}

export default IpsecConnection
export { IpsecConnection }
