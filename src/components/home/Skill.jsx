import React from "react"

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Think of three things we are truly grateful for in our life. Not just think about them, but grab them, embrace them and see them.",
      para1: "Look in the mirror and smile at ourselves. Researchers find that the positive chemicals released into our body, by this simple but difficult act, are amazing",
      para2: "Put some awesome thoughts into our mind. That’s where these quotations are important. Read them, pick your favourites and print each one you like on an A4 piece of paper. Now the hard part. Pin each quotation in a place where you can see it, look at it and reflect on its meaning.",
    },
  ]
  return (
    <>
      <section className='skill'>
        <div className='container'>
          <div className='heading'>
            <h3> WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>

          <div className='content flex'>
            <div className='left topMarign'>
              <Progress done='70' title='HTML' />
              <Progress done='80' title='CSS' />
              <Progress done='90' title='JAVASCRIPT' />
              <Progress done='70' title='REACT JS' />
            </div>
            <div className='right mtop'>
              {data.map((val) => {
                return (
                  <>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <button className='primary-btn'>Hire Me</button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
