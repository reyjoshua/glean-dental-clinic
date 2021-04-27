import {Jumbotron, Button} from 'react-bootstrap';
import Link from 'next/link';


export default function Banner(){
    
    return(
        <Jumbotron className="clinic">
            <div className="text">
            <Link href="/contact">
            <Button type="button" className="btn btn-primary btn-lg inquire"><h1>INQUIRE NOW!</h1></Button>
            </Link>
            </div>
        </Jumbotron>
    )
}