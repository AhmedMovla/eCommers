import React from 'react';
import Layout from "../../components/layout/Layout.jsx";
import Form from "./components/form/Form.jsx";
import Table from "./components/table/Table.jsx";

const Admin = () => {
    return (
        <Layout>
            <Form/>
            <Table/>
        </Layout>
    )
}

export default Admin;