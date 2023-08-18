import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {deletePost } from "../store/postSlice";
import { getAllPosts } from "../store/postSlice";


function Post() {
  const dispatch = useDispatch()
  const posts = useSelector(state => console.log(state))
  const navigate = useNavigate()
 
function handleClick() {
  dispatch(deletePost())
  navigate("/")
}

 
     return (
      <div>
        <Button variant="contained" onClick={handleClick}>Supprimer ce post</Button>
        <h3>Titre du post</h3>
        <img src="" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum dignissimos iure! Expedita, autem eos delectus facere perspiciatis necessitatibus, possimus, maxime inventore dolor nisi pariatur assumenda velit doloribus tenetur. Nisi quas minima cum commodi ut nostrum dignissimos distinctio dolorum consectetur pariatur, nobis eos perspiciatis dolores explicabo. Dignissimos, cumque voluptas impedit repellat ipsa obcaecati eligendi alias in ipsum! Corrupti ea nisi autem in a dolores nam, natus sunt eaque, qui sapiente, sequi ipsum. Asperiores voluptatum perspiciatis, aliquid voluptas quaerat placeat eos impedit nesciunt, sapiente sit temporibus nemo iure consectetur nihil, unde dolorem laboriosam nisi aut? Id voluptate exercitationem debitis deserunt quisquam harum ab molestiae unde animi voluptatum earum impedit, suscipit, nesciunt, soluta vero quae! Impedit dolore nihil eum deserunt soluta esse unde minus, temporibus velit, id dolor blanditiis assumenda perspiciatis expedita aliquid reprehenderit doloribus excepturi nam culpa adipisci. Provident expedita voluptatum magni est assumenda esse placeat voluptas explicabo ut officia odio fugiat, laboriosam quibusdam, minus ex officiis libero enim eaque optio qui, nulla delectus fuga. Minus magnam itaque nulla a fuga natus enim obcaecati possimus. Illum optio nam numquam eos? Magnam rem exercitationem expedita excepturi obcaecati earum rerum eveniet omnis? Ut, dolorem dolor dolore voluptates provident quis repudiandae, odit voluptatem recusandae accusantium minus aliquid, quisquam deserunt nulla cupiditate consectetur adipisci! Culpa consequuntur enim, corrupti doloremque sequi sit sapiente laborum commodi sunt? Voluptate ipsa ex voluptatem? Beatae libero expedita ab atque. Itaque corrupti nostrum totam dolores atque ex, repellendus magnam? Repudiandae eaque cum sit aperiam ea expedita recusandae officiis nisi perspiciatis reiciendis minima, consequatur autem ipsam cumque pariatur nostrum. Quam modi non rerum eius necessitatibus! Reprehenderit dignissimos exercitationem eum optio, assumenda reiciendis itaque magni voluptas ipsa labore. Est sapiente, odit alias animi suscipit similique, inventore quos rem labore quia esse explicabo atque harum assumenda voluptatibus minus asperiores laudantium tempore illo earum ad.</p>
  
        <h4>Sous titre</h4>
  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, numquam. Eligendi expedita impedit quam at, magnam illum soluta tempore facilis est. Id laudantium delectus error? Ullam dolorem cupiditate fuga adipisci amet perferendis aliquid unde, ut modi facere culpa praesentium quibusdam in esse quas obcaecati recusandae iure magnam eaque id. Cupiditate provident architecto doloribus voluptatibus quia minima ab vero nemo iure saepe officiis quis possimus eveniet quam eos, ea doloremque iste rerum! Quia officia eos cumque distinctio sint modi autem libero repellat vel earum nesciunt aperiam ea laboriosam veritatis reprehenderit quo eligendi porro facere, quos nam commodi quaerat doloremque! Vel ut veniam neque iste pariatur temporibus quam repudiandae sit, dignissimos natus ad libero asperiores repellendus eligendi harum animi magnam explicabo sunt optio? Asperiores necessitatibus illo obcaecati praesentium ea sit quo soluta, culpa minus accusamus nemo eum vero nobis ratione maxime repellat vitae blanditiis! In cum velit fuga eum perferendis illum repudiandae maiores, pariatur commodi atque eligendi exercitationem officia quam quaerat reprehenderit temporibus eaque voluptates adipisci, nostrum rem! Culpa odit laboriosam labore error dolorem omnis aperiam distinctio possimus voluptatibus sequi. Expedita, veniam voluptatibus. Quis facilis, voluptas tempora in nobis delectus sed quo maiores alias, magnam velit ea debitis facere. Vitae voluptatem voluptatibus odio non a modi illo atque natus repellat expedita, quis quam distinctio, ducimus ad, sint quaerat sit veniam! Iusto pariatur voluptates atque assumenda excepturi officia officiis libero temporibus eligendi iure et beatae veritatis unde odit aspernatur quae quas voluptas laudantium eius, molestiae nesciunt sunt! Laudantium architecto a amet earum blanditiis.</p>
  
      <h4>Qu'en pensez vous ?</h4>
      {/*  Zone de commentaires */}
      </div>
    )
  }
  
  export default Post
  