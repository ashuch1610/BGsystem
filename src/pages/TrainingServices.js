import React from 'react'

const Trainingservices = () => {
  return (
    < div className='bg-white'>
      <div class="container text-center pt-3">
        <div class="row justify-content-md-center">
          <div class="col col-lg-3 hr-line ">
            <hr />
          </div>
          <div class="col-md-auto" style={{ fontFamily: 'Georgia, serif' }}>
            <h3>Unlock Your Future with Our AutoCAD Course!</h3>
          </div>
          <div class="col col-lg-3 hr-line">
            <hr />
          </div>
        </div>
      </div>

      <div className='container ' style={{ paddingRight: "120px", paddingLeft: "120px" }}>
      

        <div class="row">
          <div class="col-6 ">
            <div className='m-4 '>
              <div className='' style={{ paddingTop: "20px" }}>
                <h1 className='text-left ' style={{ color:'#FF7F7F' }}>Master the tools of Modern Design</h1>
                <h1 className='text-left'>SOLIDWORKS & AUTOCAD</h1>
                <h4 className='text-left'>Design.Draft.Dominate</h4>
                <button style={{backgroundColor: '#ffcccc', borderRadius: '15px',padding: '10px 20px'}}>Register Now</button>
        

           
                <br />
                <br />
                <h1 className='text-left ' style={{ color:'#FF7F7F',fontWeight: 'bold'  }}>What this course offers</h1>
                <ul className='text-left ' style={{ listStyleType: 'none',fontWeight: 'bold'  }}>
                <li>Get hands on with industires most Powerful CAD software</li>
                  <li>Complete AutoCAD and Solidworks Training</li>
                  <li>2D Drafting + 3D Modelling</li>
                  <li>Real Word Projects and Design Challengess</li>
                  <li>Prototyping</li>
                  <li>Testing</li>
                </ul>

              </div>
            </div>
            <br />
            {/* <div className='m-4  s2-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "350px" }}>Injection Molding - Tool design</h4>
                Boss Groups, we have capability starting from DFM of the part till tool design and tool validation. We work in partnership with your team to deliver designs handmade to your requirement.
              </div>
            </div> */}
          </div>

          {/* <div class="col-6  ">
            <div className='m-4  s3-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "280px" }}>Special Purpose Machine</h4>
                Special Purpose Machines offer remarkable scope for high & low volume production at low investment and at low cost of production. Our specially designed tooling and fixture, dedicated for mass producing the same component all day long with no special care which complies with all industry standards.
              </div>
            </div>
            <br />
            <div className='m-4  s4-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "100px" }}>IoT</h4>
                Our internet of things (IoT) solutions will align to industry needs and will help our organization to stay always up to date in the market. Our solution is tailored to the unique needs of products, user and operations.
              </div>
            </div>
          </div> */}


          <div class="col-6  s5-img"></div>
        </div>
      </div>
    </div>
  )
}
export default Trainingservices;