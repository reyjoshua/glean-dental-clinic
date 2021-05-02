import {Jumbotron, Button, Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'

export default function Banner(){
    
    return(
        <Col xs={12} md={12} lg={12}>
        <Image
         className="clinic"
         src="/images/cover.jpg"
         alt="Cover photo"
         height={1200}
         width={1800}
         />
        <div className="text">
        <Col xs={12} md={12} lg={12} xl={12}>
        <Link href="/contact">
        <Button type="button" className="btn btn-warning btn-lg inquire"><h1>Inquire Now!</h1></Button>
        </Link>
        </Col>
        </div>
        </Col>
    )
}