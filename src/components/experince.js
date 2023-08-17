import React, { useState } from 'react'
import Jobbs from './jobbs'
import Animation from './utils/animation'
import Skill from './skill'

function Experince() {

    const jobbs = [
        {
            "name": "Framtidens Hus",
            "work": "Python Guru",
            "date": "2023-05-09",
            "location": "Spånga - Rinkeby"
        },
        {
            "name": "Framtidens Hus",
            "work": "Digital Designer",
            "date": "2020-06-20",
            "location": "Kista"
        }
    ]

    return (
        <div className='holder'>

            <div className="projects" >
                <a href="https://github.com/AbdullahiMohamedYusuf/Todo">
                    <div className="box">
                        <div className="view">
                            <img src="data:image/png;base64,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" alt="" />

                        </div>
                        <div className="tools">
                            <Skill name="Python" />
                            <Skill name="HTML" />
                            <Skill name="CSS" />


                        </div>
                        <p>
                            Designed and developed a comprehensive task management system using Django. Integrated complex user authentication, dynamic frontend interface, and Django Rest Framework for a seamless user experience and robust backend interaction
                        </p>
                    </div>
                </a>
                <a href="https://github.com/AbdullahiMohamedYusuf/Dmessage_v1">
                    <div className="box">
                        <div className="view">
                            <img src="data:image/png;base64,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" alt="" />

                        </div>
                        <div className="tools">
                            <Skill name="Python" />
                            <Skill name="HTML" />
                            <Skill name="CSS" />


                        </div>
                        <p>
                            Crafted a real-time chat system using Django, HTML, and CSS. Enabled seamless message exchange through Django Channels and WebSocket integration. Designed an intuitive, responsive user interface for engaging user experiences                    </p>
                    </div>
                </a>


            </div>
            <div className="experince">
                <div className="line2"></div>
                <h1> <span>2.0</span> Experince</h1>
            </div>
            <div className="work">
                {
                    jobbs.map((job) => {
                        return (
                            <Jobbs name={job["name"]} work={job["work"]} date={job["date"]} location={job["location"]} />

                        )

                    })
                }
            </div>
        </div>
    )
}

export default Experince