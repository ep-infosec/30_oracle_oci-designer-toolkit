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

class InternetGateway extends OkitResource {
    static get def() {return `
    <g>
        <rect x="77.4" y="71.9" fill="#312D2A" width="6.3" height="2.8"/>
        <rect x="77.4" y="66.3" fill="#312D2A" width="6.3" height="2.8"/>
        <path fill="#312D2A" d="M104.7,29.4c-2.4-4.7-7.9-10.2-17.3-8.8c-3.5-3.5-10.2-7.4-18.8-4.9c-1.4,0.3-7.8,2.4-11.1,10.5
            C52,27.5,44.1,32,42.2,42.8l0,0.2c0,0.3-1,8.1,3.9,14.1c3.1,3.8,7.7,5.9,13.6,6.4l0.1,0l42.5,0c0.1,0,0.2,0,0.2,0
            c5,0,14.8-3.3,16.9-16.2l0-0.4C119.9,41.6,117.1,31.6,104.7,29.4z M102.4,55.9H83.5v-9.4h9.4L80.4,30.4L68.3,46.6h8.9v9.4H60.1
            c-3.7-0.3-6.4-1.5-8.1-3.6c-2.7-3.2-2.4-7.8-2.3-8.4c1.8-9.6,10-10.6,10.9-10.7l2.6-0.2l0.7-2.5c1.8-6.4,6.2-7.5,6.3-7.5l0.3-0.1
            c7.5-2.2,11.8,3.3,12.2,3.9l1.5,2.2l2.5-0.7c8.5-2.2,11.1,4.3,11.6,5.6l0.8,2.4l2.5,0.2c9.8,0.8,10.3,7.9,10.3,9.6
            C110.3,55.7,103.3,55.9,102.4,55.9z"/>
        <polygon fill="#312D2A" points="74.3,100.6 77.5,100.6 77.5,123.4 74.2,123.4 80.6,135 87,123.4 83.8,123.4 83.8,100.6 87,100.6 
            80.6,89.1 	"/>
        <path fill="#312D2A" d="M80.5,77.1c-19,0-34.5,15.7-34.5,35s15.5,35,34.5,35c19,0,34.5-15.7,34.5-35S99.5,77.1,80.5,77.1z
            M86.4,112.1l11.6,6.4v-3.2h9.2c-1.5,13.7-13,24.4-26.8,24.4c-13.9,0-25.3-10.7-26.8-24.4h9.7v3.2L75,112l-11.6-6.4v3.2h-9.7
            c1.6-13.6,13-24.3,26.8-24.3c13.8,0,25.2,10.6,26.8,24.3H98v-3.2L86.4,112.1z"/>
    </g>
   `}
    
    // Function Getters
    get parent_id() {return this.view.all_resources.find(resource => resource.id === this.vcn_id && resource.compartment_id === this.compartment_id) ? this.vcn_id : this.compartment_id}
}

export default InternetGateway
export { InternetGateway }
