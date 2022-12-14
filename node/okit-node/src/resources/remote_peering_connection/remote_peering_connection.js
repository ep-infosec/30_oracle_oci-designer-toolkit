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

class RemotePeeringConnection extends OkitResource {
    static get def() {return `
    <g>
        <g>
            <g>
                <g>
                    <path fill="#312D2A" d="M38.8,64.1C38.8,39.2,59,19,83.9,19c5.6,0,10.9,1,15.8,2.9c2.6-3.7,5.9-5.5,8-6.3
                        C100.5,12,92.4,10,83.9,10c-29.8,0-54.1,24.3-54.1,54.1c0,1,0,2.1,0.1,3.1h9C38.8,66.2,38.8,65.1,38.8,64.1z"/>
                    <path fill="#312D2A" d="M137.5,62.4l-8.6,0c0,0.6,0,1.2,0,1.8c0,12.3-5,23.5-13,31.7v11.9c13.3-9.9,22-25.7,22-43.5
                        c0-0.6,0-1.1,0-1.7c-0.1,0-0.2,0-0.2,0C137.6,62.4,137.6,62.4,137.5,62.4z"/>
                </g>
            </g>
            <g>
                <path fill="#312D2A" d="M137.7,59c-0.1,0-0.2,0-0.3,0l-34.4-0.2c-5-0.4-8.9-2.3-11.6-5.5c-4.1-5.1-3.4-11.4-3.3-12.1l0-0.2
                    c1.6-8.9,7.9-12.7,12.6-14c2.5-5.6,6.9-7.9,9.5-8.5c7.7-2.2,13,1.4,15.6,3.9c4.5-0.5,8.6,0.8,11.6,3.9c1.2,1.2,2,2.4,2.6,3.5
                    c6.3,1.2,9.3,4.9,10.8,7.9c1.7,3.5,1.5,6.8,1.5,7.2l0,0.4C150.4,56.1,142.1,59,137.7,59z M103.6,50.8l34,0.2
                    c0.9,0,5.6-0.4,6.8-6.9c0-1.6-0.5-6.1-7.4-6.7l-2.7-0.2l-0.8-2.6c-1.7-5.1-6.7-4.3-8.1-3.9l-2.7,0.7l-1.6-2.3
                    c-0.3-0.4-3.4-4.4-8.8-2.8l-0.3,0.1c-0.5,0.2-3.2,1.1-4.4,5.4l-0.8,2.7l-2.8,0.2c-0.6,0.1-6.6,0.8-7.9,7.7c0,0.5-0.2,3.8,1.6,6
                    C99,49.7,100.9,50.6,103.6,50.8z"/>
            </g>
        </g>
        <g>
            <g>
                <circle fill="#312D2A" cx="67.7" cy="136.6" r="3"/>
            </g>
            <g>
                <circle fill="#312D2A" cx="67.7" cy="112.4" r="3"/>
            </g>
            <g>
                <circle fill="#312D2A" cx="67.7" cy="88.6" r="3"/>
            </g>
        </g>
        <g>
            <g>
                <circle fill="#312D2A" cx="99.4" cy="128.2" r="2"/>
            </g>
            <g>
                <circle fill="#312D2A" cx="99.4" cy="112.3" r="2"/>
            </g>
            <path fill="#312D2A" d="M86.5,85.4V71.6H9.4v24.2v9v14.6v9.6v23.6h77.1v-13.8h25.3v-15.6v-6.4v-9.6v-6V85.4H86.5z M77.5,143.6
                H18.4V129h59.1V143.6z M77.5,119.4H18.4v-14.6h59.1V119.4z M77.5,95.8H18.4V80.6h59.1V95.8z M105.8,132.8H86.5V129v-5.7h19.3
                V132.8z M105.8,116.9H86.5v-9.6h19.3V116.9z M105.8,101.3H86.5v-5.5v-4.4h19.3V101.3z"/>
            <g>
                <circle fill="#312D2A" cx="99.4" cy="96.7" r="2"/>
            </g>
        </g>
    </g>
   `}
    
    // Function Getters
    // -- Connections
    get connections() {return this.view.all_resources.filter(resource => this.drg_id === resource.id)}
}

export default RemotePeeringConnection
export { RemotePeeringConnection }
