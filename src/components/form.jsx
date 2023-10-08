import '../../public/css/form.css'

export const Form = () => {
    return (
        <>
                    <div className="container">
            <form className="was-validated rounded border p-5" id="formulario" action="/usuario" method="post">
                <div className="imagen">
                <img className="img-fluid" src="../../public/img/taxi.png" alt="Imagen de taxi" height="300" width="300"/>
                </div>
                <h1 className="mb-3 text-center text-black rounded p-2">Registrarse</h1>
                <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <label for="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationEmail" placeholder="Email" required></input>
                  </div>
                <div className="col-12 col-md-6 mb-3">
                    <label for="validationPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationPassword" placeholder="Password" required></input>
                  </div>
                <div className="col-12 col-md-6 mb-3">
                    <label for="validationPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="validationPassword" placeholder="Confirm Password" required></input>
                  </div>
                <div className="col-12 col-md-6 mb-3">
                    <label for="validationNombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationNombre" placeholder="Nombre" required></input>
                  </div>
                <div className="col-12 col-md-6 mb-3">
                    <label for="validationApellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationApellido" placeholder="Apellido" required></input>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label for="validationTelefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="validationTelefono" placeholder="Telefono" required></input>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label for="validationDate" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="validationDate" placeholder="Fecha de Nacimiento" required></input>
                  </div>

                <div className="col-12 col-md-6 mb-3">
                    <input type="checkbox"/>
                    <label>Recordarme</label>
                  </div>
                  <div className="d-flex justify-content-center col col-sm-12 mb-3">
          <button type="submit" className="boton">Registrarme</button>
        </div>
        </div>
        </form>
        </div>
        </>
    )
}