
import React from 'react'

const Toggle = () => {
    let darkMode = true;
    let dark = <h3>Dark mode enabled</h3>
    let light = <h3>Light mode enabled</h3>
    
    const mode = () => {
        darkMode = !darkMode;
        return (darkMode) ? console.log("Dark Mode enabled") : console.log("Light Mode enabled")
    }

  return (
        <section className='sections'>
            <h1>Switch modes</h1>
            <button onClick={mode}>Toggle</button>
            {/* {(darkMode) ? dark : light} */}

            <div className='scroll'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad nihil dicta iusto autem eos. Illo quos, dignissimos non repellendus explicabo minima, exercitationem libero mollitia debitis similique earum, pariatur inventore?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad nihil dicta iusto autem eos. Illo quos, dignissimos non repellendus explicabo minima, exercitationem libero mollitia debitis similique earum, pariatur inventore?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad nihil dicta iusto autem eos. Illo quos, dignissimos non repellendus explicabo minima, exercitationem libero mollitia debitis similique earum, pariatur inventore?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad nihil dicta iusto autem eos. Illo quos, dignissimos non repellendus explicabo minima, exercitationem libero mollitia debitis similique earum, pariatur inventore?</p>
            </div>
        </section>
  )
}

export default Toggle