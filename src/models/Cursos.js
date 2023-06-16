import db from '../db/db.js'

class Cursos {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion

    }

    static findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = {
                    text: "SELECT id, nombres, apellidos, edad, nro_identificacion FROM estudiantes",
                    values: [],
                }
                let resultado = await db(query);
                return resolve(resultado);
            } catch (error) {
                reject(error)
            }
        });
    }

    createUser() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = {
                    text: `INSERT INTO cursos(titulo, descripcion) VALUES($1,$2) returning id, titulo, descripcion`,
                    values: [this.titulo, this.descripcion],
                };
                let resultado = await db(query);
                return resolve(resultado);
            } catch (error) {
                console.log(error)
                reject(error);
            }
        })
    };

    static updateUser(id, titulo, descripcion) {
		return new Promise(async (resolve, reject) => {
			try {
				let query = {
					text: 'UPDATE cursos SET titulo=$2, descripcion=$3 WHERE id = $1',
					values: [id, titulo, descripcion],
				};
				let resultado = await db(query);
				return resolve(resultado);
			} catch (error) {
				reject(error);
			}
		});
	}

    static deleteUser(id) {
        return new Promise(async (resolve, reject)=>{
            try {
                let query = {
                    text:`DELETE FROM cursos WHERE id=$1`,
                    values:[id],
                };
                let resultado = await db(query);
                return resolve (resultado);
            } catch (error) {
                reject(error)
            }
        })
    }
};

export default Cursos;