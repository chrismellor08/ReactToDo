import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox
} from "@material-ui/core";
import { Task } from "../types/Task";

interface TodoItemState {
  checked: boolean;
}

interface TodoItemProps extends WithStyles<typeof styles> {
  task: Task;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = {
      checked: this.props.task.done
    };
  }

  handleChange = () => {
    this.setState({ checked: this.state.checked ? false : true });
  };

  render() {
    const { classes } = this.props;
    return (
        <ListItem className={classes.listItem} button onClick={this.handleChange}>
          <ListItemIcon>
            <Checkbox
              checked={this.state.checked}
              value="checkedA"
            />
          </ListItemIcon>
          <ListItemText primary={this.props.task.text} />
        </ListItem>
    );
  }
}

const styles = (theme: any) =>
  createStyles({
    listItem: {}
  });

export default withStyles(styles)(TodoItem);
