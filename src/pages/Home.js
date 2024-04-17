import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Card,
  Form,
} from "react-bootstrap";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homepage">
      <Container>
        {/* Carousel section */}

        <Row className="mt-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?fitness"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Start Your Fitness Journey</h3>
                  <p>
                    Get access to personalized workout plans designed by
                    experts.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?nutrition"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Healthy Nutrition Plans</h3>
                  <p>
                    Explore our nutritious meal plans to fuel your workouts.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Additional images for nutrition */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?food"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Nutritious Food Choices</h3>
                  <p>
                    Discover a variety of nutritious and delicious food options.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?healthyeating"
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h3>Healthy Eating Habits</h3>
                  <p>
                    Learn about maintaining a balanced diet for optimal health.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?vegan"
                  alt="Fifth slide"
                />
                <Carousel.Caption>
                  <h3>Vegan Lifestyle</h3>
                  <p>Explore the benefits of a plant-based diet.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        {/* About Us section */}
        <Row className="about-us mt-5" id="about">
          <Col>
            <h2 className="text-center">About Us</h2>
            <p>
              Fitness Haven is dedicated to helping individuals achieve their
              fitness goals and lead a healthy lifestyle. Our team of certified
              trainers and nutritionists is committed to providing personalized
              guidance and support to our members on their fitness journey. We
              believe in creating a welcoming and inclusive environment where
              everyone can thrive and reach their full potential. Whether you're
              a beginner looking to kickstart your fitness routine or an
              experienced athlete seeking to improve performance, Fitness Haven
              offers a variety of programs and resources to suit your needs.
              Join us today and embark on a transformative journey towards a
              happier, healthier you!
            </p>
          </Col>
        </Row>
        {/* Expert Trainers section */}
        <Row className="about-us mt-5" id="expert-trainers">
          <Col md={4}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1667520158832-f5d897980929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMHRyYWluZXJzfGVufDB8fDB8fHww"
              />
              <Card.Body>
                <Card.Title>Bret D. Bowers</Card.Title>
                <p>Strength Trainer</p>
                <Card.Text>
                  Achieve your fitness goals with our strength training workouts
                  designed for all levels of experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHJhaW5lcnN8ZW58MHx8MHx8fDA%3D"
              />
              <Card.Body>
                <Card.Title>Hector T. Daigl</Card.Title>
                <p>Muscle Trainer</p>
                <Card.Text>
                  Unlock your full muscle-building potential with our
                  specialized muscle training programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1672862925604-9079f0a492e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwdHJhaW5lcnN8ZW58MHx8MHx8fDA%3D"
              />
              <Card.Body>
                <Card.Title>Paul D. Newman</Card.Title>
                <p>Power Trainer</p>
                <Card.Text>
                  Maximize your strength and explosiveness with our power
                  training programs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Nutrition section */}
        <Row className="diet-section mt-5" id="nutrition">
          <Col>
            <h2 className="text-center">Diet and Nutrition</h2>
            {/* Nutrition content here */}
            <p className="text-center">
              Explore our delicious and healthy diet options to complement your
              fitness journey.
            </p>
          </Col>

          <Row className="diet-images mt-3">
            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/300x300/?diet"
                />
                <Card.Body>
                  <Card.Title>Healthy Breakfast</Card.Title>
                  <Card.Text>
                    Start your day right with a nutritious breakfast that fuels
                    your body and mind.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/300x300/?healthy-food"
                />
                <Card.Body>
                  <Card.Title>Fresh Salads</Card.Title>
                  <Card.Text>
                    Enjoy a variety of fresh and colorful salads packed with
                    vitamins and minerals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/300x300/?diet-meal"
                />
                <Card.Body>
                  <Card.Title>Low-Calorie Meals</Card.Title>
                  <Card.Text>
                    Discover delicious low-calorie meals that help you maintain
                    a healthy weight.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
        {/* Contact Us section */}
        <Row className="contact-us mt-5" id="contact">
          <Col>
            <h2 className="text-center">Contact Us</h2>
            <Container>
              <Card className="text-center">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicName" className="mb-3">
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
