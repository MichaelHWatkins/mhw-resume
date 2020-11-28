import React from 'react'
import TopBar from './TopBar'

const WorkContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundWork'>
        <div className='row'>
          <div className='bgwork col-xs-12 col-lg-3'>
            <h4>Contractor</h4>
            <p>Independent</p>
            <h4>July 2016 - August 2018</h4>
          </div>
          <div className='bgworktext col-xs-12 col-lg-8'>
            <p>Explored employment options, met with professionals in diverse industries and refocused efforts on future employment and goal setting.</p>
            <p> Volunteered at non-profits and worked temporarily at several for-profit organizations completing coordination and administrative tasks.</p>
          </div>
        </div>
        <div className='row'>
          <div className='bgwork col-xs-12  col-lg-3'>
            <h4>Contractor</h4>
            <p>Phil Watkins Public Affairs</p>
            <h4>July 2015 - August 2016</h4>
          </div>
          <div className='bgworktext col-xs-12 col-lg-8'>
            <p>Oversaw responsibilities for closing my deceased father’s public affairs and lobbying business</p>
            <p>Communicated with attorneys, lobbyists, public and private sector clients to provide final reports on state legislative action and expenses</p>
            <p>Finalized billings to clients and oversaw the collection of contractual obligations</p>
            <p>Terminated bank accounts, reconciled and generated accounting reports for accountant.</p>
            <p>Arranged for the liquidation and donation of equipment and inventory to various sources</p>
            <p>Compiled information for final federal and state business </p>
            <p>Canceled licenses, business credit cards and subscriptions</p>
            <p>Assisted with all clerical tasks including closing files and responding to mail</p>
          </div>
        </div>
        <div className='row'>
          <div className='bgwork col-xs-12 col-lg-3'>
            <h4>District Representative</h4>
            <p>District Office of Congressman Newhouse</p>
            <h4>January 2015 - July 2015</h4>
          </div>
          <div className='bgworktext col-xs-12 col-lg-8'>
            <p>Researched federal regulations for energy, health care, technology and more in preparation for weekly constituent meetings </p>
            <p>Maintained database of district media coverage </p>
            <p>Wrote daily executive reports relating to district activity </p>
            <p>Coordinated district meetings and assisted businesses and constituents </p>
            <p>Collaborated with stakeholders to create a brand for the Congressman outlining his beliefs, stance on specific issues, and debated national policies </p>
            <p>Represented the Congressman at events when he was not available </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkContainer
