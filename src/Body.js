import Stories from './Stories';
import Posts from './Posts';
// import User from './User';
// import Suggestion from './Suggestion';
// import Suggestions from './Suggestions';
// import SideBar from './SideBar';

export default function Body() {
    return (
        <>
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
        </>
    )
}
