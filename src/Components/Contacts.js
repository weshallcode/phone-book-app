import React, { Component } from 'react';
import ContactPerson from './ContactPerson';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, Paper } from 'material-ui';

class Contacts extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    }

    render() {
        let contactList;
        if (this.props.contacts) {
            contactList = this.props.contacts.map(contact => {
                return (
                    <ContactPerson onDelete={ this.deleteContact.bind(this) } key={ contact.id } contact={ contact } />
                );
            });
        }

        const paperStyle = {
            margin: 20,
            display: 'inline-block'
        };

        return (
        <div className="Contacts">
            <Paper style={ paperStyle } zDepth={2} >
                <h2>Contact List</h2>
                <Table fixedHeader={ true } selectable={ false } >
                    <TableHeader displaySelectAll={ false }>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Number</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn className="action">Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { contactList }                            
                    </TableBody>
                </Table>
            </Paper>
        </div>
        );
    }
}

export default Contacts;
