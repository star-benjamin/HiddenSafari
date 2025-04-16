import BelowHeader from "../components/Shared/BelowHeader";

function ProfilePage(){
    return(
        <>
        <div>
            <BelowHeader Header='Your Profile' Paragraph='Edit your personal information'/>
        </div>
        <div className=" p-4 relative min-h-[42vh]">
            <h1>Welcome to the Profile page</h1>
        </div>
        </>
        
    );
}
export default ProfilePage