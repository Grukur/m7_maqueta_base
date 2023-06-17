import Cursos from "../models/Cursos.js";
import Estudiantes from "../models/Estudiantes.js";

export const getCursos = async (req, res) => {
    try {
        let cursos = await Cursos.findAll()
        res.send({
            status:200,
            data:cursos.rows,
            message:'Cursos obtenidos con exito'
        })
    } catch(error) {
        console.log('Error al cargar cursos: ', error)
    }
}

export const getCursoBy = async (req, res) => {
    try {
        let {id} = req.params
        let result = await Cursos.findBy(id)
        res.send({
            code:200,
            data:result.rows,
            message:'Curso por ID obtenido con exito'
        })
    }catch(error){
        console.log('Error al buscar curso por id: ', error)
    }
}

export const createCursos = async (req, res) => {
    try {
        let {titulo, descripcion} = req.body
        let nuevoCurso = new Cursos(titulo, descripcion)
        let result = await nuevoCurso.createCursos()
        res.send({
            code:200,
            data:result.rows,
            message:'Curso creado con exito'
        })
    } catch (error) {
        console.log('Error al crear un curso: ', error)
    }
}

export const updateCursos = async (req, res) => {
    try {
        let {id} = req.params
        let {titulo, descripcion} = req.body
        let result = await Cursos.updateCursos(id, titulo, descripcion)
        res.send({
            code:200,
            data:result.rows,
            message:'Curso actualizado con exito'
        })
    } catch(error) {
        console.log('Error al actualizar curso: ', error)
    }
}
export const deleteCursos = async (req, res) => {
    try {
        let {id} = req.params
        let result = await Cursos.deleteCursos(id)
        res.send({
            code:200,
            data:result.rows,
            message:'Curso Eliminado con exito'
        })
    } catch(error) {
        console.log('Error al actualizar curso: ', error)
    }
}
