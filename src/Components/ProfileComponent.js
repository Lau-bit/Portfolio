import selfie from "../Images/selfie.png";

const ProfileComponent = () => {

    return (
        <div className="profile">
            <div className="profileText">
            <h2>Hello!</h2>
            <div className="introText">
            <pre>   I'm Lauri Kara, a developer</pre>
            <div className="cursor"></div>
            </div>
        <p>A Bachelor of Business Administration, specializing in software development, graduated
in 2023. Currently working as a part-time programming teacher at Varia Vocational
College in Myyrmäki, Vantaa. Teaching ReactJS and JavaScript. Taught Python for
students in 2023. Looking for additional work related to programming and IT. Good basic
understanding of programming principles, programming skills in many languages.
Knowledgeable in basics of business administration and economy. Striving to learn more.</p>
</div>
        <div className="imageDiv">
        <img src={selfie}></img>
        </div>
        </div>
    )
}

export default ProfileComponent;