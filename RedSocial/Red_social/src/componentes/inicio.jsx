function inicio () {
    const [nombre,setNombre] = useState ([])
    const [contraseña,setContraseña] = useState ([])
    const [datos,setDatos]= useState ('')
    const [datosn,setDatosn]= useState ('')

    useEffect (() => {
        const fecthValidar= async (auth) =>{
          try {
            const response = await auth.ingresarConNombreYContraseña(nombre,contraseña)
            setNombre(response.nombre);
            setContraseña(response.contraseña);
          } catch (error) {
            console.log('error',error);
          }
        }
        fecthValidar();
    },[])

    const handleConsulta = () =>{
        if (datos != null && datosn!=null) {
            fecthValidar(datos,datosn)
        }
    }

    return(
        <>
        <div >
            <h1>LOGIN</h1>
            <div>
                <input type="text" placeholder="nombre" value={datos} onChange={(e) => setDatos(e.target.value)}/>
                <input type="password" placeholder="contraseña" value={datosn} onChange={(e) => setDatosn(e.target.value)}/>

            </div>
            <div>
                <button onClick={handleConsulta}> INGRESAR </button>
            </div>
        </div>
        </>
    );
    
}

export default inicio;