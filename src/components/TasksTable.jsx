import React, { Component } from "react";
import ReactTable from "react-table";
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
    //test url
    //cost url = "https://cstonboarding.azurewebsites.net/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC";
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
      <div>
        <ReactTable
          columns={columns}
          data={this.state.posts}
          noDataText={"Loading..."}
          defaultPageSize={6}
        />
      </div>
    );
  }
}

export default TasksTable;
