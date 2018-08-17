import * as React from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../store/storeState";
import { AnyAction } from "redux";
import { loadTasks } from "../actions/taskActions";
import { Task } from "../types/Task";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";

interface ListContainerState {
  thingsToDo: Task[];
}

interface ListContainerDispatchProps {
  getTasks: () => void;
}

interface ListContainerDataProps {
  tasks: Task[];
}

interface ListContainerProps
  extends WithStyles<typeof styles>,
    ListContainerDispatchProps,
    ListContainerDataProps {}

class ListContainer extends React.Component<
  ListContainerProps,
  ListContainerState
> {
  static getDerivedStateFromProps(
    nextProps: ListContainerProps,
    prevState: ListContainerState
  ) {
    if (prevState.thingsToDo !== nextProps.tasks) {
      return { thingsToDo: nextProps.tasks };
    } else {
      return null;
    }
  }
  constructor(props: ListContainerProps) {
    super(props);
    this.state = {
      thingsToDo: []
    };
  }

  componentDidMount() {
    this.props.getTasks();
  };

  render() {
    return (
      <div
        style={{
          marginTop: 200,
          marginLeft: 300,
          marginRight: 300
        }}
      >
        <Card style={{ height: 400 }}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Things I need to do
            </Typography>
            <TodoList tasks={this.state.thingsToDo} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state: StoreState): ListContainerDataProps {
  return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreState, void, AnyAction>
): ListContainerDispatchProps => {
  return {
    getTasks: async () => {
      await dispatch(loadTasks());
    }
  };
};
const styles = (theme: any) => createStyles({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListContainer));
