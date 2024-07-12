export const metadata = {
  title: "CRUD",
  description: "Page description",
};

// Endpoints
const endpointOfertasGet = "https://lizard-server.vercel.app/api/oferta";
const endpointAdmisionesGet = "https://lizard-server.vercel.app/api/admision";

const endpointGetProfesores = "https://lizard-server.vercel.app/api/profesores";
const endpointAdmisionCrear = "https://lizard-server.vercel.app/api/admision";
const endpointCrearOferta = "https://lizard-server.vercel.app/api/oferta";

const endpointProfesorObtener =
  "https://lizard-server.vercel.app/api/profesores/:profesorId";
const endpointObtenerAdmisionPorId =
  "https://lizard-server.vercel.app/api/admision/:admisionId";
const endpointOfertaPorId =
  "https://lizard-server.vercel.app/api/oferta/:ofertaId";
const endpointAniadirOfertaAdmision =
  "https://lizard-server.vercel.app/api/admision/admisiontooferta";

// Respuestas de la API

const response201AltaProfe = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
  {
    nombre: "Juan",
    apellidos: "Pérez",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01",
  },
];

const responseMensajeAltaProfe = [
  {
    nombre: "Juan",
    apellidos: "Pérez",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01T00:00:00.000Z",
    _id: "6610e7c80d4f80d8f97a0e2f",
    createdAt: "2024-04-06T06:12:24.605Z",
    updatedAt: "2024-04-06T06:12:24.605Z",
  },
];

const response200CambioProfe = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
  {
    nombre: "Juan Ricardo",
    apellidos: "Pérez Guzman",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01",
  },
];

const response200ModificacionProfe = [
  {
    _id: "6610e0d1ce44bf005cc0eb6a",
    nombre: "Juan Ricardo",
    apellidos: "Pérez Guzman",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01T00:00:00.000Z",
    createdAt: "2024-04-06T05:42:41.971Z",
    updatedAt: "2024-04-06T05:53:40.920Z",
  },
];

const headersEliminacion = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
];

const responseMensajeEliminacionProfe = [
  {
    message: "Profesor eliminado exitosamente",
  },
];

const cuerpoCrearAdmision = [
  {
    nombre: "ENE-FEB 2022",
    activo: false,
  },
];

const responseMensajeAltaAdmision = [
  {
    nombre: "ENE-FEB 2022",
    activo: false,
    _id: "6611a8d0809e5a6d5aca82af",
    createdAt: "2024-04-06T19:56:00.138Z",
    updatedAt: "2024-04-06T19:56:00.138Z",
  },
];

const cuerpoEditarAdmision = [
  {
    nombre: "MAR-ABR 2022",
    activo: false,
  },
];

const responseMensajeEditarAdmision = [
  {
    _id: "65f20c82a49afef87d954b0b",
    nombre: "MAR-ABR 2022",
    activo: false,
    createdAt: "2024-03-13T20:28:50.747Z",
    updatedAt: "2024-04-06T20:13:10.515Z",
  },
];

const responseMensajeEliminarAdmision = [
  {
    message: "Admision borrada exitosamente",
  },
];

const cuerpoCrearOferta = [
  {
    nombre: "Ingeniería en Gestión y Desarrollo de Software",
    activo: true,
  },
];

const responseMensajeAltaOferta = [
  {
    nombre: "Ingeniería en Gestión y Desarrollo de Software",
    activo: true,
    _id: "6611af5e113a232072468fc1",
    createdAt: "2024-04-06T20:23:58.536Z",
    updatedAt: "2024-04-06T20:23:58.536Z",
  },
];

const cuerpoEditarOferta = [
  {
    nombre: "Ingenería en Automatización",
    activo: true,
  },
];

const responseMensajeEditarOferta = [
  {
    _id: "65f21676e1fe9db7504a6b65",
    nombre: "Ingenería en Automatización",
    activo: true,
    createdAt: "2024-03-13T21:11:18.240Z",
    updatedAt: "2024-04-06T20:33:54.751Z",
  },
];

const mensajeOfertaEliminada = [
  {
    message: "Oferta educativa eliminada exitosamente",
  },
];

const cuerpoaniadirOfertaAdmision = [
  {
    admisiones: "66872fe0fff1637589019348",
    ofertasaniadidas: ["6690d131463acb44a9b40fd6", "6690e7dac7f98b12257443af"]
  },
];

