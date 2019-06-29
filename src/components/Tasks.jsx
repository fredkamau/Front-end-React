import React, { Component } from "react";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import { Navigation } from "../components/Layouts/NavComponent";
import "react-table/react-table.css";
import "../assets/css/Tasks.css";
class Tasks extends Component {
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
      <div className="container-fluid">
        <div className="row">
          <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
            <ReactTable
              columns={columns}
              data={this.state.posts}
              noDataText={"Loading..."}
              defaultPageSize={5}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default Tasks;
