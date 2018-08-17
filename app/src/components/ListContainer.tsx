import * as React from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../store/storeState";
import { AnyAction } from "redux";
import { loadTasks, addTask, removeTask } from "../actions/taskActions";
import { Task } from "../types/Task";

interface ListContainerState {
  thingsToDo: Task[];
}

interface ListContainerDispatchProps {
  getTasks: () => void;
  addTask: (task: Task) => void;
  removeTask: (tasks: Task[]) => void;
}

interface ListContainerDataProps {
  tasks: Task[];
}

interface ListContainerProps
  extends ListContainerDispatchProps,
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
  }

  render() {
    return (
      <div
        style={{
          marginTop: 50,
          marginLeft: 300,
          marginRight: 300
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              Things I need to do
            </Typography>
            <TodoList
              addTask={this.props.addTask}
              tasks={this.state.thingsToDo}
              removeTask={this.props.removeTask}
            />
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
    getTasks: () => {
      dispatch(loadTasks());
    },
    addTask: (task: Task) => {
      dispatch(addTask(task));
    },
    removeTask: (tasks: Task[]) => {
      dispatch(removeTask(tasks));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
