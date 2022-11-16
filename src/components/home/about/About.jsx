import React from "react"

 const About = () => {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1: "When interacting with any computational device I have a natural curiosity for what goes on behind the screen. Peering at the diagnostics review whilst watching a technician attempt to fix my mother’s work computer intensified this curiosity. I wanted to understand how a computer processes data and this led me to explore the world of computer...",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>About Me</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  
                </div>
                <div className='right'>
                  <div className='img'>
                  <img src="https://www.updatepedia.com/wp-content/uploads/2018/03/about-me-leon-severan-we-buy-houses.jpg" alt="React Logo" />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
