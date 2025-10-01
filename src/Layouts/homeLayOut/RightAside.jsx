import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {  
    return (
        <div className="space-y-10 mx-4">
             <SocialLogin></SocialLogin>
             <FindUs></FindUs>
             <QZone></QZone>
        </div>
    );
};

export default RightAside;