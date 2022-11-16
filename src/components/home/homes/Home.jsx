import React from "react"

 const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
            <img src="https://www.usnews.com/object/image/00000176-a9e2-dd32-adfe-a9e26fc30000/201228-piechart-stock.jpg?update-time=1609168000091&size=responsive640" alt="React Logo" />
            </div>  
          </div>
          <div className='right topMarign'>
            <h1>
              I AM A <br />
              WEB DESIGNER
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p>21 | CSE Student | Learner | 💻📖🏃‍♂️🏀|
currently on #100DaysOfCode challenge & learning about DevOps. #DevCommunity</p>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
