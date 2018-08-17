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
  removeItem: (id: number) => void;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = {
      checked: this.props.task.done
    };
  }

  handleClick = () => {
    this.props.removeItem(this.props.task.id);
  };

  checkBoxHover = () => {
    this.setState({ checked: this.state.checked ? false : true });
  };

  render() {
    const { classes } = this.props;
    return (
      <ListItem className={classes.listItem} button>
        <ListItemIcon>
          <Checkbox
            onMouseEnter={this.checkBoxHover}
            onMouseLeave={this.checkBoxHover}
            checked={this.state.checked}
            onClick={this.handleClick}
            title="Click to remove this task from your list"
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
