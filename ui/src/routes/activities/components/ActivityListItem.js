import React from 'react'
import {Row,Col} from 'react-bootstrap'
import TitleLabel from '../../common/components/TitleLabel'
import { Link } from 'react-router'

export default ({activity, includeHyperlinks}) => {
    const compareSegmentsLink = '/compareSegments/' + activity.id
    const compareSegments = activity.hasSegments ? <Link className='m-r-2' to={compareSegmentsLink}>Compare Segments</Link> : undefined
    const routeProfileLink = '/routeProfile/' + activity.id
    const routeProfile = activity.hasSegments ? <Link className='m-r-2' to={routeProfileLink}>3D Route Profile</Link> : undefined
    const Checkbox = props => (
        <input type="checkbox" {...props} />
      )
    return <div className='m-b-3'>
        <Row>
            <label>
                <Checkbox
                />
                <span>{activity.startDate.toDateString()} - {Math.floor(activity.distance/100)/10} km - {Math.floor(activity.averageSpeed*10)/10} kmph</span>
                </label>

            {/* <Col xs={10}>{activity.startDate.toDateString()}</Col> */}
                {/* <table className='table-bordered'>
                    <thead>
                        <th width="0"><span className='m-r'><em>Date</em></span></th>
                        <th width="0"><span className='m-r'><em>Distance</em></span></th>
                        <th width="0"><span className='m-r'><em>Avg Speed</em></span></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="0"><span className='m-r'>{activity.startDate.toDateString()}</span></td>
                            <td width="0"><span className='m-r'>{Math.floor(activity.distance/100)/10} km</span></td>
                            <td width="0"><span className='m-r'>{Math.floor(activity.averageSpeed*10)/10} kph</span></td>
                        </tr>
                    </tbody>
                </table> */}
            {/* <Col xs={10}>{Math.floor(activity.distance/100)/10} km</Col> */}
            {/* <Col xs={10}>{Math.floor(activity.averageSpeed*10)/10} kmph</Col> */}
        </Row>
    </div>
}