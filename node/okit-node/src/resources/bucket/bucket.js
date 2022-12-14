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

class Bucket extends OkitResource {
    static get def() {return `
	<g>
        <path fill="#312D2A" d="M153.1,152.5H9.4V26.8h143.8V152.5z M18.4,143.5h125.8V35.8H18.4V143.5z M152.6,9.1H8.9v9h143.8V9.1z
        M115.5,87.4l-23.9,0L79.7,66.7l12-20.7l23.9,0l11.9,20.7L115.5,87.4z M95.7,80.4l15.8,0l7.9-13.7l-7.9-13.7l-15.8,0l-7.9,13.7
        L95.7,80.4z M80.3,134.9c-11.3,0-20.6-9.2-20.6-20.6s9.2-20.6,20.6-20.6s20.6,9.2,20.6,20.6S91.6,134.9,80.3,134.9z M80.3,100.8
        c-7.5,0-13.6,6.1-13.6,13.6s6.1,13.6,13.6,13.6c7.5,0,13.6-6.1,13.6-13.6S87.7,100.8,80.3,100.8z M79.5,86.3H33.7l22.8-41.7
        L79.5,86.3z M45.5,79.3h22.2L56.5,59.2L45.5,79.3z"/>
	</g>
    `}
    
    // Function Getters
}

export default Bucket
export { Bucket }