const mensajeaniadirOfertaAdmision = [
  {
    "message": "Ofertas añadidas a la admisión exitosamente",
    "admision": {
        "ofertas": [
            "6690d131463acb44a9b40fd6",
            "6690e7dac7f98b12257443af"
        ],
        "_id": "66872fe0fff1637589019348",
        "nombre": "Agosto-Diciembre",
        "activo": true,
        "createdAt": "2024-07-04T23:27:28.123Z",
        "updatedAt": "2024-07-12T18:45:21.263Z"
    }
}
];

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              ¡En esta sección abarcamos el manejo de CRUD de cada modulo!
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Aqui te indicaremos cómo funcionan los cruds, el alta, el cambio y
              la baja de acuerdo al modulo, así como la estructura de datos
              utilizada para cada uno.
            </p>
          </div>

          {/* Tabla de roles de Usuario */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-15">
            <h3 className="h3">Esquema de roles de Usuario</h3>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Cabe mencionar que la API cuenta con 2 tipos de usuario, el
              usuario administradir y el usuario moderador, cada uno tiene sus
              acciones correspondientes en la API para poder hacer uso de los
              CRUDS
            </p>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Rol
                  </th>

                  <th scope="col" className="px-6 py-3">
                    ¿Que hace?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Administrador
                  </th>
                  <td className="px-6 py-4">Puede crear, modificar y eliminar en cada uno de los módulos correspondientes</td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Usuario Publico
                  </th>
                  <td className="px-6 py-4">Puede solo visualizar la lista de todos los módulos y buscar por ID</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bloque Profesores - Crear */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Creación de un nuevo profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes dar de alta al profesor
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointGetProfesores}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointGetProfesores}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para dar de alta es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                POST
              </div>{" "}
              Y colocar lo siguiente en el encabezado y cuerpo para dar de alta:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response201AltaProfe, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 201
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje al ser creado:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeAltaProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Profesores - Editar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Modificar a un profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para modificar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-purple-600 bg-purple-200 rounded-full mb-4">
                PUT
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointProfesorObtener}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointProfesorObtener}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado y cuerpo para su
              edición (puedes modificar un solo atributo pero deberás enviar todo el objeto):
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response200CambioProfe, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">Respuesta:</p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response200ModificacionProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Profesores - Eliminar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Eliminar a un profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para eliminar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                DELETE
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointProfesorObtener}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointProfesorObtener}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado para su eliminacion:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(headersEliminacion, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje que aparecera al ser eliminado:{" "}
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeEliminacionProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Admision - Crear */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Creación de una nueva Admisión
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes dar de alta alta una admision
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointAdmisionCrear}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointAdmisionCrear}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para dar de alta es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                POST
              </div>{" "}
              Y colocar lo siguiente en el encabezado y cuerpo para dar de alta:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(cuerpoCrearAdmision, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 201
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje al ser creada:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeAltaAdmision, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Admision - Editar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Modificar una Admisión
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para modificar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-purple-600 bg-purple-200 rounded-full mb-4">
                PUT
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointObtenerAdmisionPorId}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointObtenerAdmisionPorId}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado y cuerpo para su
              edición (puedes modificar un solo atributo pero deberás enviar todo el objeto):
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(cuerpoEditarAdmision, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">Respuesta:</p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeEditarAdmision, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          {/* Bloque Admision - Eliminar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Eliminar una Admisión
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para eliminar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                DELETE
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointObtenerAdmisionPorId}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointObtenerAdmisionPorId}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado para su eliminacion:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(headersEliminacion, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje que aparecera al ser eliminada:{" "}
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeEliminarAdmision, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          {/* Bloque Oferta - Crear */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Creación de una nueva Oferta Educativa
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes dar de alta alta una oferta
              educativa
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointCrearOferta}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointCrearOferta}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para dar de alta es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                POST
              </div>{" "}
              Y colocar lo siguiente en el encabezado y cuerpo para dar de alta:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(cuerpoCrearOferta, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 201
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje al ser creada:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeAltaOferta, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          {/* Bloque Oferta - Editar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Modificar una Oferta Educativa
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para modificar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-purple-600 bg-purple-200 rounded-full mb-4">
                PUT
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointOfertaPorId}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointOfertaPorId}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado y cuerpo para su
              edición (puedes modificar un solo atributo pero deberás enviar todo el objeto):
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(cuerpoEditarOferta, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">Respuesta:</p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeEditarOferta, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          {/* Bloque Oferta - Eliminar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Eliminar una Oferta Educativa
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para eliminar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                DELETE
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointOfertaPorId}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointOfertaPorId}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado para su eliminación:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(headersEliminacion, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje que aparecerá al ser eliminada:{" "}
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(mensajeOfertaEliminada, null, 2)}
                </pre>
              </div>
            </div>
          </div>
           {/* Bloque Añadir ofertas a Admision */}
           <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
            Añadir ofertas a Admision 
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para añadir es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-yellow-200 rounded-full mb-4">
                POST
              </div>{" "}
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointAniadirOfertaAdmision}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointAniadirOfertaAdmision}
                </a>
              </p>
            </div>
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el cuerpo para añadir Ofertas a Admisiones(Recuerda que solo usamos
              los ID's, tanto de la admisión como de las ofertas para facilitar la busqueda de las mismas):
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(cuerpoaniadirOfertaAdmision, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje que aparecerá al Añadir las Ofertas a la Admisión:{" "}
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(mensajeaniadirOfertaAdmision, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
