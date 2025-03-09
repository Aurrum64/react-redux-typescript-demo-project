import styled from "styled-components";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
// import ReduxSagaStorage from "../modules/redux-saga-storage";
import TanstackStorage from "../modules/tanstack-storage";
import { GroupStorage } from "../modules/group-storage/components";

const NetPlanner: React.FC = () => {
  return (
    <NetPlannerContainer>
      <Switch>
        <Route path="/" component={TanstackStorage} exact />
        <Route path="/groupStorage" component={GroupStorage} />
      </Switch>
    </NetPlannerContainer>
  );
};

const NetPlannerContainer = styled.div``;

export default NetPlanner;
