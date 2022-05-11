async function eliminar (array){
    if (array) {
            let {id} = array;
            await fetch(`http://localhost:4000/dataShoes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json" 
                }
            }).then(() => {
                alert("Elemento eliminado");
                
            }).catch(()=>{
                alert('oops algo salio mal')
            });
        };
}

export default eliminar;