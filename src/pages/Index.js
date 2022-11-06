import React, { useEffect, useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { ItemContact } from "../components/ItemContact";
import Swal from "sweetalert2";

export const Index = () => {
	const [contactData, setContactData] = useState([]);
	const [dataToEdit, setDataToEdit] = useState(null);

	//* get data local storage
	useEffect(() => {
		let getContacts = localStorage.getItem("contacts");
		if (getContacts != null) {
			setContactData(JSON.parse(getContacts));
		} else {
			setContactData([]);
		}
	}, []);

	//* update data localstorage
	useEffect(() => {
		localStorage.setItem(
			"contacts",
			JSON.stringify(contactData)
		);
	}, [contactData]);

	const addContact = data => {
		//* validation name not exist
		if (
			!contactData.find(
				c =>
					c.name.toLowerCase() === data.name.toLowerCase()
			)
		) {
			data.id = Date.now();
			setContactData([...contactData, data]);
			Swal.fire({
				title: "Contacto Guardado!",
				icon: "success",
				confirmButtonColor: "#EF5350",
			});
		}
	};

	const updateContact = data => {
		let newContact = contactData.map(c =>
			c.id === data.id ? data : c
		);
		setContactData(newContact);
		Swal.fire({
			title: "Contacto Actualizado!",
			icon: "success",
			confirmButtonColor: "#EF5350",
		});
	};

	const deleteContact = id => {
		//let confirmDelete = window.confirm("Are you sure to delete the contact?")
		Swal.fire({
			title: "Esta seguro de eliminar este contacto?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#EF5350",
			cancelButtonColor: "#212738",
			confirmButtonText: "Aceptar",
		}).then(result => {
			if (result.isConfirmed) {
				let newData = contactData.filter(c => c.id !== id);
				setContactData(newData);
			}
		});
	};

	return (
		<div className="container mt-5 mb-5">
			<div className="row">
				<ContactForm
					addContact={addContact}
					updateContact={updateContact}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				<ItemContact
					contactData={contactData}
					setDataToEdit={setDataToEdit}
					deleteContact={deleteContact}
				/>
			</div>
		</div>
	);
};
