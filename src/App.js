import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import PostSection from "./components/PostSection/PostSection";

const App = () => {
  return (
    <div className="page-container">
      <Navbar />
      <PostSection />
    </div>
  );
};

export default App;
