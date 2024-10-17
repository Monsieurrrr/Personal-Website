import React from 'react'
import mockup1 from '../assets/MockUp/notes 1.png'

export default function HeadSection() {
  return (
    <div>
      
      <div className='headSection'>
        <div className='head-wrapper'>
          <h1>UI/UX Design for Apply Voucher Feature in Veterinary POS</h1>
          <p>Following a user-centered approach, the purpose was to create an intuitive and user-friendly interface for the point of sales app that combines elements of simplicity and innovation. As a result, it brings convenience and efficiency to the process of using vouchers at checkout for veterinary clinic cashiers and customers.</p>
        </div>

        <div><h1 className="title-case">Timeline</h1></div>

        <div className='timeline-wrapper'>
      
        <div className='timeline'>
          <div className="timeline-point"></div>
          <div className='timeline-pipe'></div>
          <div className="timeline-point"></div>
          <div className='timeline-pipe'></div>
          <div className="timeline-point"></div>
          <div className='timeline-pipe'></div>
          <div className='timeline-point'></div>
        </div>

        <div className="timeline-text">
          <div className='timeline-text-wrapper'>
            <h4>Emphaty</h4>
            <p>18 Jul - 2 Aug</p>
          </div>
      
          <div  className='timeline-text-wrapper'>
            <h4>Define</h4>
            <p>5 Aug - 16 Aug</p>
          </div>

          <div  className='timeline-text-wrapper'>
            <h4>Ideate</h4>
            <p>19 Aug - 30 Aug</p>
          </div>

          <div  className='timeline-text-wrapper'>
            <h4>Prototype</h4>
            <p>2 Sep - 18 Oct</p>
          </div>
        </div>
        </div>

        <div className='img-wrapper mockup'>
          <img src={mockup1} alt="" />
        </div>

        <div className='overview-container'>

          <div className="overview-atas">
            <div className="overview-wrap-text-atas">
              <h2>Headquarter</h2>
              <p>Yogyakarta</p>
            </div>

            <div className="overview-wrap-text-atas">
              <h2>Founded</h2>
              <p>2022</p>
            </div>

            <div className="overview-wrap-text-atas">
              <h2>Industry</h2>
              <p>Software House</p>
            </div>
          </div>

          <div className="overview-bawah">
            <div className="overview-wrap-text-bawah mobile-text">
              <h1>Brief</h1>
              <p>NOTES is a specialized POS application for vets and pet shops that comes with a user-friendly interface and efficient userflow. In terms of applying vouchers, NOTES offers an easy process for both cashiers and customers. Now apply voucher is simpler and more practical.</p>
            </div>
            <div className="overview-wrap-text-bawah mobile-text">
              <h1>Problems</h1>
              <p>It's rare to find a dedicated POS for a veterinary clinic or pet shop, especially one that offers a mobile version. Moreover, most of POS apps today still have complex interfaces and are not user friendly for everyone. Apart from that, it has an outdated and inefficient voucher usage feature for both cashiers and customers.</p>
            </div>
            <div className="overview-wrap-text-bawah mobile-text">
              <h1>Solution</h1>
              <p>NOTES feature allows cashiers to simplify the process of applying vouchers with a user-friendly interface and customer do not need to bother looking at all the vouchers they want to use and show it to cashier. Customer only need to show their member barcode and the cashier will scan it to see all the vouchers they have, then offer them which voucher they want to use. As long as they have their member barcode, they don't have to spend time looking for their vouchers.</p>
            </div>
            <div className="overview-wrap-text-bawah mobile-text">
              <h1>Role</h1>
              <p>In one full version of this app, tasks are assigned 1 feature per person. I completed the research, wireframe, system design and UI/UX of the application for the apply voucher feature, supported by plugins and my mentor.</p>
            </div>
          </div>

        </div>


      </div>





    </div>
  )
}
