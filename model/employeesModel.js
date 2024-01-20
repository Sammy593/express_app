const conexion = require("../config/config")
module.exports = {
    insertar(firstname, lastname) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into employees (firstname,lastname)
                values (?, ?)`,
                [firstname, lastname], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    obtener() {
        return new Promise((resolve, reject) => {
            
            conexion.query(`select id, firstname, lastname from employees`,
                (err, resultados) => {
                    console.log(err);
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, firstname, lastname from employees where id = ?`,
                [id],
                (err, resultados) => {
                    //console.log({resultados});
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(id, firstname, lastname) {
        return new Promise((resolve, reject) => {
            conexion.query(`update employees set firstname = ?, lastname = ? 
                where id = ?`,
                [firstname, lastname, id],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(`${result.affectedRows} record(s) updated`);
                });
        });
    },
    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from employees
            where id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}