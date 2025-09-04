import './App.css'

function App() {

  return (
    <>
      <main>
        <section>
          <article>
            <h2>LISTA DE TAREAS DE SANTIAGO</h2>

            <form>
              <label for="nombretarea"></label>
              <input id="nombretarea" name="nombretarea" ></input>
              <button type="button" id="botonañadir" >
                ADD
              </button>
            </form>

            <div id="columnadetareas">

              <div class="tareas" >
                <div class="tareastexto" >
                  <input type="checkbox" id="tarea1" />
                  <label for="tarea1"> TAREA N </label>
                </div>
                
                <button type="button" class="botonbasura" >
                  🗑
                </button>
              </div>
              
              <div class="tareas" >
                <div class="tareastexto" >
                  <input type="checkbox" id="tarea2" />
                  <label for="tarea2"> TAREA N-1 </label>
                </div>
                
                <button type="button" class="botonbasura" >
                  🗑
                </button>
              </div>
              
              <div class="tareas" >
                <div class="tareastexto" >
                  <input type="checkbox" id="tarea3" />
                 <label for="tarea3"> TAREA K </label>
                </div>
                
                <button type="button" class="botonbasura" >
                  🗑
                </button>
              </div>
              
            </div>
          </article>
        </section>
      </main>
      
    </>
  )
}

export default App
