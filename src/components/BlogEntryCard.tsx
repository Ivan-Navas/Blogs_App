import { VscAccount,VscComment,VscHeart } from "react-icons/vsc";
import { BiShareAlt,BiBarChart } from "react-icons/bi";

function BlogEntryCard() {
  return (
    <div>
        <div>//TODO hacer que la informacion mostrada sea dinamica (prueba)
            <VscAccount/>
            <h3>Nombre_Prueba</h3>
            <h6>@usuario_Prueba</h6>
            <h6> 1d</h6>
        </div>
        <p>//Todo El texto se debe mostrar dinamicamente
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero voluptatibus perferendis iure consectetur illum blanditiis nisi quos ad officiis adipisci accusamus deleniti tempore pariatur fuga, sunt ducimus velit dignissimos.
        </p>
        <div className="estadisticas">//TODO Las estadisticas se deben mostrar dinamicamente
          <VscComment />
          <BiShareAlt/>
          <VscHeart/>
          <BiBarChart/>
        </div>
    </div>
  )
}

export default BlogEntryCard