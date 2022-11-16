import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "The Digital Branding company to provide business solution for digital marketing, SEO, social media marketing agency in Houston, Texas, India, & USA.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Team management is the ability of an individual or an organization to administer and coordinate a group of individuals to perform a task. Team management involves teamwork, communication, objective setting and performance appraisals.",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "A creative mind is the one that sees information – particularly from the world around it – and relates it to their experiences and existing knowledge in order to create.",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
