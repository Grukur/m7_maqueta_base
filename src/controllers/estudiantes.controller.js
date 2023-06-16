import Estudiantes from "../models/Estudiantes.js"

export const getEstudiantes = async (req, res) => {
    try {
        let estudiante = await Estudiantes.findAll();
        res.send({
            code:200,
            data:estudiante,
            message: 'Ok'
        })

    } catch(error){
        console.log('Error', error);
    }
}

