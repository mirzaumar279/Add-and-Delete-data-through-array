import React, { Fragment,useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees"
function Home() {

let history = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map(function (val){
      return val.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };

  //search
  const [query, setSearchQuery] = useState("");


  return (
    <Fragment>
    <h1 className="head">React Javascript Add & Delete Data</h1>
    //Serch
    <form>
          <input
            className="search"
            placeholder="Search Bar"
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </form>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="lg">
          <thead>
            <tr>
              <th className="row">Name</th>
              <th className="row">Email</th>
              <th className="row">Address</th>
              <th className="row">Phone</th>
              <th className="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? 
              Employees.filter((Employees)=>Employees.name.toLowerCase().includes(query)).map((item) => {
                  return (
                    <tr>
                      <td className="rowdata">{item.name}</td>
                      <td className="rowdata">{item.email}</td>
                      <td className="rowdata">{item.address}</td>
                      <td className="rowdata">{item.phone}</td>
                      <td className="rowdata">
                        <button className="del" onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : 
              "No data available"}
              <tr>
                <td colSpan={6}>
                <Link className="d-grid gap-2" to="/create">
            <Button className="btnn">Add Row</Button>
        </Link>
                </td>
              </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}
export default Home;
