import React from 'react'
import mockup3 from '../assets/MockUp/notes 2.png'
import figma from '../assets/Icon/figma2.png'

export default function Visual() {
  return (
    <div>
        
        <div className='visual-container'>
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
        <div className='img-wrapper4 mockup'><img src={mockup3} alt="" /></div>
        <div className='img-wrapper5 mockup'><img src={mockup3} alt="" /></div>

        </div>

        </div>



    </div>
  )
}
