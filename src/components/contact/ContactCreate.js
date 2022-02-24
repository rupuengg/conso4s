import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { contactActionTypes } from '../../actions/contact.action';
import ContactForm from '../../forms/contact.form';

const ContactCreate = (props) => {
  const { id } = useParams();

  let contactData = null;
  if (id) {
    const list = props.contacts.filter(val => val.id == id);
    contactData = list[0];
  }

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Contacts</Link>
        </li>
        <li className="breadcrumb-item active">Create</li>
      </ol>
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-lg-6">
                    <div className="p-1">
                      <ContactForm handleSubmit={id ? props.updateContact : props.createContact} data={contactData} contactId={id} />
                    </div>
                  </div>
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
    contacts: store.contact.lists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (data) => dispatch({ type: contactActionTypes.CONTACT_CREATE, data }),
    updateContact: (data, contactId) => dispatch({ type: contactActionTypes.CONTACT_UPDATE, data, contactId })
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ContactCreate);