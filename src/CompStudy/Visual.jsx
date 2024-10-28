import React from 'react'
import mockup4 from '../assets/MockUp/notes 3.png'
import mockup5 from '../assets/MockUp/notes 4.png'
import mockup3 from '../assets/MockUp/notes 5.png'
import mockup6 from '../assets/MockUp/notes 6.png'
import figma from '../assets/Icon/figma2.png'

export default function Visual() {
  return (
    <div>
        
        <div className='visual-container'>
            <div className='mockup'> <img src={mockup6} alt="" /></div>
            <div className='img-wrapper3 mockup'><img src={mockup3} alt="" /></div>

        <div className="visual-wrapper">
            <div className="visual-atas">
                <div className="typography">
                    <h1>Typography</h1>
                    <div className="sample">
                        <div className='sample-wrapper'>
                        <h2 className="sample-1">Aa</h2>
                        <h2 className="sample-2">Aa</h2>
                        <h2 className="sample-3">Aa</h2>
                        </div>
                        <p>Lato</p>
                    </div>   
                </div>

                <div className="tool">
                    <h1>Tool</h1>
                    <div className='tool-figma'><img src={figma} alt="" /></div>


                </div>

            </div>

            <div className="visual-bawah">
                <h1>Color Pallete</h1>
                <div className="pallete">
                    

                    <div className="color-box">
                        <div className="color1 box"></div>
                        <p>#0A5985</p>
                    </div>

                    <div className="color-box">
                        <div className="color2 box"></div>
                        <p>#1094DD</p>
                    </div>

                    <div className="color-box">
                        <div className="color3 box"></div>
                        <p>#CFEAF8</p>
                    </div>

                    <div className="color-box">
                        <div className="color4 box"></div>
                        <p>#1C1C20</p>
                    </div>

                    <div className="color-box">
                        <div className="color5 box"></div>
                        <p>#FEFEFF</p>
                    </div>
                </div>

            </div>

        </div>

        <div className='img-container'>
        <div className='img-wrapper4 mockup'>
            <img src={mockup4} alt="" />
            <p>*On the confirmation page, I purposely made it look like an e-commerce application because its interface has become very familiar and is often seen by most people today. That way the interface that is presented is more easily accepted by people and becomes user friendly for anyone who wants to use it. I minimized the trash icon and emphasized the add item section to give a psychological impression to users, so that what they thought when they saw this interface was more inclined to change the number of items rather than removing items from the cart list.</p>
        </div>
        <div className='img-wrapper5 mockup'>
            <img src={mockup5} alt="" />
            <p>*I decided to implement QR scanning technology in the apply voucher feature. In this case, it is not the voucher that is scanned but the customer's member barcode. That way, the cashier can see customer data such as member status, name, and list of vouchers owned and at the same time add points to the member after a transaction occurs. Customers also do not have to bother opening the voucher list page and choosing which voucher to use because it can waste time and hamper the queue.
            </p>
        </div>

        </div>

        </div>



    </div>
  )
}
