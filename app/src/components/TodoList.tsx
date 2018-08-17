import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Task } from "../types/Task";
import TodoItem from "./TodoItem";
import {
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Dialog,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

interface TodoListState {
  modalHidden: boolean;
  newTaskText: string;
  tasks: Task[];
}

interface TodoListProps extends WithStyles<typeof styles> {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (tasks: Task[]) => void;
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  static getDerivedStateFromProps(
    nextProps: TodoListProps,
    prevState: TodoListState
  ) {
    if (prevState.tasks !== nextProps.tasks) {
      return { tasks: nextProps.tasks };
    } else {
      return null;
    }
  }
  constructor(props: TodoListProps) {
    super(props);
    this.state = {
      modalHidden: true,
      newTaskText: "",
      tasks: this.props.tasks
    };
  }

  hideModal = () => {
    this.setState({
      modalHidden: this.state.modalHidden ? false : true,
      newTaskText: ""
    });
  };

  setText = (text: any) => {
    this.setState({ newTaskText: text.target.value });
  };

  addNewItem = () => {
    this.props.addTask({
      id: this.props.tasks.length,
      done: false,
      text: this.state.newTaskText
    });
    this.setState({ modalHidden: this.state.modalHidden ? false : true });
  };

  removeItem = (id: number) => {
    this.props.removeTask(this.state.tasks.filter(t => t.id !== id));
  };

  render() {
    const { tasks } = this.state;
    return (
      <List component="nav">
        {tasks.map(t => (
          <TodoItem removeItem={this.removeItem} task={t} />
        ))}
        <ListItem button onClick={this.hideModal}>
          <ListItemIcon>
            <Add style={{ color: "green", paddingLeft: 12 }} />
          </ListItemIcon>
          <ListItemText primary={"Add a new item"} />
        </ListItem>
        <Dialog open={!this.state.modalHidden}>
          <div
            style={{
              margin: 10,
              display: "flex",
              flexDirection: "column",
              width: 400
            }}
          >
            <Typography variant="title" align="center">
              Add an item to your list
            </Typography>
            <TextField
              label="What is it you need to do?"
              defaultValue={this.state.newTaskText}
              margin="normal"
              onChange={this.setText}
            />
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Button onClick={this.addNewItem}>add</Button>
              <Button onClick={this.hideModal}>cancel</Button>
            </div>
          </div>
        </Dialog>
      </List>
    );
  }
}

const styles = (theme: any) => createStyles({});

export default withStyles(styles)(TodoList);
