import React, { Component } from "react";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import "react-table/react-table.css";
import "../assets/css/styles.css";
class TasksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }
  render() {
    const columns = [
      {
        Header: "#",
        accessor: "userId"
      },
      {
        Header: "First Name",
        accessor: "userId"
      },
      {
        Header: "Last Name",
        accessor: "userId"
      },
      {
        Header: "Registration",
        Accessor: "id"
      },
      {
        Header: "Status",
        accessor: "title"
      },
      {
        Header: "Created",
        accessor: "body"
      },
      {
        Header: "Actions",
        Cell: props => {
          return <button className="btn btn-sm btn-danger">Defer</button>;
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ];
    return (
 
            <ReactTable
              columns={columns}
              data={this.state.posts}
              noDataText={"Loading..."}
              defaultPageSize={5}
            />

    );
  }
}

export default TasksTable;
