import '#app/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import {Header, Footer, ProfileList, CreateProfile, IndividualProfile } from "#components";
// Pages
import {Home, Network} from "#pages";


function App() {
  return (
    <Router>
      <div className="App bg-light">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/network" exact component={() => <Network />} />
          <Route path="/network/brands" exact component={() => <ProfileList userTypes="brands" />} />
          <Route path="/network/influencers" exact component={() => <ProfileList userTypes="influencers" />} />
          <Route path="/network/brands/create-brand" exact component={() => <CreateProfile profileType="brand" />} />
          <Route path="/network/influencers/create-influencer" exact component={() => <CreateProfile profileType="influencer" />} />
          <Route path="/network/brands/:id" exact component={() => <IndividualProfile profileType="brand" />} />
          <Route path="/network/influencers/:id" exact component={() => <IndividualProfile profileType="influencer" />} />
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
