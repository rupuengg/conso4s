import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getEmployeeSkills, deleteEmployeeSkill } from '../../../actions/employee-skill.action';

const ContactList = (props) => {
  // useEffect(() => {
  //   props.getEmployeeSkills();
  // }, [props.removeEmpId]);

  // const handleDelete = (e, skillId) => {
  //   e.preventDefault();
  //   props.deleteEmployeeSkill(skillId);
  // };

  const { contacts } = props;

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Contacts</li>
        <li className="add-new"><Link to="/contact/create"><span className="fa fa-plus"></span> Add Contact</Link></li>
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-bordered dataTable" id="dataTable">
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          aria-controls="dataTable"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending">Contact</th>
                        <th
                          className="sorting_asc"
                          aria-controls="dataTable"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending">Email</th>
                        <th
                          className="sorting_asc"
                          aria-controls="dataTable"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending">Phone</th>
                        <th
                          aria-controls="dataTable"
                          aria-label="Age: activate to sort column ascending">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr className="odd" key={contact.id}>
                          <td className="sorting_1">{contact.name}</td>
                          <td className="sorting_1">{contact.email}</td>
                          <td className="sorting_1">{contact.phone}</td>
                          <td>
                            <Link to={"/contact/update/" + contact.id}>
                              <i className="fa fa-edit"></i>Edit
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/" onClick={(e) => { }}>
                              <i className="fa fa-trash">Favourite</i>
                            </Link>
                          </td>
                        </tr>
                      ))}

                      {!contacts.length && <tr>
                        <td colSpan={5}>
                          No records found
                        </td>
                      </tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

const mapStoreToProps = (store) => {
  return {
    contacts: store.contact.lists,
    removeEmpId: store.contact.delete_id
  }
}

export default connect(mapStoreToProps, {})(ContactList);