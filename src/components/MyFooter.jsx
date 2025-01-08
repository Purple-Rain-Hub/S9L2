import { Container } from "react-bootstrap";

const MyFooter = function(){
    return(
        <Container fluid className="bg-body-tertiary p-3 mt-3">
            <div className="d-flex my-2 justify-content-evenly w-50 mx-auto">
                <ul className="list-unstyled">
                    <li>Sito di Pippo</li>
                    <li>con colaborazione di Pluto</li>
                    <li>effetti speciali di Paperino</li>
                </ul>
                <ul className="list-unstyled">
                    <li><a href="javascript:void(0)">Youtube</a></li>
                    <li><a href="javascript:void(0)">Instagram</a></li>
                    <li><a href="javascript:void(0)">Facebook</a></li>
                </ul>
            </div>
        </Container>
    )
}

export default MyFooter;