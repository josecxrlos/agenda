import React from "react";
import { ContactInfo } from "./ContactInfo";

export const ItemContact = ({
	contactData,
	setDataToEdit,
	deleteContact,
}) => {
	return (
		<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			{contactData.length === 0 ? (
				<span className="d-flex justify-content-center">
					No hay contactos 
				</span>
			) : (
				contactData.map(contact => (
					<ContactInfo
						key={contact.id}
						contact={contact}
						setDataToEdit={setDataToEdit}
						deleteContact={deleteContact}
					/>
				))
			)}
		</div>
	);
};
