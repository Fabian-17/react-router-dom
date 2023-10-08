import '../../public/css/principal.css';

export const Principal = () => {
    return (
        <>
            <main>
        <div className="container">
            <div className="rounded border p-5 shadow">
            <form className="row g-3">
                <div className="col-auto">
                  <label for="inputText1" className="visually-hidden">Origen</label>
                  <input type="text" className="form-control" id="inputText1" placeholder="Origen"/>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">Confirmar</button>
                </div>
              </form>
            <form className="row g-3">
                <div className="col-auto">
                  <label for="inputText2" className="visually-hidden">Destino</label>
                  <input type="text" className="form-control" id="inputText2" placeholder="Destino"/>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">Confirmar</button>
                </div>
              </form>
            </div>
        </div>


        <div className="rounded border p-5 shadow mt-5">

            <label for="inputPrecio" className="visually-hidden">Precio estimado del viaje</label>
            <input type="text" className="form-control" id="inputPrecio" placeholder="Estimado"/>

        </div>

    </main>
        </>
    );
}