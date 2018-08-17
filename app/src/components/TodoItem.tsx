import * as React from "react";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox, 
  Fade
} from "@material-ui/core";
import { Task } from "../types/Task";

interface TodoItemState {
  hover: boolean;
  removed: boolean;
}

interface TodoItemProps {
  task: Task;
  removeItem: (id: number) => void;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = {
      hover: this.props.task.done,
      removed: false
    };
  }

  removeItem = () => {
    this.setState({removed: true})
    this.props.removeItem(this.props.task.id);
  };

  checkBoxHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <Fade in={!this.state.removed}>
        <ListItem button>
          <ListItemIcon>
            <Checkbox
              onMouseEnter={this.checkBoxHover}
              onMouseLeave={this.checkBoxHover}
              checked={this.state.hover}
              onClick={this.removeItem}
              title="Click to remove this task from your list"
            />
          </ListItemIcon>
          <ListItemText primary={this.props.task.text} />
        </ListItem>
      </Fade>
    );
  }
}

export default TodoItem;
