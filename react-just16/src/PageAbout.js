import { Link, Route, Switch, Redirect } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PageAbout() {
  return (
    <LayoutPage>
      <h2>About เกี่ยวกับเรื่องของหมู่เฮา</h2>
      <p>
        <Link to="/about/myself">Myself</Link>
      </p>
      <p>
        <Link to="/about/history">History</Link>
      </p>

      <Switch>
        <Route path="/about/myself">
          <h3>Myself</h3>
          <p>เรื่องของผม</p>
        </Route>
        <Route path="/about/history">
          <h3>history</h3>
          <p>อดีตช่างมัน ?</p>
        </Route>

        <Route path="/about">
          <Redirect to="/about/myself" />
        </Route>
      </Switch>
    </LayoutPage>
  );
}

export default PageAbout;
