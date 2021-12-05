import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { FOOTER_CONFIG } from "../appConstant";

const Footer = () => {
return (
	 <Container fluid className={styles.footerContainer}>
		 <h1 style={{ color: "white",
				textAlign: "center",
				}}>
		INTUITION WAY
	</h1>
		{/* <Row>
			{FOOTER_CONFIG.map((element) =>
				<Col key={element?.id}>
					<div className={styles.heading}>{element?.title}</div>
					{element?.child.map((child)=>
					<Row key={child?.id}>
						<Link href={child?.url}>
						<a>
							{child?.title}
						</a>
						</Link>
					</Row>
					)}
				</Col>
			)}
		</Row> */}
		<div className="text-center">&copy; Copyright 2021 Intuition Way</div>
	</Container> 
	
);
};
export default Footer;
