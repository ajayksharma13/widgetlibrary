import React from 'react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import "./style.scss";

export class Footer extends React.Component {
    render() {
        return (
            <Segment
                className="footer-section"
                basic
                vertical
            >
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={4} >
                                <Header as="h4" content="COMPANY" />
                                <List link>
                                    <List.Item as="a" href="/careers">Careers</List.Item>
                                    <List.Item as="a">Terms and Conditions</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h4" content="SUPPORT" />
                                <List link>
                                    <List.Item as="a" href="/about">About</List.Item>
                                    <List.Item as="a">How it Works</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h4" content="SOCIAL" />
                                <List link>
                                    <List.Item as="a" href="https://www.linkedin.com/company/unstockclub" target="_blank">Linkedin</List.Item>
                                    <List.Item as="a" href="https://www.facebook.com/Unstock.club" target="_blank">Facebook</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h4" content="CONTACT" />
                                <List link>
                                    {/* <List.Item style={{ fontSize: "1.1em" }} >Unstock.club </List.Item>
                                    <List.Item >1 GA 2, Sector 11,</List.Item>
                                    <List.Item>Udaipur,</List.Item>
                                    <List.Item className="m-b-10">Rajasthan, India. - 313002.</List.Item> */}
                                    <List.Item as="a" href="mailto:info@unstock.com" target="_blank">info@unstock.com</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>

        )
    }
}

export default Footer;
