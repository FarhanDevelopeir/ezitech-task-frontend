import Award from "./Components/Award";
import Chat from "./Components/Chat";
import CoursesPagination from "./Components/CoursesPagination";
import Downloadapp from "./Components/Downloadapp";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Lastone from "./Components/Lastone";
import RecentCourses from "./Components/RecentCourses";
import SignUpprocess from "./Components/SignUpprocess";
import Technologies from "./Components/Technologies";
import Topaddress from "./Components/Topaddress";


function App() {
  return (
    <div className="App">
      <Topaddress/>
      <Header/>
      <HeroSection/>
      <Award/>
      <SignUpprocess/>
      <Technologies/>
      <RecentCourses/>
      <CoursesPagination/>
      <Downloadapp/>
      <Lastone/>
      <Chat/>
      <Footer/>

    </div>
  );
}

export default App;
