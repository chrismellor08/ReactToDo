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

interface LocationsListState {
  modalHidden: boolean;
  newTaskText: string;
}

interface LocationsListProps extends WithStyles<typeof styles> {
  tasks: Task[];
}

class LocationsList extends React.Component<
  LocationsListProps,
  LocationsListState
> {
  constructor(props: LocationsListProps) {
    super(props);
    this.state = {
      modalHidden: true,
      newTaskText: ""
    };
  }

  hideModal = () => {
    this.setState({ modalHidden: this.state.modalHidden ? false : true, newTaskText: "" });
  };

  setText = (text: any) => {
    this.setState({ newTaskText: text.target.value });
  };

  addNewItem = () => {
    alert(this.state.newTaskText);
    this.setState({modalHidden: this.state.modalHidden ? false : true})
  }

  render() {
    const { tasks } = this.props;
    return (
      <List component="nav">
        {tasks.map(t => (
          <TodoItem task={t} />
        ))}
        <ListItem button onClick={this.hideModal}>
          <ListItemIcon>
            <Add style={{ color: "green" }} />
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

export default withStyles(styles)(LocationsList);

// import * as React from "react";
// import createStyles from "@material-ui/core/styles/createStyles";
// import { withStyles, WithStyles } from "@material-ui/core/styles";
// import {Task} from "../Types/Task";
// import TodoItem from "./TodoItem";

// interface TodoListProps extends WithStyles<typeof styles> {
//     tasks: Task[];
// }

// class TodoList extends React.Component<
//   TodoListProps
// > {

//   render() {
//     // const { classes } = this.props;
//     return (
//     <List component="nav">
//     <h1>dfuh</h1>
//        {this.props.tasks.map(l => {
//            <TodoItem task={l}/>
//        })}
//       </List>
//     );
//   }
// }

// const styles = (theme: any) =>
//   createStyles({

//   });

// export default withStyles(styles)(TodoList);
