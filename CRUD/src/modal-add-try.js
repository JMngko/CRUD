<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleAdd}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} name="description" type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Desc" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Image</Form.Label>
        <Form.Control value={image} name="image" type="text" onChange={(e) => setImage(e.target.value)} placeholder="Enter Image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Price</Form.Label>
        <Form.Control value={price} name="price" type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
      </Form.Group>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Form>
  </Modal.Body>
</Modal>


