import React from "react"

const SpeakersGroup1 = [
  {
    image: "/congreso/expositores/DrAlexanderVaccaro.jpg",
    name: "Dr. Alexander Vaccaro",
    twitter: "@DrAlexanderVaccaro",
    description: "",
  },
  // {
  //   image: "/congreso/expositores/boulot.jpeg",
  //   name: "Dr. boulot",
  //   twitter: "@boulot",
  //   description: "",
  // },
  // {
  //   image: "/congreso/expositores/montero.jpg",
  //   name: "Dr. Carlos Montero",
  //   twitter: "@montero",
  //   description: "",
  // },
]

const SpeakersGroup2 = [
  // {
  //   image: "/congreso/expositores/vialle.jpg",
  //   name: "Dr. Luis Vialle",
  //   twitter: "@vialle",
  //   description: "",
  // },
]

export default () => {
  return (
    <>
      <br />

      <div className='speakers container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>

            <div className='columns'>
              {SpeakersGroup1.map((item, index) => (
                <div className="column is-one-third">
                  <Speaker key={index} {...item} />
                </div>
              ))}
            </div>

            <div className='columns'>
              {SpeakersGroup2.map((item, index) => (
                <div className="column is-one-third">
                  <Speaker key={index} {...item} />
                </div>
              ))}
            </div>

          </div>
        </div>
        <br />
      </div>
    </>
  )
}

function Speaker (props) {
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-1by1'>
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{props.name}</p>
              <p className='subtitle is-6'>{props.twitter}</p>
            </div>
          </div>

          {/* <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div> */}
        </div>
      </div>
    </>
  )
}
