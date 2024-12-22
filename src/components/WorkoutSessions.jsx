import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">

      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p style={{
          color: 'black',
          fontFamily: "'Times New Roman', Times, serif",
          textAlign: 'justify',
        }}>The TOP WORKOUT SESSION is a high-energy fitness experience blending strength, cardio, and functional training
          with scalable intensity for all levels. Led by expert coaches in an upbeat atmosphere, it includes
          dynamic warm-ups, engaging drills, and recovery techniques to help you achieve your fitness goals.</p>
        <img src="/image-3.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident enim nisi, vero mollitia ab sequi beatae ratione veritatis.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, soluta autem enim nobis nemo!</p>
          </div>

          <div>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, soluta autem enim nobis nemo!</p>
          </div>

          <div>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, soluta autem enim nobis nemo!</p>
          </div>

          <div>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, soluta autem enim nobis nemo!</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions
