import Member from "../components/Member";

function AboutUs (){

    const aboutMunkh = "Proud member of GROUP K. Main role in Group K is UI. Tried my best to make sure our web application is looking GOOOOD. Alsway welcome to deligthful feedbacks and hates criticism (be cariful and have fun)."

    return (
        <div className='home'>
            <div className="about-us-wrapper">
                 <Member name="Munkh-Erdene" SID="46119108" image="munkh.jpg" about={aboutMunkh}/>
                 <Member name="Munkh-Erdene" SID="46119108" image="munkh.jpg" about={aboutMunkh}/>
                 <Member name="Munkh-Erdene" SID="46119108" image="munkh.jpg" about={aboutMunkh}/>
                 <Member name="Munkh-Erdene" SID="46119108" image="munkh.jpg" about={aboutMunkh}/>
            </div>
           
        </div>
    )
}

export default AboutUs;