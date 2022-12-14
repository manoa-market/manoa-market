import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Listings } from '../../api/listing/Listing';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  itemName: String,
  itemImage: String,
  price: Number,
  negotiable: {
    type: String,
    allowedValues: ['Yes', 'No'],
    defaultValue: 'Yes',
  },
  description: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  category: {
    type: String,
    allowedValues: ['Books', 'Electronics', 'Furniture', 'Sporting', 'Misc'],
    defaultValue: 'Misc',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddListing = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { itemName, itemImage, category, condition, price, description, negotiable } = data;
    const owner = Meteor.user().username;
    Listings.collection.insert(
      { itemName, condition, owner, category, price, itemImage, description, negotiable },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id="add-listing-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2 className="py-3">Add Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField id="add-form-name" name="itemName" />
                <SelectField name="category" />
                <Row>
                  <Col><NumField id="add-form-price" name="price" decimal={null} /></Col>
                  <Col><SelectField name="negotiable" /></Col>
                </Row>
                <SelectField name="condition" />
                <TextField id="add-form-img" name="itemImage" />
                <LongTextField id="add-form-desc" name="description" />
                <SubmitField id="add-form-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddListing;
