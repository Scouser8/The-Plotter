import Columns from "../Columns";
import MainContent from "../MainContent";

function Home() {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <Columns />
      <MainContent />
    </div>
  );
}

export default Home;
