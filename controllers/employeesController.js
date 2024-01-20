const employeesModel = require('../model/employeesModel')

const getAllEmployees = (req, res) => {
    employeesModel.obtener()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        return res.status(500).send("Error loading employees");
    });
}

const createNewEmployee = (req, res) => {
    const { firstname, lastname} = req.body;

    if (!firstname || !lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    employeesModel.insertar(firstname, lastname)
        .then(idUsuarioInsertado => {
            res.status(201).json({"usuario": idUsuarioInsertado});
        })
        .catch(err => {
            return res.status(500).send("Error inserting employee");
        });
}



const updateEmployee = (req, res) => {
    const {id, firstname, lastname} = req.body;

    if (!firstname || !lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    employeesModel.obtenerPorId(id)
    .then(employee => {
        if (!employee) {
            return res.status(500).json({ "message": `Employee ID ${id} not found` });
        }

        employeesModel.actualizar(id, firstname, lastname)
        .then(up => {
            res.status(201).json({"message": `Updated ${up}`});
        })
        .catch(err => {
            return res.status(500).send("Error updating employee");
        });
    })
    .catch(err => {
        return res.status(500).json({ "message": `Error` });
    });
}

const deleteEmployee = (req, res) => {
    const {id} = req.body;

    employeesModel.obtenerPorId(id)
    .then(employee => {
        if (!employee) {
            return res.status(500).json({ "message": `Employee ID ${id} not found` });
        }

        employeesModel.eliminar(id)
        .then(() => {
            return res.status(201).json({'status': true,
            'msg':'Employee deleted'});
        })
        .catch(err => {
            return res.json({'error':"Error deleting"});
        });
    })
    .catch(err => {
        return res.status(500).json({ "message": `Error ${err}` });
    });
}

const getEmployee = (req, res) => {
    employeesModel.obtenerPorId(req.params.id)
    .then(employee => {
        if (employee) {
            res.status(200).json(employee);
        } else {
            return res.status(500).json({ "message": `Employee ID ${req.params.id} not found` });
        }
    })
    .catch(err => {
        return res.status(500).json({ "message": `Error` });
    });
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}