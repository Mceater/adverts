import Member from "../components/Member";

function AboutUs() {
  const aboutMunkh =
    "Proud member of GROUP K. Main role in Group K is UI. Tried my best to make sure our web application looks GOOOOD. Alsway welcome to deligthful feedbacks and hates criticism (be careful and have fun).";
  const aboutYeomin =
    "It was a good experiece!! I have done anything that I can do such as bug fix, merging branches, PayPal implementation, URL Shortner.";

  const aboutShane =
    "Bit of this bit of that, Main role in Group K is to create filter systems and provide documentation";
  return (
    <div className="home">
      <div className="about-us-wrapper">
        <Member
          name="Farhan Ur Rashid Risan"
          SID="46119108"
          image="munkh.jpg"
        />
        <Member
          name="Munkh-Erdene"
          SID="46119108"
          image="munkh.jpg"
          about={aboutMunkh}
        />
        <Member
          name="Shane Garcia"
          SID="45415544"
          image="munkh.jpg"
          about={aboutShane}
        />
        <Member
          name="Yeo Min Yoon"
          SID="44181442"
          image="munkh.jpg"
          about={aboutYeomin}
        />
      </div>
    </div>
  );
}
export default AboutUs;
