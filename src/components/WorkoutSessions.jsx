import React from 'react'
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Footer from './Footer';
import Contact from './Contact';
const WorkoutSessions = () => {
  return (
    <>

      <section className="workout_session" style={{ marginTop: '-10px' }}>

        <div className="wrapper">
          <h1><u style={{ color: '#0095ff' }}>TOP WORKOUT SESSION</u></h1>
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
          <p style={{ textAlign: 'justify' }}>Featured Bootcamps offer dynamic, high-energy sessions tailored to transform your fitness journey,
            blending strength, cardio, and
            functional exercises to challenge every level and achieve remarkable results.
          </p>
          <div className="bootcamps">
            <div>
              <h4>HIIT Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>High-Intensity Interval Training sessions focused on short bursts of intense exercise followed by brief rest, targeting fat loss and endurance!</p>
            </div>

            <div>
              <h4>Strength & Conditioning Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>A mix of weightlifting, resistance training, and bodyweight exercises designed to build strength and improve overall fitness.</p>
            </div>

            <div>
              <h4>Cardio Blast Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>Energizing workouts combining running, jump ropes, and high-impact cardio movements for maximum calorie burn.</p>
            </div>

            <div>
              <h4>Functional Fitness Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>Focus on movements that mimic everyday activities, improving balance, core strength, and mobility.</p>
            </div>


            <div>
              <h4>Core Crusher Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>Intense core-focused exercises to tone and strengthen the abdominal and back muscles.</p>
            </div>


            <div>
              <h4>Full-Body Burn Bootcamp!</h4>
              <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, soluta autem enim nobis nemo!</p>
            </div>

          </div>
        </div>

      </section>
      <Gallery />
      {/* <Contact /> */}
      {/* <Footer /> */}

    </>


  )
}

export default WorkoutSessions
