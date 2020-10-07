const PouchDB = require('pouchdb');
const db = new PouchDB('./db'); // Criar Base de Dados

main();
function main() {
	// createUser();
	findUser("1");
}

function createUser() {
	db.put({
		_id: "1",
		name: "User",
		language: "en",
		birthDate: "01/01/1970"
	}, function (err, response) {
		if (err) return console.log(err);
		else console.log("User Created");
	});
}

export function editeUser(nome) {
	db.post({
		title: nome
	}, function (err, response) {
		if (err) return console.log(err);
		else console.log("User Edited");
	});
}

export function findUser(id) {
	db.get(id, function (err, doc) {
		if (err) return console.log(err);
		else return doc;
	});
}

function deleteUser(id) {
	db.get(id, function (err, doc) {
		if (err) { return console.log(err); }
		db.remove(doc, function (err, response) {
			if (err) return console.log(err);
			else console.log("Doc Apagado");
		});
	});
}

function deleteDB() {
	// Delete Base de Dados
	db.destroy(function (err, response) {
		if (err) console.log(err);
		else console.log("success");
	});
}