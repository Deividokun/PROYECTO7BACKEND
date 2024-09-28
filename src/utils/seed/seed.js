// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const User = require('../../api/models/users') // Asegúrate de la ruta correcta a tu modelo
// require('dotenv').config() // Para cargar las variables de entorno, si es necesario

// // Conectar a la base de datos
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//     console.log('Conectado a la base de datos')
//   } catch (error) {
//     console.log('Error al conectar a la base de datos', error)
//   }
// }

// // Datos de usuarios para la semilla
// const seedUsers = async () => {
//   await connectDB()

//   const users = [
//     {
//       NickName: 'admin',
//       password: bcrypt.hashSync('admin123', 15), // Asegúrate de que coincida con la configuración de tu modelo
//       papel: 'admin'
//     },
//     {
//       NickName: 'user1',
//       password: bcrypt.hashSync('user123', 15),
//       papel: 'user'
//     },
//     {
//       NickName: 'user2',
//       password: bcrypt.hashSync('user123', 15),
//       papel: 'user'
//     },
//     {
//       NickName: 'user3',
//       password: bcrypt.hashSync('user123', 15),
//       papel: 'user'
//     }
//   ]

//   try {
//     // Eliminar los usuarios existentes en la colección
//     // await User.deleteMany({})
//     // console.log('Usuarios existentes eliminados')

//     // Insertar los usuarios nuevos
//     const createdUsers = await User.insertMany(users)
//     console.log('Usuarios insertados:', createdUsers)

//     mongoose.connection.close()
//   } catch (error) {
//     console.log('Error al insertar usuarios:', error)
//     mongoose.connection.close()
//   }
// }

// // Ejecutar la función de semilla
// seedUsers()
