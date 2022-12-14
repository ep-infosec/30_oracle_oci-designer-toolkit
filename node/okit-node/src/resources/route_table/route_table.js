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

class RouteTable extends OkitResource {
    static get def() {return `
    <g>
        <path fill="#312D2A" d="M58.4,32.1h-9.8H20.4v29.5v9.2v20.4v9.2v29.5h28.3h9.8h83.8v-29.5v-9.2V70.8v-9.2V32.1H58.4z M48.6,120.9
            H29.4v-20.5h19.3V120.9z M48.6,91.2H29.4V70.8h19.3V91.2z M48.6,61.7H29.4V41.1h19.3V61.7z M133.3,120.9H58.4v-20.5h74.8V120.9z
            M133.3,91.2H58.4V70.8h74.8V91.2z M133.3,61.7H58.4V41.1h74.8V61.7z"/>
        <polygon fill="#312D2A" points="68.4,58.3 70.9,53.8 73.5,58.3 77.9,58.3 73.6,51.3 77.7,44.8 73.3,44.8 70.9,48.9 68.5,44.8 
            64.1,44.8 68.2,51.3 63.9,58.3 	"/>
        <rect x="80" y="55.1" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="91.4,58.3 93.9,53.8 96.5,58.3 100.8,58.3 96.5,51.3 100.6,44.8 96.3,44.8 93.9,48.9 91.4,44.8 
            87.1,44.8 91.1,51.3 86.9,58.3 	"/>
        <rect x="102.2" y="55.1" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="112.8,58.3 115.3,53.8 117.9,58.3 122.2,58.3 117.9,51.3 122,44.8 117.7,44.8 115.3,48.9 
            112.8,44.8 108.5,44.8 112.5,51.3 108.3,58.3 	"/>
        <rect x="123.6" y="55.1" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="68.4,87.8 70.9,83.4 73.5,87.8 77.9,87.8 73.6,80.9 77.7,74.4 73.3,74.4 70.9,78.5 68.5,74.4 
            64.1,74.4 68.2,80.8 63.9,87.8 	"/>
        <rect x="80" y="84.6" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="91.4,87.8 93.9,83.4 96.5,87.8 100.8,87.8 96.5,80.9 100.6,74.4 96.3,74.4 93.9,78.5 91.4,74.4 
            87.1,74.4 91.1,80.8 86.9,87.8 	"/>
        <rect x="102.2" y="84.6" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="112.8,87.8 115.3,83.4 117.9,87.8 122.2,87.8 117.9,80.9 122,74.4 117.7,74.4 115.3,78.5 
            112.8,74.4 108.5,74.4 112.5,80.8 108.3,87.8 	"/>
        <rect x="123.6" y="84.6" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="68.4,117.4 70.9,112.9 73.5,117.4 77.9,117.4 73.6,110.4 77.7,103.9 73.3,103.9 70.9,108 
            68.5,103.9 64.1,103.9 68.2,110.3 63.9,117.4 	"/>
        <rect x="80" y="114.2" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="91.4,117.4 93.9,112.9 96.5,117.4 100.8,117.4 96.5,110.4 100.6,103.9 96.3,103.9 93.9,108 
            91.4,103.9 87.1,103.9 91.1,110.3 86.9,117.4 	"/>
        <rect x="102.2" y="114.2" fill="#312D2A" width="3.9" height="3.2"/>
        <polygon fill="#312D2A" points="112.8,117.4 115.3,112.9 117.9,117.4 122.2,117.4 117.9,110.4 122,103.9 117.7,103.9 115.3,108 
            112.8,103.9 108.5,103.9 112.5,110.3 108.3,117.4 	"/>
        <rect x="123.6" y="114.2" fill="#312D2A" width="3.9" height="3.2"/>
    </g>
    `}
    
    // Function Getters
    get parent_id() {return this.view.all_resources.find(resource => resource.id === this.vcn_id && resource.compartment_id === this.compartment_id) ? this.vcn_id : this.compartment_id}
}

export default RouteTable
export { RouteTable }
