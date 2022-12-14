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

class Cpe extends OkitResource {
    static get def() {return `
    <g>
        <path fill="#312D2A" d="M53.4,17.5v26.9v8v7.5c0.4,0,0.9,0,1.3,0c2.3,0,4.6,0.3,6.7,0.9v-8.3h67.6v18.2H75.4
            c1.8,2.6,3.1,5.5,3.9,8.6h49.8v18.2H76.7c-1.8,3.2-4.2,5.9-7.2,8h67.5V79.2v-8.6V52.4v-8V17.5H53.4z M129.1,44.4H61.4V25.5h67.6
            V44.4z"/>
        <g>
            <g>
                <g>
                    <circle fill="#312D2A" cx="117.1" cy="88.6" r="3.3"/>
                </g>
                <g>
                    <circle fill="#312D2A" cx="117.1" cy="61.8" r="3.3"/>
                </g>
                <g>
                    <circle fill="#312D2A" cx="117.1" cy="35.4" r="3.3"/>
                </g>
            </g>
            <g>
                <g>
                    <path fill="#312D2A" d="M54.7,105.4c-11.5,0-20.8-9.3-20.8-20.8c0-11.5,9.3-20.8,20.8-20.8c11.5,0,20.8,9.3,20.8,20.8
                        C75.6,96.1,66.2,105.4,54.7,105.4z M54.7,72.8c-6.5,0-11.8,5.3-11.8,11.8c0,6.5,5.3,11.8,11.8,11.8s11.8-5.3,11.8-11.8
                        C66.6,78.1,61.3,72.8,54.7,72.8z"/>
                </g>
                <g>
                    <path fill="#312D2A" d="M87.6,144.9h-9V139c0-11.6-9.4-21-21-21h-5.8c-11.6,0-21,9.4-21,21v5.8h-9V139c0-16.5,13.4-30,30-30h5.8
                        c16.5,0,30,13.4,30,30V144.9z"/>
                </g>
            </g>
        </g>
    </g>
    `}
    
    // Function Getters
}

export default Cpe
export { Cpe }
